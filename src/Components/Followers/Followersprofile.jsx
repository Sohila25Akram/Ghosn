import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CookiesServices from '../../Services/CookiesServices'
import './followersprofile.css'

const Followersprofile = () => { 
    const token=CookiesServices.get('jwt')
    const [followers , setfollowers]=useState([])
    useEffect(()=>{
        const followers=async()=>{
            try{
                const response= await axios.get("https://ghosn.runasp.net/api/Follow/followers",{
                    headers:{Authorization: `Bearer ${token}`},
                    
                })
        
            setfollowers(response.data)           
        }
            catch(error){}

        }
        followers()
    })
  return (
    <div >
        <div className="card-followers">
            <span><i class="ri-more-2-fill"></i></span>
            <img src="" alt="" />
            <span>كريم بدوي</span>
            <Link>عرض الملف الشخصي </Link>
        </div>
    </div>
  )
}

export default Followersprofile