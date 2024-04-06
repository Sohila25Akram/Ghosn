import { useState } from 'react';
import './../styles/Products.css'

export function Products(){
    const categories = ["For Home", "For Garden", "Flowering"];
    const [isActiveCategory, setIsActiveCategory] = useState(0);


    const handleClick = (e) => {
        setIsActiveCategory(e)
    }
    return(
        <div className="container">
            <div className="products-container">
                <h2>Products</h2>
                <div className="product-tap">
                    {categories.map((category, index) => (
                        <span key={index} className={`main-button green-button ${isActiveCategory === index ? 'active' : ''}`} onClick={() => handleClick(index)}>{category}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}