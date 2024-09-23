import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart(state, action){
            const itemIndex = state.cartItems.findIndex( item => item.id === action.payload.id)
            if (itemIndex >= 0 ){
                state.cartItems[itemIndex].cartQuantity += action.payload.quantity;
            }else{
                const tempProduct = { ...action.payload, cartQuantity: action.payload.quantity };
                state.cartItems.push(tempProduct);
            }
            state.cartTotalAmount = state.cartItems.reduce((total, item) => total + (item.defaultPrice * item.cartQuantity), 0);
        },
        removePlantFromCart(state, action){
            state.cartItems = state.cartItems.filter(product => product.id !== action.payload)
            state.cartTotalAmount = state.cartItems.reduce((total, item) => total + (item.defaultPrice * item.cartQuantity), 0);
        }
    }
})

export const { addToCart, removePlantFromCart } = cartSlice.actions;

export default cartSlice.reducer
