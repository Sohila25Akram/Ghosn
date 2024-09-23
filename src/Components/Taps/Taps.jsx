import { useState } from "react";
import './taps.css'
import { Link } from "react-router-dom";

export function PlantCategory(){
    const categories = ["For Home", "For Garden", "Flowering"];
    const [isActiveCategory, setIsActiveCategory] = useState(0);

    const handleClick = (e) => {
        setIsActiveCategory(e)
    }

    return(
       <>
            {categories.map((category, index) => (
                <span key={index} className={`main-button green-button ${isActiveCategory === index ? 'active' : ''}`} onClick={() => handleClick(index)}>{category}</span>
            ))}
            <Link to='/dashboard/productsDash/addProduct' className="add-product-btn main-button">Add Product</Link>
        </>
    )
}

export function ArticleCategory(){
    const categories = ["All", "Published", "Pending"];
    const [isActiveCategory, setIsActiveCategory] = useState(0);

    const handleClick = (e) => {
        setIsActiveCategory(e)
    }
    
    return(
        <>
            {categories.map((category, index) => (
                <span key={index} className={`main-button green-button ${isActiveCategory === index ? 'active' : ''}`} onClick={() => handleClick(index)}>{category}</span>
            ))}
        </>
    )
}