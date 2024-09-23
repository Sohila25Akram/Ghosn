import React , {useEffect, useState} from 'react'
import "./Editprofile.css"
import axios from 'axios'
import CookiesServices from '../../Services/CookiesServices'
import { toast } from 'react-toastify'
const Editprofile = () => {
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

    const [username = dataProfile.userName , setusername]=useState()
    const [address=dataProfile.street , setaddress]=useState()
    const [day , setday]=useState()
    const [month , setmonth]=useState()
    const [year , setyear]=useState()
    const [phone=dataProfile.phoneNumber , setphone]=useState()
    const[image , setimage]=useState({})
    const data=[
        {
            "path": "/userName",
            "op": "replace",
            "value": `${username}`
        
        },
        {
            "path": "/street",
            "op": "replace",
            "value": `${address}`
        
        },
        {
            "path": "/dateOfBirth",
            "op": "replace",
            "value": `${year}-${month}-${day}`
        
        },
        {
            "path": "/phoneNumber",
            "op": "replace",
            "value": `${phone}`
        
        },
    ]
    
    const Editprofile=async(e)=>{
        e.preventDefault()
          
try{
    const response=await axios.patch("https://ghosn.runasp.net/api/Auth/v2/profile",data,{
        headers:{Authorization: `Bearer ${token}`
    ,'Content-Type': 'application/json'},
        
    })
    if(response.status===200){
         toast.success("تم حفظ التغييرات")
         setaddress("")
         setday("")
         setmonth("")
         setphone("")
         setusername("")
         setyear("")
         
    }

}catch(error){
     toast.error(...error.response.data)
}
    }



  return (
    <div>
        <form action="post" onSubmit={Editprofile}>
            <div className="username">
                <span>اسم المستخدم:</span>
                <input type="text"  onChange={e=>setusername(e.target.value)} value={username} placeholder='الاسم الحالي' />
            </div>
            <div className="address">
                <span>مكان الاقامة :</span>
                <input type="text"  onChange={e=>setaddress(e.target.value)} value={address} placeholder='المكان الحالي' />
            </div>
            <div className="birthofdata">
                <span>تاريخ الميلاد :</span>
                <div className="inputs-date">
                    <input type="text"  onChange={e=>setyear(e.target.value)} value={year} placeholder='السنة' />
                    <input type="text"  onChange={e=>setmonth(e.target.value)} value={month} placeholder='الشهر' />
                    <input type="text"  onChange={e=>setday(e.target.value)} value={day} placeholder='اليوم' />
                </div>
            </div>
            <div className="phone">
                <span>رقم الهاتف :</span>
                <input type="text"  onChange={e=>setphone(e.target.value)} value={phone} placeholder='رقم الهاتف الحالي' />
            </div>
            <input type="submit" value={"حفظ التغييرات"} />
        </form>
    </div>
  )
}

export default Editprofile