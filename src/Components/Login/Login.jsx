import React , {useState} from 'react'
import "./login.css"
import axios from 'axios'
import { toast } from 'react-toastify'
import Cookiesservices from "../../Services/CookiesServices"
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate=useNavigate();
const [username , setusername]=useState("")
const [password , setpassword]=useState("")
  const formatdata = new FormData();
formatdata.append("userName",username)
formatdata.append("passWord", password);
  const login=async(e)=>{
    e.preventDefault()
  try{
    const response = await axios.post ('https://ghosn.runasp.net/api/Auth/login', formatdata,{
      
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
    if(response.status === 200){
     toast.success('تم تسجيل الدخول بنجاح')
     Cookiesservices.set('jwt', response.data.accessToken);
navigate("/")
    
    }
   
    else if(response.status !== 200){
       toast.error(response.data.errors)
    }
    

  }catch(error){
    console.log(error)
  }
  }
  return (
    <div>
      <form action="post" className='form-login' onSubmit={login}>
        <div className="account-name">
        <input type="text" placeholder='اسم الحساب أو البريد الالكتروني' onChange={e=>setusername(e.target.value)} value={username} className='input-name' />
        <i className="ri-mail-line"></i>
        </div>
        <div className="account-password">
        <input type="password" placeholder='كلمة المرور' onChange={e=>setpassword(e.target.value)} value={password} className='input-password' />
        <i className="ri-lock-password-line"></i>
        </div>
   
        <input type="submit" value={"دخول"} className='account-submit' />
      </form>
      <div className="other-sign"></div>
    </div>
  )
}

export default Login