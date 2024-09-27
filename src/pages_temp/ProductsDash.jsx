import { useState } from 'react';
import './../styles/ProductsDash.css'
import { PlantCategory } from '../Components/Taps/Taps';
import ProductsList from '../Components/productlist/ProductsList';
import { useSelector } from 'react-redux';

// const api = 'https://ghosn.runasp.net/graphql'

export function ProductsDash(){
    
    const products = useSelector(state => state.products.products);
    return(
        <div className="container">
            <div className="products-dashboard-container">
                <h2>Products</h2>
                <div className="product-tap">
                    {/* {categories.map((category, index) => (
                        <span key={index} className={`maain-button green-button ${isActiveCategory === index ? 'active' : ''}`} onClick={() => handleClick(index)}>{category}</span>
                    ))} */}
                    <PlantCategory />
                </div>
                <ProductsList filteredItems={products} />
            </div>
        </div>
    )
}