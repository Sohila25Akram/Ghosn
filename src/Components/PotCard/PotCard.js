import { SliderPotComponent } from '../SliderComponent/SliderComponent'
import './potCard.css'
import initialImage from '../../assets/image.png'
import login from '../../assets/login-1.png'
import { Quantity } from '../ProductSmallDetails/ProductSmallDetails'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { addToCart } from '../../features/products/cartSlice'

const api = 'https://ghosn.runasp.net'
 const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14"

export function PotCard({pot, image}){
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    const handleAddToCart = async (product) => {
        // const potVariationId = Array.isArray(product.potVariations) && product.potVariations.length > 0 ? product.potVariations[0].variationId : null;

        let potVariationId = null;
        if (Array.isArray(product.potVariations) && product.potVariations.length > 0) {
            potVariationId = product.potVariations[0].variationId;
        }
        // if (!potVariationId) {
        //     console.error("No valid pot variation ID found.");
        //     return;
        // }

        console.log("Sending request with productId:", product.id);
        console.log("Sending request with potVariationId:", potVariationId);
        const cartItem = {
            id: product.id,
            name: product.name,
            defaultPrice: product.defaultPrice,
            minTemperature: product.minTemperature,
            maxTemperature: product.maxTemperature,
            humdity: product.humdity,
            amountSunlight: product.amountSunlight,
            height: product.height,
            description: product.description,
            quantity: quantity
        };
        dispatch(addToCart(cartItem));

        // dispatch(addToCart(product))
        try {
            const response = await axios.post(`${api}/api/Auth/AddToCart`,
                {
                    productId: product.id,
                    quantity: quantity, // Update to include quantity
                    potVariationId: potVariationId // Set the potVariationId to 0 or any default value as needed
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log("Full response from backend:", response.data);
            // Check for success message
            // if (response.data === "Added To Cart Successfully") {
                // Product added to cart successfully
                dispatch(addToCart(cartItem));
                console.log("Product successfully added to cart.");
            // } else if (response.data === "Cart item quantity updated successfully") {
                // Quantity of existing item updated successfully
                // console.log("Cart item quantity updated successfully.");
            // } else {
                // Unexpected response
                // console.error("Failed to add product to cart: Unexpected response");
            // }
        }catch (error) {
            console.error("Error adding product to cart:", error);
        }
    }
     
    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };
    return(
        <div className='pot-card-container'>
            {/* <SliderPotComponent /> */}
            <div className='pot-corner-top-card'>
            {/* {pot.potVariations.map((variation, index) => (
          <div key={variation.variationId} className="pot-variation">
           <img
                src={variation.ReleventImgUrl ? variation.ReleventImgUrl : initialImage}
                alt={`${pot.name} - ${variation.sizes}`}
                className="variation-image"
                
              />
          
          </div>
        ))} */}
                {/* {pot.ReleventImgUrl ? <img src={pot.ReleventImgUrl} /> :  pot.potVariations.ReleventImgUrl ? : pot.potVariations.ReleventImgUrl : <img src={initialImage} />} */}
                <div className='pot-card-img'>
                    {pot.ReleventImgUrl ? (
                            <img src={`${api}/${pot.ReleventImgUrl}`} alt={pot.name} />
                        ) : (
                            pot.potVariations.length > 0 && pot.potVariations[0].ReleventImgUrl ? (
                                // <img src={`${api}/${pot.potVariations[0].ReleventImgUrl}`} alt={pot.name} />
                                <img src={login} alt={pot.name} />
                            ) : (
                                <img src={initialImage} alt="Default" />
                            )
                    )}
                </div>
               
                <div className='pot-card-info-container'>
                    <div className='post-card-info-top'>
                        <div className='pot-label-container'>
                            <h3>{pot.name}</h3>
                            {pot.potVariations.map((variation) => (
                                <div key={variation.variationId}>
                                <span>{parseFloat(variation.price).toFixed(2)} E.P</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className='colors-container'>
                                <h4>colors</h4>
                                <div><span className='circle-type' style={{backgroundColor: `${pot.colors}`}}></span><span>{pot.colors}</span></div>
                            </div>
                            <div className='material-container'>
                                <h4>material</h4>
                                <span>{pot.material}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='post-card-info-bottom'>
                <div className='size-container'>
                    <h4 style={{visibility:`${(pot.potVariations.length>0)? "visible" : "hidden"}`}}>available pot size</h4>
                    {pot.potVariations.map((variation, index) => (
            <div key={variation.variationId} className="pot-variation">
              <p>{variation.sizes}</p>
            </div>
          ))}
                </div>
                <Quantity quantity={quantity} onQuantityChange={handleQuantityChange} />
                <button className='main-button green-button' onClick={() => handleAddToCart(pot)}>Add to cart</button>
            </div>
        </div>
    )
}