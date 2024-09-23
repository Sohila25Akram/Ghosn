import React , {useEffect, useState} from 'react'
import "./signup.css"
import axios from 'axios'
import { toast } from 'react-toastify'

const Signup = ()=> {
    const [firstname , setfirstname]=useState("")
    const [lastname , setlastname]=useState("")
    const [username , setusername]=useState("")
    const [password , setpassword]=useState("")
    const [gender , setgender]=useState()
    const [phone , setphone]=useState("")
    const [email , setemail]=useState("")
   
    
     const formatdata = new FormData();
     formatdata.append("firstName",firstname)
     formatdata.append("lastName",lastname)
     formatdata.append("maleGender",gender)
     formatdata.append("email",email)
     formatdata.append("password",password)
     formatdata.append("userName",username)
     formatdata.append("phoneNumber",phone)
    const SignUp=async(e)=>{
        e.preventDefault()
      try{


  
        const response = await axios.post ('https://ghosn.runasp.net/api/Auth/register', formatdata,{
          
          headers: {
            'Content-Type': 'application/json',
          },
          });
          
       
        if(response.status === 201){
         toast.success('تم إنشاء الحساب بنجاح')
        
       
        }
        else{
           toast.error(response.data.errors)
        }
        
        
  
      }catch(error){
        console.log(error)
      }
      }
  return (
    <div>
      <form action="post" className='form-sign' onSubmit={SignUp}>
        <div className="account-firstname">
          <input type="text" placeholder='الاسم الاول ' onChange={e=>setfirstname(e.target.value)} value={firstname} className='input-name' />
          <i className="ri-user-fill"></i>   
        </div>
        <div className="account-lastname">
          <input type="text" placeholder='الاسم الاخير' onChange={e=>setlastname(e.target.value)} value={lastname} className='input-name' />
          <i className="ri-user-fill"></i>   
        </div>
          <div className="account-name">
          <input type="text" placeholder='الاسم كامل' onChange={e=>setusername(e.target.value)} value={username} className='input-name' />
        <i className="ri-user-fill"></i>  
          </div>
        <div className="email">
          <input type="text" placeholder='الايميل' onChange={e=>setemail(e.target.value)} value={email} className='input-name' />
          <i className="ri-mail-line"></i>    
        </div>
        <div className="account-password">
          <input type="password" placeholder='كلمة المرور' autoComplete='' onChange={e=>setpassword(e.target.value)} value={password} className='input-password' />
          <i className="ri-lock-password-line"></i>
        </div>
        <div className="account-phone">
          <input type="text" placeholder='رقم الهاتف' onChange={e=>setphone(e.target.value)} value={phone} className='input-phone' />
          <i className="ri-phone-line"></i>
        </div>
        <div className="gender">
          <div className="male">
              <label htmlFor="">ذكر</label>
              <input type="radio" onClick={e=>setgender(true)} value={gender}  name='gender'/>
          </div>
          <div className="female" >
          <label htmlFor="" >أنثي</label>
              <input type="radio" onClick={e=>setgender(false)} value={gender} name='gender' />
          </div>
        </div>
        <div className="account-accept">
          <label htmlFor="accept">الموافقة علي سياسة التطبيق</label>
        <input type="checkbox" name='accept' className='input-accept' />
        
        </div>
        <input type="submit" value={"دخول"} className='account-submit' />
      </form>
      <div className="other-sign"></div>
    </div>
  )
}

export default Signup