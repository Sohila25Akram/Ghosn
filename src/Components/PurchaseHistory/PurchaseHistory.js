import { Link } from 'react-router-dom'
import {AddedProductToCart} from '../AddedProductToCart/AddedProductToCart'
import './purchaseHistory.css'
import initialImage from '../../assets/image.png'
import loginImage from '../../assets/login-1.png'
import { useEffect, useState } from 'react'
import axios from 'axios'

const api = 'https://ghosn.runasp.net'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14"

export function PurchaseHistory (){
    const [productsOrderd, setProductsOrderd] = useState([])

    useEffect(() => {
        const fetchedData = async () => {
            try{
                const response = await axios.get(`${api}/api/Auth/PurchaseHistory`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log('Response Data:', response.data);
                const list = response.data;
                setProductsOrderd(list);
            }catch (error){
                console.log('error to fetch orders', error)
            }
        }
        fetchedData();
    }, [])

    return(
        <>
            {productsOrderd.map((product, index) => (
                <OrderProduct product={product} key={index} />
            ))}
        </>
    )
}

const OrderProduct = ({product}) => {
    return(
        <div className='order-product'>
            <div className='order-product-img'>
                <img src={`${api}/${product.details.imageUrl}`} alt='' />
            </div>
            <div>
                <h4>{product.details.name}</h4>
                <span>{product.productType}</span>
            </div>
            <span>quantity: {product.quantity}</span>
            <Link to='' className='main-button green-button' >show</Link>
        </div>
    )
}