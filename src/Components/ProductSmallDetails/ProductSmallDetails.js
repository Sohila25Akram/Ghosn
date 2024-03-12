import { useState } from 'react';
import ReactStars from 'react-stars';
import initialImage from '../../assets/image.png'
import loginImage from '../../assets/login-1.png'
import './ProductSmallDetails.css';

const images = [initialImage, loginImage, initialImage];

export function PotColor({currentIndex, onPotClick}){
    return(
        <div className='pot-color-big-container'>
            <div className='pot-color-container'>
                {images.map((image, index) => (
                    <span key={index} className={`pot-color ${currentIndex === index?'active': ''}`} onClick={()=>onPotClick(index)}></span>
                ))}
            </div>
        </div>
    )
}

export function Quantity(){
    const [chosenQuantity, setChosenQuantity] = useState(1)
    
    const handleIncrement  = () => {
        setChosenQuantity((e) => (e + 1));
    }

    const handleDecrement  = () => {
        if(chosenQuantity > 1)
            setChosenQuantity((e) => (e - 1));
    }
    
    return(
        <div className='quantity'>
            <i className="ri-add-line" onClick={handleIncrement}></i>
            <span>{chosenQuantity}</span>
            <i className="ri-subtract-line" onClick={handleDecrement}></i>
        </div>
    )
}

export function Rating(){
    const initialRating = 3.5;

    const ratingChanged = (newRating) => {
        console.log(newRating)
    }

    return(
        <div className='rating'>
            <ReactStars 
                count={5}
                value={initialRating}
                onChange={ratingChanged}
                size={20}
                color1={'#000000'}
                color2={'#ffd700'}
                edit={false}
            />
        </div>
    )
}
