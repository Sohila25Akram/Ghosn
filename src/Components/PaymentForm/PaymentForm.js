import React, { useEffect, useState  } from 'react';
import loginImage from '../../assets/login-1.png'
import visa from '../../assets/visa.png';
import paypal from '../../assets/paypal.png';
import masterCard from '../../assets/masterCard.png';
import './PaymentForm.css';

export function PaymentForm({isOpen, setIsOpen}){
    const [payMethod, setPayMethod] = useState('masterCard')
    const [inputFields, setInputFields] = useState({
        cardNumber:'',
        zipCode:'',
        expireDate:'',
        cvv:''
    })
    const [errors, setErrors] = useState({})
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleClick = () => {
        setIsOpen(false);
    }

    const validateValue = (inputValues) => {
        let errors = {};
        if(inputValues.cardNumber && !/^[0-9A-Za-z]{4} [0-9A-Za-z]{4} [0-9A-Za-z]{4} [0-9A-Za-z]{4}$/.test(inputValues.cardNumber)){
            errors.cardNumber = 'Invalid card number format. Please enter a valid card number.';
        }
        if(inputValues.zipCode && !/^\d{5}$/.test(inputValues.zipCode)){
            errors.zipCode = 'Invalid zip code format. Please enter a 5-digit zip code.';
        }
        if(inputValues.cvv && !/^\d{3}$/.test(inputValues.cvv)){
            errors.cvv = 'Invalid CVV format. Please enter a 3-digit CVV.'
        }
        return errors;
    }

    const handleChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    }

    const handleSpace = (e) => {
        const inputValue = e.target.value;
        const groups = inputValue.replace(/\W/g, '').match(/.{1,4}/g);
        const newValue = groups ? groups.join(' ') : '';
        setInputFields({ ...inputFields, [e.target.name]: newValue });  
    }

    const handleChangeAndSpace = (e) => {
        handleChange(e);
        handleSpace(e);
    }
        
    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.keys(errors).length === 0) {
            console.log("Form submitted with data:", inputFields);
        }
    }

    useEffect(() => {
        if(formSubmitted){
            const validationErrors = validateValue(inputFields);
            setErrors(validationErrors);
        }
    }, [formSubmitted, inputFields])

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="payment-header">
                    <div className="profile-img">
                        <img src={loginImage} alt='profile' />
                    </div>
                    <h3>تفاصيل الدفع</h3>
                </div>
                <span>طرق الدفع المتاحة:</span>
                <div className='payment-methods'>
                    <div onClick={() => setPayMethod('masterCard')} className={payMethod==='masterCard' ? 'active': ''} >
                        <img src={masterCard} alt='masterCard' />
                    </div>
                    <div onClick={() => setPayMethod('visa')} className={payMethod==='visa' ? 'active' : ''} >
                        <img src={visa} alt='visa' />
                    </div>
                    <div onClick={() => setPayMethod('paypal')} className={payMethod==='paypal' ? 'active': ''}>
                        <img src={paypal} alt='paypal' />
                    </div>
                </div>
                <label htmlFor='card-number'>رقم الكارت:</label>
                <div className='chosen-card main-input'>
                    <input 
                        type='text' 
                        id='card-number' 
                        placeholder='xxxx xxxx xxxx xxxx' 
                        pattern='[0-9A-Za-z]{4} [0-9A-Za-z]{4} [0-9A-Za-z]{4} [0-9A-Za-z]{4}' 
                        maxLength={19}
                        required
                        name='cardNumber'
                        value={inputFields.cardNumber}
                        onChange={handleChangeAndSpace}
                    />
                    <div>
                        <img src={payMethod === 'visa' ? visa : (payMethod === 'paypal' ? paypal : masterCard)} alt='chosen pay method' />
                    </div>
                </div>
                {errors.cardNumber && <span className='error-message'>{errors.cardNumber}</span>}
                <label htmlFor='zip-code'>zip code</label>
                <input 
                    type='text' 
                    id='zip-code' 
                    className='main-input' 
                    pattern="[0-9]{5}"
                    required
                    name='zipCode'
                    value={inputFields.zipCode}
                    onChange={handleChange}
                /><br />
                {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
                <div className='flex-container'>
                    <div>
                        <label htmlFor='expire-date' className='expire-date'>تاريخ الانتهاء:</label>
                        <input 
                            type='month' 
                            id='expire-date' 
                            className='main-input'
                            required
                            name='expireDate'
                            value={inputFields.expireDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='cvv'>CVV</label>
                        <input 
                            type='text' 
                            id='cvv' 
                            className='main-input' 
                            pattern="\d{3}"
                            required
                            name='cvv'
                            value={inputFields.cvv}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                <hr />
                <div className='calculate-cost'>
                    <div>
                        <span>المجموع</span>
                        <span>850E.P</span>
                    </div>
                    <div>
                        <span>الشحن والضرائب</span>
                        <span>100E.P</span>
                    </div>
                    <div>
                        <span>الاجمالي</span>
                        <span>950E.P</span>
                    </div>
                </div>
                <button type='submit' className='main-button green-button' onClick={() => setFormSubmitted(true)}>اكمل الدفع</button>
                <button type='button' className='back-btn main-button green-button' onClick={handleClick}>عودة لسلة المشتريات <i className="ri-arrow-left-s-line"></i></button>
            </form>
        </>
    )
}
