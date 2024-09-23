import { useDispatch } from 'react-redux';
import initialImage from '../../assets/image.png';
import { removePlantFromCart } from '../../features/products/cartSlice';
import { Quantity } from '../ProductSmallDetails/ProductSmallDetails';
import './AddedProductToCart.css';
import axios from 'axios';
import { useState } from 'react';
import four from "../../assets/images/afc2cf7eaa4157cd0c2dc097b2beffd3.jpeg"
import { updateQuantityInCart } from '../../features/products/cartSlice';

export function AddedProductToCart({product}){
    const api = 'https://ghosn.runasp.net'

    const defaultImage = four;
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14"

    const dispatch = useDispatch()

    const onDeletedPlantClick = async() => {
        try {
            let deleteId;
            let myPotvarId = null;

            if (product.isPotVariation) {
                deleteId = product.potParentId;
                myPotvarId = product.id;
            } else {
                deleteId = product.id;
                dispatch(removePlantFromCart(deleteId));
            }
            const response = await axios.delete(`${api}/api/Cart/Delete/${deleteId}`,{
                data: {
                    productId: deleteId,
                    potvarId: myPotvarId
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('Delete Plant from Cart:', response.data);
        } catch (error) {
            console.error('Error deleting product form cart:', error);
        }
    }

    console.log('Product:', product);
    if (!product) {
        return null;
    }
    
    return(
        <div className="product-in-cart">
            <div className='up-product-info'>
                <div className='info'>
                    <h3>{product.name}</h3>
                    <div className='first-info'>
                        <span>نباتات مزهرة</span>
                        {/* <span>out of stock</span> */}
                    </div>
                    <div className='last-info'>
                        <span>{product.defaultPrice.toFixed(2)}E.P</span>
                        {/* <Quantity quantity={product.quantity} onQuantityChange={handleQuantityChange} /> */}
                        <span>الكمية: {product.quantity}</span>
                    </div>
                </div>
                <div className='image'>
                    {product.imageurl ? <img src={`${api}/${product.imageurl}`} alt="main" /> :  <img src={defaultImage} alt="main" />}
                </div>
            </div>
            <div className='down-product-info'>
                <span onClick={onDeletedPlantClick}>حذف <i className="ri-delete-bin-5-line"></i> </span>
                <span>لون الوعاء</span>
            </div>
        </div>
    )
}
