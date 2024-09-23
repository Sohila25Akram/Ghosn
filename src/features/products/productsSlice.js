import { createSlice } from '@reduxjs/toolkit';
import { useQuery } from 'react-query';
import { getProductList } from '../../queries/query';
import axios from 'axios';

const initialState = {
    products: [],
    isLoading: false,
    error: null
};


const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts(state, action){
            state.products = action.payload;
        },
        setLoading(state, action){
            state.isLoading = action.payload;
        },
        setError(state, action){
            state.error = action.payload;
        },
        addPlant(state, action){
            state.products.push(action.payload)
        },
        removePlant(state, action){
            state.products = state.products.filter(product => product.id !== action.payload)
        },
    }
})

export const { setProducts, setLoading, setError, addPlant, removePlant } = productsSlice.actions;

export default productsSlice.reducer;