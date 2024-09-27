import React, { useEffect, useState } from 'react'
import one from "../../assets/images/86d4b833f735c4c72b3f84a9417bb272.jpeg"
import two from "../../assets/images/6894f95b73dd52943a365198ba6bae84.jpeg"
import three from "../../assets/images/451c6ba5630c99ea1fcf92c438daf134.png"
import four from "../../assets/images/afc2cf7eaa4157cd0c2dc097b2beffd3.jpeg"
import "./productlist.css"
import { ProductCard } from '..//ProductCard/ProductCard'
import { useSelector } from 'react-redux'
import { useQuery } from 'react-query'
import { getProductList } from '../../queries/query'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setError, setProducts, setLoading } from '../../features/products/productsSlice'


const ProductsList = ({filteredItems}) => {
    return (
        <div className="pro">
            {filteredItems.map((product, index) => (
                <ProductCard product={product} key={index} />
            ))}
        </div>
    )
}

export default ProductsList