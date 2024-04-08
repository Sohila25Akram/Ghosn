import { NavLink } from "react-router-dom"
import './SideNav.css';

export function SideNav(){
    return(
        <div className="side-nav-container">
            <ul>
                <li>
                    <NavLink to='/dashboard/dashboard'>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard/customers'>Customers</NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard/transactions'>Transactions</NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard/productsDash'>Products</NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard/orders'>Orders</NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard/shipments'>Shipments</NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard/articles'>Articles</NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard/community'>Community</NavLink>
                </li>
            </ul>
        </div>
    )
}