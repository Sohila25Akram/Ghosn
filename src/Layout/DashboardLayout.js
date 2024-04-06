import { Routes, Route } from "react-router-dom"
import { SideNav } from "../Components/SideNav/SideNav";
import { Customers } from "../pages/Customers";
import { Transactions } from "../pages/Transactions";
import { Products } from "../pages/Products";

export function DashboardLayout(){
    return(
        <div style={{display:"flex", flexDirection:"row-reverse"}}>
            <SideNav />
            <Routes>
                <Route path="/customers" element={ <Customers />} />
                <Route path="/transactions" element={ <Transactions />} />
                <Route path="/products" element={ <Products />} />
            </Routes>         
        </div>
    )
}