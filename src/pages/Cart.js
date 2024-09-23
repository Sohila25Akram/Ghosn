import { useEffect, useState} from 'react';
import {AddedProductToCart} from '../Components/AddedProductToCart/AddedProductToCart';
import { PaymentForm } from '../Components/PaymentForm/PaymentForm';
import '../styles/Cart.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAddedProductsToCart } from '../queries/query';


export function Cart(){
    const [isOpen, setIsOpen] = useState(false);
    const [cartProducts, setCartProducts] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    // const cartProducts = useSelector(state => state.products.cart)

    
    const handleClick = () => {
        setIsOpen(true);
    }
   
    // const api = 'https://9838mzjl-7268.uks1.devtunnels.ms/graphql'
    // const api= 'https://4gf4bwsm-7268.uks1.devtunnels.ms'
    // const api = 'https://q534k15r-7268.uks1.devtunnels.ms'
    const api = 'https://ghosn.runasp.net'

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14"

    const dispatch = useDispatch()
    useEffect(() => {
        const fetchedData = async() => {
            try{

                const headers = {
                    'Authorization': `Bearer ${token}`,
                };
                const response = await axios.get(`${api}/api/Cart`, {headers});
                const cartProductsData = response.data;
                console.log(cartProductsData);
                // dispatch(cartProducts(response.data))

                setCartProducts(cartProductsData.cartItems);
                setTotalAmount(cartProductsData.totalPriceOfAllProducts);

                // const total = cartProductsData.reduce((acc, product) => {
                //     return acc + (product.defaultPrice * product.quantity);
                // }, 0);
                // setTotalAmount(total);
            }catch(error){
                console.error('Error fetching Added products list:', error);
            }
        };
        fetchedData();
    }, [])

    


    return(
        <>
            <div className='container'>
                <div className='cart-sec'>
                    <div className='cart-products'>
                        <h2>سلة المشتريات</h2>
                        {/* <AddedProductToCart />
                        <AddedProductToCart />
                        <AddedProductToCart />
                        <AddedProductToCart />
                        <AddedProductToCart />
                        <AddedProductToCart />
                        <AddedProductToCart />
                        <AddedProductToCart />
                        <AddedProductToCart /> */}
                        {cartProducts.length > 0 ? (
                            cartProducts.map((product) => (
                                <AddedProductToCart product={product} key={product.id}  />
                            ))
                        ) : (
                            <div>No products in the cart</div>
                        )}
                        <button type='button' className='pay-btn main-button green-button' onClick={handleClick}><i className="ri-arrow-right-s-line"></i> ادفع الان</button>
                    </div>
                    <div className={`payment-form-container ${isOpen ? 'open' : ''}`}>
                        <PaymentForm isOpen={isOpen} setIsOpen={setIsOpen} cartProducts={cartProducts} totalPiceOfAll={totalAmount} />   
                    </div>
                </div>  
            </div>
            {/* <Checkout /> */}
        </>
    )
}

export function Checkout(){

    return(
        <div className='checkout-container'>
            <div className='slider-panel-blur-container blur-fix'>
                <div className='slider-panel-container search-fix'>
                    <h4>checkout</h4>
                    <ul>
                        <li>
                            <span>التاريخ</span>
                            <span>89-89-9</span>
                        </li>
                        <li>
                            <span>طريقة الدفع</span>
                            <span>89-89-9</span>
                        </li>
                        <li>
                            <span>رقم الهاتف</span>
                            <span>89789779</span>
                        </li>
                        <li>
                            <span>اجمالي المبلغ المدفوع</span>
                            <span>67.00E.P</span>
                        </li>
                    </ul>
                    <button type='button' className='main-button green-button'>تأكيد</button>
                </div>
            </div>
        </div>
    )
}
