import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Products from '../pages/Products'
import Profile from '../pages/Profile'
import Article from '../pages/Article'
import { Details } from '../pages/Details';
import { Cart } from '../pages/Cart';
import { DashboardLayout } from "../Layout/DashboardLayout";

export function Routers(){
    return(
        <Routes>
            <Route path='/home' element={<Home/>}  />
            <Route path='/' element={<Home/>}  />
            <Route path='/products' element={<Products/>}  />
            <Route path='/profile' element={<Profile/>}  />
            <Route path='/article' element={<Article/>}  />
            <Route path="/details" element={ <Details />} />
            <Route path="/cart" element={ <Cart />} />
            <Route path="/dashboard/*" element={ <DashboardLayout /> } />
        </Routes>
    )
}
