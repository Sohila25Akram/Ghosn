import { Link } from "react-router-dom"
import four from "../../assets/images/afc2cf7eaa4157cd0c2dc097b2beffd3.jpeg"
import './productCard.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removePlant } from "../../features/products/productsSlice";

const api = 'https://ghosn.runasp.net'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14"

export function ProductCard({product}){
    const [isOptionsClicked, setIsOptionsClicked] = useState('')
    const [cover, setCover] = useState('')

    const dispatch = useDispatch()

    const handleOptionClicked = () =>{
        setIsOptionsClicked(!isOptionsClicked)
    }

    

    // const handleCoverChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setCover(reader.result);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };



    // useEffect(() => {
    //     const fetchImage = async() => {
    //         // const headers = {
    //         //     'Authorization': `Bearer ${token}`,
    //         // };
    //         try {
    //             if (product.imageUrl !== "HasNoImage") {
    //                 const response = await axios.get(`${api}/api/Plant/plantImage/${product.imageUrl}`);
    //                 const responseImg = response.data;
    //                 setCover(responseImg);
    //             } else {
    //                 // If the image ID is "HasNoImage", set a placeholder image or handle accordingly
    //                 console.log("No image available for this plant.");
    //                 // Example: Set a placeholder image
    //                 setCover(defaultImage);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching plant image:', error);
    //             // setError('Failed to load image'); // Set error state
    //         }
    //     };

    //     fetchImage();
    // }, [])
    

    if (!product) {
        return null;
    }

    const defaultImage = four;
    const onDeletedPlantClick = async() => {
        try {
            const response = await axios.delete(`${api}/api/Plant/Delete/${product.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('Delete Plant API Response:', response.data);
            dispatch(removePlant(product.id));
        } catch (error) {
            console.error('Error deleting plant:', error);
        }
    }


    
    return(
        <div className="product">
            <div className='img-container'>
                {product.imageUrl === "HasNoImage" ?   <img src={defaultImage} alt="main" /> :   <img src={`${api}/plant_images/${product.imageUrl}`} alt="main" />}
            </div>
            <h3>{product.name}</h3>
            <span>{parseFloat(product.defaultPrice).toFixed(2)}E.P</span><br />
            <Link to={`/Plant/${product.id}`} className='product-btn main-button green-button'><i className="ri-arrow-right-line"></i> اكتشف</Link>
            <span className="options-btn" onClick={handleOptionClicked}>
                <i className="ri-more-fill"></i>
            </span>
            <ul className="options-list" style={{display: isOptionsClicked ? 'block': 'none'}}>
                <li><Link to={`/Plant/${product.id}`} className="link-option"><span>Show</span> <i className="ri-indent-decrease"></i></Link></li>
                <li><Link to='/products' className="link-option"><span>Edit</span> <i className="ri-edit-2-line"></i></Link></li>
                <li><span className="link-option" onClick={onDeletedPlantClick}><span>Delete</span> <i className="ri-delete-bin-5-line"></i></span></li>
            </ul>
        </div>
    )
}