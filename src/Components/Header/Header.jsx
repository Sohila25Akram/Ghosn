import React , {useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import iconapp from "../../assets/images/Group 14.png"
import "./header.css"
import noti from "../../assets/icons/Group 1000003303.svg"
import plus from "../../assets/icons/Group 1000003304.svg"
import  Home  from "../../assets/icons/Group 1000003305.svg"
import group from "../../assets/icons/Group 1000003311.svg"
import Class from "../../assets/icons/Group 1000003307.svg"
import Check from "../../assets/icons/Group 1000003308.svg"
import Articles from "../../assets/icons/Group 1000003309.svg"
import Files from "../../assets/icons/Group 1000003312.svg"
import Profile from "../../assets/icons/Group.svg"
import Cart from "../../assets/icons/Group 1000003313.svg"
import loginImage from '../../assets/login-1.png'
import axios from 'axios'
import CookiesServices from '../../Services/CookiesServices'
import defultimage from "../../assets/images/avatar.jpg"

const Header = () => {

const [isLogged, setIsLogged] = useState(false);
const token=CookiesServices.get('jwt')
    const [dataProfile , setdataProfile]=useState({})
    useEffect(()=>{
        const profile=async()=>{
            try{
                const response= await axios.get("https://ghosn.runasp.net/api/Auth/v2/profile",{
                    headers:{Authorization: `Bearer ${token}`},
                    
                })
            
                setdataProfile(response.data)
              
                       }
            catch(error){}

        }
        profile()
    })
const [active , setactive]=useState("home");
const products=(window.location.href.includes("/products"))
const home=(window.location.href.includes("/home"))
const profile=(window.location.href.includes("/profile"))

useEffect(()=>{
  if(products){setactive("المنتجات")}
  else if (home){setactive("home")}
else if (profile){setactive("user")}

},[products,home,profile])
const [menu , setmenu]=useState(false);
const addmenu=()=>{
  setmenu(!menu)
}
  return (
   <div className='header-container'>
    <div className="header-mobile container" style={{display:"none"}}>
        <div className="hm-right">
            <div style={{display:`${menu?"block":"none"}`}}>
              <ul className='menu-mob'>
                <div className='side-bar'></div>
                {
                  token?
                  <li className='log-nav-mob'>
                    <div className='log-profile-nav'>
                      <img src={dataProfile.imageUrl?`https://ghosn.runasp.net/${dataProfile.imageUrl}`:defultimage}  alt='' />
                    </div>
                    <div>
                      <span>{dataProfile.userName?dataProfile.userName:""}</span>
                      <span>{dataProfile.email?dataProfile.email:""}</span>
                    </div>
                  </li> : ''
                }
               
                <li>
                  <NavLink to='/'>
                    <div className='si-nav-links'>
                      <span>الرئيسية</span>
                      <hr />
                    </div>
                    <div className='icons-mob'>
                      <img src={Home} alt="" />
                    </div>
                  </NavLink>
                </li>
                
                <li>
                  <NavLink to='/community'>
                    <div className='si-nav-links'>
                      <span>مجتمع</span>
                      <hr />
                    </div>
                    <div className='icons-mob'>
                      <img src={group} alt="" />
                    </div>
                  </NavLink>
                </li>
    
                <li>
                  <NavLink to='/products'>
                    <div className='si-nav-links'>
                      <span>المنتجات</span>
                      <hr />
                    </div>
                    <div className='icons-mob'>
                      <img src={Class} alt="" />
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/articles'>
                    <div className='si-nav-links'>
                      <span>المقالات</span>
                      <hr />
                    </div>
                    <div className='icons-mob'>
                      <img src={Articles} alt="" />
                    </div>
                  </NavLink>
                </li>                
                {isLogged? 
                  <li>
                    <NavLink to='/profile'>
                      <div className='si-nav-links'>
                        <span>الملف الشخصي</span>
                        <hr />
                      </div>
                      <div className='icons-mob'>
                        <img src={Profile} alt="" />
                      </div>
                    </NavLink>
                  </li> : ''
                }
                
                <li>
                  <NavLink to='/dashboard/dashboard'>
                    <div className='si-nav-links'>
                      <span>لوحة التحكم</span>
                      <hr />
                    </div>
                    <div className='icons-mob'>
                      <img src={plus} alt="" />
                    </div>
                  </NavLink>
                </li>
               
                <li>
                  <NavLink to='/cart'>
                    <div className='si-nav-links'>
                      <span>سلة المشتريات</span>
                      <hr />
                    </div>
                    <div className='icons-mob'>
                      <img src={Cart} alt="" />
                    </div>
                  </NavLink>
                </li>
                {
                  !token?  
                  <li 
                    className='log-mob-btn main-botton green-button'
                    onClick={()=> setIsLogged(true)}
                  >
                    <Link to='/login'>
                    تسجيل الدخول <i className="ri-arrow-left-s-line"></i>
                    </Link>

                  </li>: ''
                }
              </ul>
            </div>
              
            <Link onClick={addmenu} style={{    display: "flex",
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
        <div className="hm-left">
            <img src={iconapp} alt="" />
        </div>
    </div>
    <div className="header container">
        
        <div className="h-right" style={{display:"flex",alignItems:"center",gap:"10px"}}>
            <Link to={"/dashboard/dashboard"} className='icons-mob'>
              <img src={plus} alt="" />
            </Link>
            <Link to={"/cart"} className='icons-mob'>
              <img src={Cart} alt="" />
              </Link>
              {
                (token)?
                <Link to='/profile' className='log-nav'>
                  <div style={{textAlign:"end"}}> <span>{dataProfile.userName?dataProfile.userName:""}</span> <br /> 
                  <span style={{fontSize:"12px"}}>{dataProfile.email?dataProfile.email:""}</span>
                 </div>
                  <div className='log-profile-nav'>
                    <img src={dataProfile.imageUrl?`https://ghosn.runasp.net/${dataProfile.imageUrl}`:defultimage} alt='' />
                  </div>
                  <i className="ri-arrow-down-s-line"></i>
                </Link>
                
                :
                <Link to='/registeration' style={{fontSize:"18px",background:"rgba(83, 172, 95, 1)",padding:"10px",borderRadius:"10px",color:"#fff"}} className='log-btn' onClick={() => setIsLogged(true)}>تسجيل الدخول</Link>
              }

            <Link to={"/profile"} style={{color:`${active==="user"?"#000":""}`}} onClick={()=>setactive("user")} ></Link>
        </div>
        <div className="h-center">
            <Link to={"/"} style={{color:`${active==="home"?"rgba(83, 172, 95, 1)":""}`,borderBottom: `${active==="home"?'4px solid rgba(83, 172, 95, 0.2)':''}`}} onClick={()=>setactive("home")}>الرئيسية</Link>
            <Link 
              to={"/community"} 
              style={{color:`${active==="مجتمع"?"rgba(83, 172, 95, 1)":""}`,borderBottom: `${active==="مجتمع"?'4px solid rgba(83, 172, 95, 0.2)':''}`}}
              onClick={()=>setactive("مجتمع")}>مجتمع</Link>
            <Link to={"/products"} style={{color:`${active==="المنتجات"?"rgba(83, 172, 95, 1)":""}`,borderBottom: `${active==="المنتجات"?'4px solid rgba(83, 172, 95, 0.2)':''}`}} onClick={()=>setactive("المنتجات")}> المنتجات</Link>
            <Link to={"/articles"} style={{color:`${active==="مقالات"?"rgba(83, 172, 95, 1)":""}`,borderBottom: `${active==="مقالات"?'4px solid rgba(83, 172, 95, 0.2)':''}`}} onClick={()=>setactive("مقالات")}>مقالات</Link>
        </div>
        <div className="h-left">
            <img src={iconapp} alt="" />
        </div>
    </div>
   </div>
  )
}

export default Header