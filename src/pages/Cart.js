import { useState} from 'react';
import {AddedProductToCart} from '../Components/AddedProductToCart/AddedProductToCart';
import { PaymentForm } from '../Components/PaymentForm/PaymentForm';
import '../styles/Cart.css';

export function Cart(){
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    }
    
    return(
        <>
            <div className='container'>
                <div className='cart-sec'>
                    <div className='cart-products'>
                        <h2>سلة المشتريات</h2>
                        <AddedProductToCart />
                        <AddedProductToCart />
                        <AddedProductToCart />
                        <AddedProductToCart />
                        <AddedProductToCart />
                        <AddedProductToCart />
                        <AddedProductToCart />
                        <AddedProductToCart />
                        <AddedProductToCart />
                        <button type='button' className='pay-btn main-button green-button' onClick={handleClick}><i className="ri-arrow-right-s-line"></i> ادفع الان</button>
                    </div>
                    <div className={`payment-form-container ${isOpen ? 'open' : ''}`}>
                        <PaymentForm isOpen={isOpen} setIsOpen={setIsOpen} />   
                    </div>
                </div>  
            </div>
        </>
    )
}
