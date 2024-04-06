import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/profile.css"

const Profile = () => {
    
  return (
    <div className="profile">
        <section>
            <div className="Suggested_people">
                <h2>أشخاص مقترحة</h2>
                <ul>
                    <li>
                    <Link>
                    <span>اسم المستخدم</span>
                    <img src="" alt="" />
                    </Link>
                    </li>
                    <li>
                    <Link>
                    <span>اسم المستخدم</span>
                    <img src="" alt="" />
                    </Link>
                    </li>
                    <li>
                    <Link>
                    <span>اسم المستخدم</span>
                    <img src="" alt="" />
                    </Link>
                    </li>
                </ul>
            </div>
            <div className="myinformation">
<div className="myinfo">
    <span>مكان الاقامة<i class="ri-map-pin-line"></i></span>
    <span>تاريخ الميلاد<i class="ri-calendar-line"></i></span>
    <span>العمل<i class="ri-briefcase-line"></i></span>
    <span>http://www.facebok.com/profile<i class="ri-global-line"></i></span>
    <div className="myfollowingandfollowers">
        <span>يتابع 23</span>
        <span>47 المتابعون</span>
    </div>
</div>
<div className="myimg">
    <img src="" alt="" />
    <span>اسم المستخدم</span>
</div>
            </div>
        </section>
        <section>

        </section>
    </div>
  )
}

export default Profile