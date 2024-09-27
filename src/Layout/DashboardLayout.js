import { Routes, Route } from "react-router-dom"
import { SideNav } from "../Components/SideNav/SideNav";
import { Customers } from "../Pages/Customers";
import { Transactions } from "../Pages/Transactions";
import { ProductsDash } from "../Pages/ProductsDash";
import { Dashboard } from "../Pages/Dashboard";
import { AddProduct } from "../Pages/AddProduct";
import { ArticlesDash } from "../Pages/ArticlesDash";
import { AddArticle } from "../Pages/AddArticle";
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