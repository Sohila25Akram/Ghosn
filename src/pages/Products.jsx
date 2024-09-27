import React, { useState, useEffect } from 'react'
import ProductsList from '../Components/productlist/ProductsList'
import productsimg from "../assets/images/products.png"
import "../styles/products.css"
import { PlantCategory } from '../Components/Taps/Taps'
import axios from 'axios'
import { getProductList, getProductsByOrderName, getProductsByOrderPrice, getProductsBySoilType } from '../queries/query'
import { setError, setProducts, setLoading } from '../features/products/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Pots from '../Components/Pots/Pots'
import { fetchFilteredData, fetchSearchedPlants } from '../actions/productsAction'
import { useQuery } from 'react-query'

const defaultData = [
  
    {
        id: "1",
        name: 'name',
        description: 'description',
        defaultPrice: '100',
    },
    
    {
        id: "2",
        name: 'name2',
        description: 'description2',
        defaultPrice: '200',
    },
    {
        id: "3",
        name: 'name3',
        description: 'description2',
        defaultPrice: '200',
    },
    {
        id: "4",
        name: 'name4',
        description: 'description2',
        defaultPrice: '200',
    },
    {
        id: "5",
        name: 'name5',
        description: 'description2',
        defaultPrice: '200',
    },
]

// const api = 'https://q534k15r-7268.uks1.devtunnels.ms/graphql'
const api = 'https://ghosn.runasp.net/graphql'

