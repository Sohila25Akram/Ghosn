import React from 'react'
import ProductsList from '../components/productlist/ProductsList'
import productsimg from "../assets/images/products.png"
import "../styles/products.css"
const Products = () => {
  return (
    
<>
<div className="products">
    <div className="p-header">
        <div className="content">
            <h2>نباتات زهرية</h2>
            <p>ابحث عن المكمل
المثالي لتزيين منزلك واصنع 
تأثيرا ايجابيا في بيئتك</p>
        </div>
        <div className="img"><img src={productsimg} alt="" /></div>
    </div>
    <ProductsList/>
</div>

</>

    )
}

export default Products