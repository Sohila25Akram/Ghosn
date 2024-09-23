import { NavLink } from "react-router-dom"
import './SideNav.css';

export function SideNav({isDashOpen}){
    return(
        <div className="side-nav-container" style={{transform:`translate(${isDashOpen? '0': '-250px'})`}}>
            <ul>
                <div>
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
                        <NavLink to='/dashboard/articlesDash'>Articles</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/community'>Community</NavLink>
                    </li>
                </div>
                
                <li>
                    <NavLink to='/'>Back To Home</NavLink>
                </li>
            </ul>
        </div>
    )
}