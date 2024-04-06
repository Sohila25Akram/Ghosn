import React from 'react'
import { Routes , Route } from 'react-router-dom' 
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import Profile from '../Pages/Profile'
import Article from '../Pages/Article'
const Routers = () => {
  return (
<Routes>
    <Route path='/home' element={<Home/>}  />
    <Route path='/' element={<Home/>}  />
    <Route path='/products' element={<Products/>}  />
    <Route path='/profile' element={<Profile/>}  />
    <Route path='/article' element={<Article/>}  />
</Routes>

    )
}

export default Routers