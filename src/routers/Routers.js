import { Routes, Route } from "react-router-dom"
import { Details } from '../pages/Details';
import { Cart } from '../pages/Cart';
import { DashboardLayout } from "../Layout/DashboardLayout";

export function Routers(){
    return(
        <Routes>
            <Route path="/" element={ <Details />} />
            <Route path="/cart" element={ <Cart />} />
            <Route path="/dashboard/*" element={ <DashboardLayout /> } />
        </Routes>
    )
}