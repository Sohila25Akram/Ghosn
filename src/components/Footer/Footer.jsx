import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"
import khosn from "../../assets/images/غصن.png"
const Footer = () => {
  return (
<div className="footer">
    <div className="f-left">
        <div>
        <h6>دعنا نساعد</h6>
        <Link>سياسة الدفع</Link>
        <Link>سياسة الشحن</Link>
        <Link>سياسة الاسترجاع</Link>
        <Link>سياسة الخصوصية</Link>
        </div>
        <div>
        <h6>الشركة</h6>
        <Link>المجتمع</Link>
        <Link>الوظائف</Link>
        <Link>قصتنا</Link>
        <Link>التطبيق</Link>
        </div>
        <div>
        <h6>المعلومات</h6>
        <Link>رعاية النباتات</Link>
        <Link>معلومات عنا</Link>
        <Link>المنتجات</Link>
        <Link>الاكثر مبيعا</Link>
        </div>
    </div>
    <div className="f-right">
        <img src={khosn} alt="" />
        <p>نساعدك لتجد نباتاتك
المفضلة بأسهل طريقة</p>
        <div>
            <span><i class="ri-facebook-fill"></i></span>
            <span><i class="ri-instagram-fill"></i></span>
            <span><i class="ri-twitter-fill"></i></span>
        </div>
        <p>جميع الحقوق محفوظة وشروط الاستخدام غصن 2024 </p>
    </div>
</div>
  )
}

export default Footer