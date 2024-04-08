import React , {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import iconapp from "../../assets/images/Group 14.png"
import "./header.css"
const Header = () => {
const [active , setactive]=useState("home");
const products=(window.location.href.includes("/products"))
const home=(window.location.href.includes("/home"))
const profile=(window.location.href.includes("profile"))

useEffect(()=>{
  if(products){setactive("products")}
  else if (home){setactive("home")}
else if (profile){setactive("user")}

},[products,home,profile])
  return (
    <div className="header">
        <div className="h-left">
            <img src={iconapp} alt="" />
        </div>
        <div className="h-center">
            <Link to={"/"} style={{color:`${active==="home"?"#000":""}`}} onClick={()=>setactive("home")}>Home</Link>
            <Link to={"/products"} style={{color:`${active==="products"?"#000":""}`}} onClick={()=>setactive("products")}>Products</Link>
            <Link style={{color:`${active==="about"?"#000":""}`}} onClick={()=>setactive("about")}>About Us</Link>
            <Link style={{color:`${active==="app"?"#000":""}`}} onClick={()=>setactive("app")} >Application</Link>
            <Link style={{color:`${active==="art"?"#000":""}`}} onClick={()=>setactive("art")}>Articles</Link>
        </div>
        <div className="h-right" style={{display:"flex",alignItems:"center",gap:"10px"}}>
            <Link style={{fontSize:"18px"}}>log in</Link>
            <Link>
            <i style={{fontSize:"1.4rem"}} class="ri-team-line"></i>

            </Link>
            <Link><i style={{fontSize:"1.4rem"}}  class="ri-shopping-cart-line"></i></Link>
            <Link to={"/profile"} style={{color:`${active==="user"?"#000":""}`}} onClick={()=>setactive("user")} >
              
{
  active==="user"?<i style={{fontSize:"1.4rem"}} class="ri-user-fill"></i>:<i style={{fontSize:"1.4rem"}}   class="ri-user-line"></i>

}              
              </Link>
            <Link style={{    display: "flex",
    flexDirection: "column-reverse",
    gap: "5px",
    transform: "rotateY(130deg)"}}>
            <div style={{    width: "15px",
    height: "1px",
    background: "#000"}}></div>
            <div style={{    width: "25px",
    height: "1px",
    background: "#000"}}></div>
            <div style={{    width: "35px",
    height: "1px",
    background: "#000"}}></div>
            </Link>
        </div>
    </div>
  )
}

export default Header