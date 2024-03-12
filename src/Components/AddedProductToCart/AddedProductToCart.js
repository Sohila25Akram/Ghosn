import initialImage from '../../assets/image.png';
import { Quantity } from '../ProductSmallDetails/ProductSmallDetails';
import './AddedProductToCart.css';


export function AddedProductToCart(){

    return(
        <div className="product-in-cart">
            <div className='up-product-info'>
                <div className='info'>
                    <h3>زهور الكرز</h3>
                    <div className='first-info'>
                        <span>نباتات مزهرة</span>
                        <span>out of stock</span>
                    </div>
                    <div className='last-info'>
                        <span>300E.P</span>
                        <Quantity />
                    </div>
                </div>
                <div className='image'>
                    <img src={initialImage} alt='initial' />
                </div>
            </div>
            <div className='down-product-info'>
                <span>حذف <i className="ri-delete-bin-5-line"></i> </span>
                <span>لون الوعاء</span>
            </div>
        </div>
    )
}
