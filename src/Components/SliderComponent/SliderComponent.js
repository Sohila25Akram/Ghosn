import {useState, useEffect} from 'react';
import { PotColor } from '../ProductSmallDetails/ProductSmallDetails';
import initialImage from '../../assets/image.png'
import loginImage from '../../assets/login-1.png'
import { register } from 'swiper/element/bundle';
import 'swiper/swiper-bundle.css';
import './SliderComponent.css';

register();

const images = [initialImage, loginImage, initialImage];
const images2 = [initialImage, loginImage, initialImage, loginImage, initialImage, loginImage, initialImage, loginImage, initialImage, loginImage, initialImage, loginImage];

export function SliderPotComponent (){
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = (nextIndex) => {
        setCurrentIndex(nextIndex);
    };

    const getNextIndex = () => {
        return (currentIndex + 1) % images.length;
    };
    
    const handlePotClick = (index) => {
        setCurrentIndex(index);
    };

    return(
        <div className='flex-up-slider'>
            <div className='overflow-fix'>
                <div className='border-container'>
                    <div className="slider-pot-container">
                        <div
                            className="slider-pot-child" 
                            style={{
                                transition: "1s ease", 
                                transform:`translate(${currentIndex * 100}%)`
                            }}
                        >
                        {images.map((image, index) => (
                            <div key={index} className='modified-container'>
                                <img src={image} alt='initial'/>
                            </div>
                        ))}
                        </div>
                        <span className='next-btn' onClick={() => handleNext(getNextIndex())}>
                            <i className="fa-solid fa-chevron-left"></i>
                        </span>
                        <ul className='bullets-container'>
                            {images.map((image, index) => (
                                <li key={index} className={`bullet ${currentIndex === index ? 'active' : ''}`}></li>
                            ))}
                        </ul>
                        
                    </div>
                </div>
            </div> 
            <div>
                <h4>لون الوعاء المتوفر:</h4>
                <PotColor currentIndex={currentIndex} onPotClick={handlePotClick} />    
            </div>
        </div>
    )
}

export function SliderMultiplePhotos (){
    const [isVertical, setIsVertical] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsVertical(window.innerWidth >= 1400);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
   
    return(
        <>
            <swiper-container
                direction={isVertical ? 'vertical' : 'horizontal'}
                slidesPerView={isVertical ? 'auto' : 3}
                speed="500" 
                loop="false" 
                css-mode="true"
            >
                
                {images2.map((image, index)=>(
                    <swiper-slide key={index} onClick={() => {}}>
                        <img src={image} alt="related" />
                        <div className='swiper-slide-hover'><i className="ri-focus-mode"></i></div>
                    </swiper-slide >
                ))}
            </swiper-container>
        </>
    )
}
