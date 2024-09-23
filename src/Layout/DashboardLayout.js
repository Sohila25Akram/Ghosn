import { Routes, Route } from "react-router-dom"
import { SideNav } from "../Components/SideNav/SideNav";
import { Customers } from "../pages/Customers";
import { Transactions } from "../pages/Transactions";
import { ProductsDash } from "../pages/ProductsDash";
import { Dashboard } from "../pages/Dashboard";
import { AddProduct } from "../pages/AddProduct";
import { ArticlesDash } from "../pages/ArticlesDash";
import { AddArticle } from "../pages/AddArticle";
import './dashboardLayout.css'
import { useState } from "react";

export function DashboardLayout(){
    const [isDashOpen, setIsDashOpen] = useState(false);
    
    const handleOpenDash = () => {
        setIsDashOpen(!isDashOpen)
    }

    return(
        <div  className="dashboard-layout">
            <span className="menu" onClick={handleOpenDash}>
                <i className="ri-menu-fill"></i>
            </span>
           <SideNav isDashOpen={isDashOpen} />
            <Routes>
                <Route path="/dashboard" element={ <Dashboard />} />
                <Route path="/customers" element={ <Customers />} />
                <Route path="/transactions" element={ <Transactions />} />
                <Route path="/productsDash" element={ <ProductsDash />} />
                <Route path="/productsDash/addProduct" element={ <AddProduct /> } />
                <Route path="/articlesDash" element={ <ArticlesDash />} />
                <Route path="/articlesDash/addArticle" element={ <AddArticle />} />
            </Routes>         
        </div>
    )
}