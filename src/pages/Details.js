import { SliderPanel, SliderPotComponent} from '../Components/SliderComponent/SliderComponent';
import { SliderMultiplePhotos } from '../Components/SliderComponent/SliderComponent';
import { Quantity } from '../Components/ProductSmallDetails/ProductSmallDetails';
import { Rating } from '../Components/ProductSmallDetails/ProductSmallDetails';
import '../styles/Details.css'

export function Details (){
    return(
        <>
            <div className="container">
                <div className='details-content'>
                    <div className='right-content'>
                        <div className='label'>
                            <h3>نبات الكرز</h3>
                            <span className='price'>300E.P</span>
                        </div>
                        <SliderPotComponent />
                        <div className='numeric-data-container'>
                            <div className='numeric-data'>
                                <span>الحرارة</span>
                                <div>
                                    <span>30<span><i className="ri-celsius-fill"></i></span></span>
                                    <span><i className="ri-temp-hot-line"></i></span>
                                </div>
                            </div>
                            <div className='numeric-data'>
                            <span>الرطوبة</span>
                                <div>
                                    <span>30<span>%</span></span>
                                    <span><i className="ri-water-percent-line"></i></span>
                                </div>
                            </div>
                            <div className='numeric-data'>
                                <span>ضوء الشمس</span><br />
                                <div>
                                    <span>30<span>%</span></span>
                                    <span><i className="ri-sun-line"></i></span>
                                </div>
                            </div>
                            <div className='numeric-data'>
                                <span>الارتفاع</span><br />
                                <div>
                                    <span>30<span>cm</span></span>
                                    <span><i className="ri-expand-height-fill"></i></span>
                                </div>
                            </div>
                        </div>
                        <p>أزهار يابانية الأصل ذات لونين الأبيض والوردي .تحمل هذه الزهور في مضمونها كناية عن الطبيعية سريعة الزوال نظرا لسرعة تفتح وسقوط بتلاتها.</p>
                    </div>
                    <span className='separator'></span>
                    <div className='left-content'>
                        <h4>صور أخرى</h4>
                        <SliderMultiplePhotos />
                    </div>
                </div>
                <div className='down-pay-container'>
                    <div className='pay-child'>
                        <button type='button' className='main-button green-button' onClick={()=>{}}>اضف لسلة المشتريات</button>
                        <Quantity />
                    </div>
                    <div className='rating-container'>
                        <span>التقييمات</span>
                        <Rating />
                    </div>
                </div>
            </div>
            {/* <SliderPanel /> */}
        </>
    )
}
