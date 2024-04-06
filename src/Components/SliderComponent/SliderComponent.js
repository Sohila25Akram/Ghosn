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
    const [isOpen, setIsOpen] = useState(false);
    const [currentClickedIndex, setCurrentClickedIndex] = useState(null);

    const handlePanelShow = (index) => {
        setIsOpen(true)
        setCurrentClickedIndex(index)
    }

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
                    <swiper-slide key={index} onClick={()=> handlePanelShow(index)}>
                        <img src={image} alt="related" />
                        <div className='swiper-slide-hover'><i className="ri-focus-mode"></i></div>
                    </swiper-slide >
                ))}
            </swiper-container>
            {isOpen && <SliderPanel setIsOpen={setIsOpen} currentClickedIndex={currentClickedIndex} images={images2} />}
        </>
    )
}

export function SliderPanel({ setIsOpen, currentClickedIndex, images}){
    const [currentIndex, setCurrentIndex ] = useState(currentClickedIndex)
    const [windowSize, setWindowSize] = useState(false)
    const [translateValue, setTranslateValue] = useState(0)

    // const choices = document.querySelector('.panel-multiple-choices');

    const handleNext = () =>{
        if(currentIndex < images.length-1)
            setCurrentIndex(currentIndex + 1);

        // if(currentIndex >= 1 && currentIndex < images.length-1){
        //     choices.style.transform = `translateX(${translateValue * (currentIndex - 1) + translateValue}px)`;
        // }
    }

    const handlePrev = () =>{
        if(currentIndex > 0)
            setCurrentIndex(currentIndex - 1);

        // if(currentIndex > 0){
        //     choices.style.transform = `translateX(${translateValue * (currentIndex - 1)}px)`;
        // }
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth >= 992)
        }

        handleResize();

        setTranslateValue(windowSize ? 169.05 : 88);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [windowSize])

    return(
        <div className='slider-panel-blur-container'>
            <div className='slider-panel-container'>
                <div className='panel-photo-container'>
                    <div className='panel-photo-slide' style={{transition:'1s', transform:`translateX(${currentIndex * 100}%)`}}>
                        {images.map((image, index) => (
                            <div key={index} className='photo-panel'>
                                <img src={image} alt='initial' />
                            </div>
                        ))}
                    </div>
                    <span className='panel-next-btn panel-btn' onClick={handleNext}><i className="ri-arrow-left-s-line"></i></span>
                    <span className='panel-prev-btn panel-btn' onClick={handlePrev}><i className="ri-arrow-left-s-line"></i></span>
                </div>
                {/* <div className='panel-multiple-choices-container'>
                    <div className='panel-multiple-choices'>
                        {images.map((image, index) => (
                            <div key={index} className={`choice-photo-panel ${currentIndex === index ? 'active': ''}`}>
                                <img src={image} alt='initial' />
                            </div>
                        ))}
                    </div>
                </div> */}
                <span className='close-btn' onClick={() => setIsOpen(false)}><i className="ri-close-line"></i></span>
                
            </div>
            <span className='photo-number'>{images.length}<span>/</span>{currentIndex + 1}</span>
        </div>
    )
}

