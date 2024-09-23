import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/profile.css"
import CookiesServices from '../Services/CookiesServices'
import Followingsprofile from '../Components/Followings/Followingsprofile'
import Followersprofile from '../Components/Followers/Followersprofile'
import Editprofile from '../Components/Editprofile/Editprofile'
import { PurchaseHistory } from '../Components/PurchaseHistory/PurchaseHistory'
import { PeopleSnapshot } from '../Components/Post/Post'
import axios from 'axios'
import { SuggestedPeople } from '../Components/SuggestedPeople/SuggestedPeople'
import login from '../assets/login-1.png'
import { MyPosts } from '../Components/MyPosts/MyPosts'

const api = 'https://ghosn.runasp.net'
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14"

const Profile = () => {
    const token=CookiesServices.get('jwt')
    const [dataProfile , setdataProfile]=useState({})
    // const [suggestedusers , setsuggestedusers]=useState([])
    const [active , setactive]=useState("المشتريات")

    useEffect(()=>{
        const profile=async()=>{
            try{
                const response= await axios.get("https://ghosn.runasp.net/api/Auth/profile",{
                    headers:{Authorization: `Bearer ${token}`},
                    
                })
            setdataProfile(response.data)
                       }
            catch(error){}

        }
        // const suggesteduser=async()=>{
        //     try{
        //         const response= await axios.get("https://ghosn.runasp.net/api/Follow/Suggested Users",{
        //             headers:{Authorization: `Bearer ${token}`},
                    
        //         })
        //     setsuggestedusers(response.data)
        //     }catch(error){}

          

        // }
        profile()
        // suggesteduser()

    },[token])

  return (
    <div className="profile container">
        <section>
            {/* <div className="suggested-people">
                <h2>أشخاص مقترحة</h2>
                <ul>
                    <li>
                        <PeopleSnapshot />
                    </li>
                    <li>
                        <PeopleSnapshot />
                    </li>
                    <li>
                        <PeopleSnapshot />
                    </li>
                </ul>
            </div> */}
            <SuggestedPeople />
            <div className="myinformation">
                <div className="myinfo">
                    <span>{dataProfile.cityName?dataProfile.cityName:"مكان الاقامة"}<i class="ri-map-pin-line"></i></span>
                    <span>{dataProfile.dateOfBirth}<i class="ri-calendar-line"></i></span>
                    {/* <span>العمل<i class="ri-briefcase-line"></i></span> */}
                    <span>{dataProfile.email}<i class="ri-global-line"></i></span>
                    <div className="myfollowingandfollowers">
                        <span>{dataProfile.totalFollowings} يتابع </span>
                        <span>{dataProfile.totalFollowers} المتابعون</span>
                    </div>
                </div>
                <div className="myimg">
                    {dataProfile.ReleventImgUrl ? <img src={`${api}/${dataProfile.ReleventImgUrl}`} alt="" />: <img src={login} />}
                    
                    <span>{dataProfile.userName}</span>
                </div>
            </div>
        </section>
        <section>

        <ul className='profile-tap'>
            <li onClick={()=>setactive("المشتريات")} className={`${active==="المشتريات"?"active":""}`} >المشتريات</li>
            <li onClick={()=>setactive("المنشورات")} className={`${active==="المنشورات"?"active":""}`} >المنشورات</li>
            <li onClick={()=>setactive("المتابعون")} className={`${active==="المتابعون"?"active":""}`}>المتابعون</li>
            <li onClick={()=>setactive("يتابع")} className={`${active==="يتابع"?"active":""}`}>يتابع</li>
            <li onClick={()=>setactive("تعديل")} className={`${active==="تعديل"?"active":""}`}>تعديل الملف الشخصي</li>
        </ul>
            <div className='content-of-tap'>
                {/* <PurchaseHistory /> */}
                {active==="المشتريات"?<PurchaseHistory /> : active==="المنشورات"? <MyPosts /> : active==="المتابعون"?<Followersprofile/>:active==="يتابع"?<Followingsprofile/>:active==="تعديل"?<Editprofile/>:<></>}
            </div>
        </section>
    </div>
  )
}

// export const PeopleSnapshot = () =>{
//     return(
//         <>
//             <Link>
//                 <span>اسم المستخدم</span>
//                 <img src="" alt="" />
//             </Link>
//         </>
//     )
// }

export default Profile