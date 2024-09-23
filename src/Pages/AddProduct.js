import { useState } from 'react'
import '../styles/addProduct.css'
import initialImage from '../assets/image.png'
import { Link } from 'react-router-dom'
import { addPlant } from '../features/products/productsSlice'
import { useDispatch } from 'react-redux'
// import { nanoid } from "@reduxjs/toolkit";
import axios from 'axios'
// import initialImage from '../assets/image.png';


// const api = 'https://9838mzjl-7268.uks1.devtunnels.ms'
// const api= 'https://4gf4bwsm-7268.uks1.devtunnels.ms'
const api = 'https://ghosn.runasp.net'

export function AddProduct (){
    const [ addPlants, setAddPlants] = useState({
        plantName: '',
        plantPrice: '',
        plantQuantity: '',
        plantDescription: '',
        plantHumidity: '',
        plantAmountOfWater: '',
        plantAmountOfSunlight: '',
        plantMinTemprature: '',
        plantMaxTemprature: '',
        plantHeight: '',
        plantCategoryId: '',
        plantSoilType: '',
        plantImageUrl: ''
    })

    const dispatch = useDispatch();

    const onSavePlantClicked = async() => {
        try {
            const formData = new FormData();
            formData.append('Name', addPlants.plantName);
            formData.append('Price', parseFloat(addPlants.plantPrice));
            formData.append('Description', addPlants.plantDescription);
            formData.append('Humdity', addPlants.plantHumidity);
            formData.append('AmountOfWater', parseInt(addPlants.plantAmountOfWater));
            formData.append('AmountSunlight', parseInt(addPlants.plantAmountOfSunlight));
            formData.append('MinTemperature', parseInt(addPlants.plantMinTemprature));
            formData.append('MaxTemperature', parseInt(addPlants.plantMaxTemprature));
            formData.append('SoilType', addPlants.plantSoilType);
            formData.append('ImageFile', addPlants.plantImageUrl);
            formData.append('Quantity', parseInt(addPlants.plantQuantity));
            formData.append('CategoryId', parseInt(addPlants.plantCategoryId));
            formData.append('Height', parseFloat(addPlants.plantHeight));
    
            if (addPlants.plantCategoryId === '3') {
                formData.append('Material', addPlants.potMaterial);
                formData.append('Color', addPlants.potColor);
            }

            const response = await axios.post(`${api}/api/Plant/CreatePlant`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            console.log('Create Plant API Response:', response.data);
            const newPlant = response.data;
            dispatch(addPlant(newPlant))
        } catch (error) {
            console.error('Error creating plant:', error);
        }
    }
    

    // const onSavePlantClicked = async() => {
    //     try{
    //         // const {
    //         //     plantName, 
    //         //     plantPrice, 
    //         //     plantQuantity, 
    //         //     plantDescription,
    //         //     plantHumidity,
    //         //     plantAmountOfWater,
    //         //     plantAmountOfSunlight,
    //         //     plantMinTemprature,
    //         //     plantMaxTemprature,
    //         //     plantHeight,
    //         //     plantCategoryId,
    //         //     plantSoilType,
    //         //     plantImageUrl
    //         // } = addPlants;
    //         if(addPlants.plantName && addPlants.plantImageUrl && addPlants.plantAmountOfWater && addPlants.plantAmountOfSunlight &&  addPlants.plantSoilType && addPlants.plantPrice && addPlants.plantQuantity && addPlants.plantDescription && addPlants.plantHumidity && addPlants.plantMinTemprature && addPlants.plantMaxTemprature && addPlants.plantHeight && addPlants.plantCategoryId){
                
    //             const response = await axios.post(`${api}/api/Plant/CreatePlant`,{
    //                 Name: addPlants.plantName,
    //                 Price: parseFloat(addPlants.plantPrice),
    //                 Description: addPlants.plantDescription,
    //                 Humdity: addPlants.plantHumidity,
    //                 AmountOfWater: parseInt(addPlants.plantAmountOfWater),
    //                 AmountSunlight: parseInt(addPlants.plantAmountOfSunlight),
    //                 MinTemperature: parseInt(addPlants.plantMinTemprature),
    //                 MaxTemperature: parseInt(addPlants.plantMaxTemprature),
    //                 SoilType: addPlants.plantSoilType,
    //                 ImageFile: addPlants.plantImageUrl,
    //                 Quantity:  parseInt(addPlants.plantQuantity),
    //                 CategoryId: parseInt(addPlants.plantCategoryId),
    //                 Height: parseFloat(addPlants.plantHeight)
    //             },{
                    
    //                 headers: {
    //                     'Content-Type': 'multipart/form-data'
    //                 }
    //             })

    //             console.log('Create Plant API Response:', response.data);
    //             const newPlant = response.data;
    //             // dispatch(addPlant(newPlant));
    //             console.log(newPlant)
    //             setAddPlants(newPlant);
                
    //             // setAddPlants({
    //             //     plantName: '',
    //             //     plantPrice: '',
    //             //     plantQuantity: '',
    //             //     plantDescription: '',
    //             //     plantHumidity: '',
    //             //     plantAmountOfWater: '',
    //             //     plantAmountOfSunlight: '',
    //             //     plantMinTemprature: '',
    //             //     plantMaxTemprature: '',
    //             //     plantHeight: '',
    //             //     plantCategoryId: '',
    //             //     plantSoilType: 'Clayey',
    //             //     plantImageUrl: null
    //             // });
                
    //         }
    //     }catch (error) {
    //         console.error('Error creating plant:', error);
    //     }
    //     // dispatch(
    //     //     addPlant({
    //     //         id: nanoid(),
    //     //         name: addPlants.plantName,
    //     //         defaultPrice: addPlants.plantPrice
    //     //     })
    //     // )
    // }

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        if(type === 'file'){
            const file = files[0];
            setAddPlants({
                ...addPlants,
                [name]: file
            });
        }else{
            setAddPlants({
                ...addPlants,
                [name]: value
            });
        }
        
    
    };
    
   
    
    return(
        <div className='container'>
            <form className='add-plant-container' onSubmit={e => e.preventDefault()}>
                <div className='add-plant-top'>
                    <Link to='/dashboard/productsDash'><i className="ri-arrow-left-line"></i> <b>Back To Products</b></Link>
                    <div className='add-plant-photo-container'>
                        <div className='main-plant-photo-container'>
                            <div className='main-plant-photo'>
                                <img src={initialImage} alt='mian' />
                            </div>
                            {/* <span><i className="ri-add-line"></i> Add Photo <i className="ri-gallery-line"></i></span> */}
                            <input type='file' name='plantImageUrl' onChange={handleInputChange} accept="image/*" />
                            {/* <input type='type' name='plantImageUrl' value={addPlants.plantImageUrl} onChange={handleInputChange} /> */}
                        </div>
                        <div className='other-plant-photo-container'>
                            <div className='other-plant-photo'>
                                <img src={initialImage} alt='other' />
                            </div>
                            <div className='other-plant-photo'>
                                <img src={initialImage} alt='other' />
                            </div>
                            <div className='other-plant-photo'>
                                <img src={initialImage} alt='other' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='add-plant-info'>
                    <label htmlFor='plant-name'>Plant Name:</label>
                    <input type='text' id='plant-name' name='plantName' value={addPlants.plantName} onChange={handleInputChange} />
                    <label htmlFor='plant-price'>Price:</label>
                    <input type='text' id='plant-price' name='plantPrice' value={addPlants.plantPrice} onChange={handleInputChange} /><br />
                    <label htmlFor='plant-quantity'>Quantity:</label>
                    <input type='text' id='plant-quantity' name='plantQuantity' value={addPlants.plantQuantity} onChange={handleInputChange} /><br />
                    {/* <label htmlFor='plant-categoryid'>CategoryID:</label>
                    <input type='text' id='plant-categoryid' name='plantCategoryId' value={addPlants.plantCategoryId} onChange={handleInputChange} /><br /> */}
                    <input
                type='radio'
                id='category-plants'
                name='plantCategoryId'
                value='1'
                checked={addPlants.plantCategoryId === '1'}
                onChange={handleInputChange}
            />
            <label htmlFor='category-plants'>Plants</label><br />
            <input
                type='radio'
                id='category-herbs'
                name='plantCategoryId'
                value='2'
                checked={addPlants.plantCategoryId === '2'}
                onChange={handleInputChange}
            />
            <label htmlFor='category-herbs'>Herbs</label><br />
            <input
                type='radio'
                id='category-pots'
                name='plantCategoryId'
                value='3'
                checked={addPlants.plantCategoryId === '3'}
                onChange={handleInputChange}
            />
            <label htmlFor='category-pots'>Pots</label><br />

            {addPlants.plantCategoryId === '3' && (
                <div className='pot-variation-info'>
                    <span>Material</span><br />
                    <select name='potMaterial' onChange={handleInputChange}>
                        <option value=''>Select Material</option>
                        <option value='Plastic'>Plastic</option>
                        <option value='Ceramic'>Ceramic</option>
                        <option value='Metal'>Metal</option>
                        <option value='Terracotta'>Terracotta</option>
                        <option value='Glass'>Glass</option>
                        <option value='Concrete'>Concrete</option>
                        <option value='Wood'>Wood</option>
                        <option value='Stone'>Stone</option>
                        <option value='Bamboo'>Bamboo</option>
                        <option value='Fiberglass'>Fiberglass</option>
                    </select><br />
                    <span>Colors</span><br />
                    <select name='potColor' onChange={handleInputChange}>
                        <option value=''>Select Color</option>
                        <option value='Blue'>Blue</option>
                        <option value='Green'>Green</option>
                        <option value='Red'>Red</option>
                        <option value='Grey'>Grey</option>
                        <option value='Orange'>Orange</option>
                        <option value='White'>White</option>
                        <option value='Yellow'>Yellow</option>
                        <option value='Black'>Black</option>
                        <option value='Cyan'>Cyan</option>
                        <option value='Indigo'>Indigo</option>
                        <option value='Maroon'>Maroon</option>
                        <option value='Magenta'>Magenta</option>
                        <option value='Gold'>Gold</option>
                    </select>
                </div>
            )}
                    <label htmlFor='soil-type'>Soil Type:</label><br />
                    <input type='text' id='soil-type' name='plantSoilType' value={addPlants.plantSoilType} onChange={handleInputChange} /><br />
                    {/* <select id='soil-type' name='plantSoilType' value={plantSoilType} onChange={handleInputChange}>
                        <option value='Clayey'>Clay</option>
                        <option value='Sandy'>Sandy</option>
                        <option value='Loamy'>Loamy</option>
                        <option value='Moist'>Moist</option>
                    </select><br /> */}
                    {/* <span>Category:</span> */}
                    {/* <div className='category-container'>
                        <div>
                            <input type='radio' id='category1' name='category' value='For Homes'  />
                            <label htmlFor='category1'>For Homes</label>
                        </div>
                        <div>
                            <input type='radio' id='category2' name='category' value='For Gardens' />
                            <label htmlFor='category2'>For Gardens</label>
                        </div>
                        <div>
                            <input type='radio' id='category3' name='category' value='Flowering' />
                            <label htmlFor='category3'>Flowering</label>
                        </div>
                    </div> */}
                   
                    <label htmlFor='details'>Details:</label><br />
                    {/* <textarea id='details' placeholder='هنا نبذة عن النبات' name='plantDescription' value={plantDescription} onChange={handleInputChange}></textarea><br /> */}
                    <input id='details' placeholder='هنا نبذة عن النبات' name='plantDescription' value={addPlants.plantDescription} onChange={handleInputChange} /><br />
                    <label>Data:</label>
                    <div className='numeric-data-container'>
                        <div className='numeric-data'>
                            <span>الحرارة</span>
                            <div>
                                <span> <input type='text' id='plant-maxTemperature' name='plantMaxTemprature' value={addPlants.plantMaxTemprature} onChange={handleInputChange} />
                                - <input type='text' id='plant-minTemperature' name='plantMinTemprature' value={addPlants.plantMinTemprature} onChange={handleInputChange} /><span><i className="ri-celsius-fill"></i></span></span>
                                <span><i className="ri-temp-hot-line"></i></span>
                            </div>
                        </div>
                        <div className='numeric-data'>
                        <span>الرطوبة</span>
                            <div>
                                <span><input type='text' id='plant-humidity' name='plantHumidity' value={addPlants.plantHumidity} onChange={handleInputChange} /><span>%</span></span>
                                <span><i className="ri-water-percent-line"></i></span>
                            </div>
                        </div>
                        <div className='numeric-data'>
                            <span>ضوء الشمس</span><br />
                            <div>
                                <span><input type='text' id='plant-sunlight' name='plantAmountOfSunlight' value={addPlants.plantAmountOfSunlight} onChange={handleInputChange} /><span>%</span></span>
                                <span><i className="ri-sun-line"></i></span>
                            </div>
                        </div>
                        <div className='numeric-data'>
                            <span>الارتفاع</span><br />
                            <div>
                                <span><input type='text' id='plant-height' name='plantHeight' value={addPlants.plantHeight} onChange={handleInputChange} /><span>cm</span></span>
                                <span><i className="ri-expand-height-fill"></i></span>
                            </div>
                        </div>
                        <div className='numeric-data'>
                            <span>كمية الماء</span><br />
                            <div>
                                <span><input type='text' id='plant-water' name='plantAmountOfWater' value={addPlants.plantAmountOfWater} onChange={handleInputChange} /><span>L</span></span>
                                <span><i className="ri-expand-height-fill"></i></span>
                            </div>
                        </div>
                    </div>
                    <button type='submit' className='save-plant-btn main-button green-button' onClick={onSavePlantClicked}>Save</button>
                </div>
            </form>
        </div>
    )
}