const Products = () => {
    const [isOpenFilter, setIsOpenFilter] = useState(false)
    const [chosenFilter, setChosenFilter] = useState('all')
    // const [filteredItems, setFilteredItems] = useState([])
    const [selectedSoilType, setSelectedSoilType] = useState('')
    // const categories = ["For Home", "For Garden", "Flowering"];
    const categories = ["نباتات", "أوعية"];
    const [isActiveCategory, setIsActiveCategory] = useState(0);

    const handleClick = (e) => {
        setIsActiveCategory(e)
    }

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const isLoading = useSelector(state => state.products.isLoading);
    const error = useSelector(state => state.products.error);
    
    //----------------------------------------------------
    // const fetchedData = async () => {
    //     let response;
    //     try{
    //         if(chosenFilter === 'all'){
    //             response = await axios.post(api, {
    //                 query: getProductList
    //             })
    //         }else if(chosenFilter === 'name-desc'){
    //             response = await axios.post(api, {
    //                 query: getProductsByOrderName,
    //                 variables : {name: "DESC"}
    //             })
    //         }else if(chosenFilter === 'name-asc'){
    //             response = await axios.post(api, {
    //                 query: getProductsByOrderName,
    //                 variables : {name: "ASC"}
    //             })
    //         }else if(chosenFilter === 'price-desc'){
    //             response = await axios.post(api, {
    //                 query: getProductsByOrderPrice,
    //                 variables: {defaultPrice : "DESC"}
    //             })
    //         }else if(chosenFilter === 'price-asc'){
    //             response = await axios.post(api, {
    //                 query: getProductsByOrderPrice,
    //                 variables: {defaultPrice : "ASC"}
    //             })
    //         // }else if (chosenFilter === 'Clayey') {
    //         //     response = await axios.post(api, {
    //         //         query: getProductsBySoilType, 
    //         //         variables: { soilType: "Clayey" } 
    //         //     });
    //         // }else if (chosenFilter === 'Loamy') {
    //         //     response = await axios.post(api, {
    //         //         query: getProductsBySoilType, 
    //         //         variables: { soilType: "Loamy" } 
    //         //     });
    //         }else {
    //             response = await axios.post(api, {
    //                 query: getProductsBySoilType,
    //                 variables: { soilType: chosenFilter.toUpperCase() }
    //             });
    //         }
    //         // if (response && response.data && response.data.data) {
    //         //     setFilteredItems(response.data.data.plants);
    //         //     dispatch(setProducts(response.data.data.plants));
    //         // }
    //         setFilteredItems(response.data.data.plants);
    //         dispatch(setProducts(response.data.data.plants))
    //     }catch(error) {
    //         console.error("Error fetching data:", error);
    //         console.error("GraphQL errors:", error.response.data.errors); // Log GraphQL errors
    //         dispatch(setError(error.message));
    //     }
    // };
    
    //------------------------------------------

    const { data: filteredItems = [], isLoading: productsLoading, error: productsError } = useQuery(
        
        ["getFilteredItems", chosenFilter],
        () => fetchFilteredData(chosenFilter),
        {
            enabled: !!chosenFilter, // Fetch only when productId is available
        }
    );


    useEffect(() => {
        fetchFilteredData(chosenFilter);
    }, [chosenFilter])


    const handleFilterChange = (event) => {
        setChosenFilter(event.target.value);
    };

    // const handleChangeFilterSortType = (event) => {
    //     const selectedOption = event.target.value;
    //     setSelectedSoilType(selectedOption);
    // }
    
    const handleOpenFilterMenu = () => {
        setIsOpenFilter(!isOpenFilter);
    }

    return (
        <>
            <div className="products container">
                <div className="p-header">
                    <div className="img"><img src={productsimg} alt="" /></div>
                    <div className="content">
                    <h2>{isActiveCategory === 0 ? 'نباتات' : 'أوعية'}</h2>
                    <p>{isActiveCategory === 0 ? 'ابحث عن المكمل المثالي لتزيين منزلك واصنع تأثيرا ايجابيا في بيئتك' : 'اكتشف مجموعة متنوعة من الأوعية لتزيين منزلك'}</p>
                    </div>
                </div>
                <div className='product-tap'>
                    {/* <PlantCategory /> */}
                    {categories.map((category, index) => (
                        <span key={index} className={`main-button green-button ${isActiveCategory === index ? 'active' : ''}`} onClick={() => handleClick(index)}>{category}</span>
                    ))}
                    <Link to='/dashboard/productsDash/addProduct' className="add-product-btn main-button">Add Product</Link>
                </div>
                <div>
                    {/* <select name="filter" onClick={handleChangeFilter}>
                        <option value="all">All</option>
                        <option value="name">Order By Name</option>
                        <option value="price">Order By Price</option> */}
                        {/* <option value="soilType">Filter By SoilType</option> */}
                    {/* </sel/ect> */}
                    <span className='filter-btn' style={{ display: isActiveCategory === 0 ? 'inline-block' : 'none' }}> 
                        <span onClick={handleOpenFilterMenu}><i className="ri-filter-2-line"></i> Filter</span>
                        <ul className='filter-container' style={{display: `${isOpenFilter? 'block': 'none'}`}}>
                            <span>Soil Type</span>
                            <li>
                                <input type='radio' id='soilType1' name='soilType' value='CLAYEY' onClick={handleFilterChange} />
                                <label htmlFor='soilType1'>Clay</label>
                            </li>
                            <li>
                                <input type='radio' id='soilType2' name='soilType' value='SANDY' onClick={handleFilterChange} />
                                <label htmlFor='soilType2'>Sandy</label>
                            </li>
                            <li>
                                <input type='radio' id='soilType3' name='soilType' value='Loamy' onClick={handleFilterChange} />
                                <label htmlFor='soilType3'>Loamy</label>
                            </li>
                            <li>
                                <input type='radio' id='soilType4' name='soilType' value='Moist' onClick={handleFilterChange} />
                                <label htmlFor='soilType4'>Moist</label>
                            </li>
                            <span>Price</span>
                            <li>
                                <input type='radio' id='price-desc' name='price' value='price-desc' onClick={handleFilterChange} />
                                <label htmlFor='price-desc'>DESC</label>
                            </li>
                            <li>
                                <input type='radio' id='price-asc' name='price' value='price-asc' onClick={handleFilterChange} />
                                <label htmlFor='price-asc'>ASC</label>
                            </li>
                            <span>Name</span>
                            <li>
                                <input type='radio' id='name-desc' name='name' value='name-desc' onClick={handleFilterChange} />
                                <label htmlFor='name-desc'>DESC</label>
                            </li>
                            <li>
                                <input type='radio' id='name-asc' name='name' value='name-asc' onClick={handleFilterChange} />
                                <label htmlFor='name-asc'>ASC</label>
                            </li>
                        </ul>
                    </span>
                    {/* <select name="soilType" onChange={handleChangeFilter}>
                        <option value="">Select Soil Type</option>
                        <option value="CLAYEY">Clay</option>
                        <option value="SANDY">Sandy</option>
                        <option value="LOAMY">Loamy</option>
                        <option value="MOIST">Moist</option>
                    </select> */}
                </div>
                {isActiveCategory === 0 ? (
                    <ProductsList filteredItems={filteredItems} />
                ) : (
                    <Pots />
                )}
            </div>
        </>

    )
}

export default Products