import React , { useState} from 'react'
import { Link } from 'react-router-dom'
import Signup from '../Components/Signup/Signup'
import Login from '../Components/Login/Login'
import "../styles/Registrationprocess.css"
const RegistrationProcess = () => {
    const [RegistrationProcess,setRegistrationProcess]=useState("sign")

  return (
    <div className='container'>
    <div className="RegistrationProcess">
<div className="con">
    <ul>
        <li onClick={()=>setRegistrationProcess("sign")} style={{background:`${RegistrationProcess==="sign"?"#fff":"rgba(255, 255, 255, 0.2)"}`}} ><Link style={{color:`${RegistrationProcess==="sign"?"#000":"#fff"}`}}>إنشاء حساب</Link></li>
        <li onClick={()=>setRegistrationProcess("login")} style={{background:`${RegistrationProcess==="login"?"#fff":"rgba(255, 255, 255, 0.2)"}`}} ><Link style={{color:`${RegistrationProcess==="login"?"#000":"#fff"}`}}>تسجيل دخول</Link></li>
    </ul>
    <div className="form">
    {
        RegistrationProcess === "sign"?
        <Signup/>:<Login/>

    }
    </div>
</div>
    </div>
    </div>
  )
}

export default RegistrationProcess