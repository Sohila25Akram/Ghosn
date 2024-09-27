import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"
import Ghosn from "../../assets/images/غصن.png"
const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="cont-flex">
                <div className="footer-child">
                    <h3>دعنا نساعد</h3>
                    <ul>
                        <li>سياسة الدفع</li>
                        <li>سياسة الشحن</li>
                        <li>سياسة الاسترجاع</li>
                        <li>سياسة الخصوصية</li>
                    </ul>
                </div>
                <div className="footer-child">
                    <h3>الشركة</h3>
                    <ul>
                        <li>المجتمع</li>
                        <li>الوظائف</li>
                        <li>قصتنا</li>
                        <li>التطبيق</li>
                    </ul>
                </div>
                <div className="footer-child">
                    <h3>المعلومات</h3>
                    <ul>
                        <li>رعاية النبات</li>
                        <li>معلومات عنا</li>
                        <li>المنتجات</li>
                        <li>الاكثر مبيعا</li>
                    </ul>
                </div>
                <div className="footer-child">
                    <h3>تابعنا</h3>
                    <ul>
                        <li>تواصل معنا</li>
                        <li>
                            <a href="/"><i className="ri-facebook-fill"></i></a>
                            <a href="/"><i className="ri-twitter-fill"></i></a>
                            <a href="/"><i className="ri-instagram-line"></i></a>
                            <a href="/"><i className="ri-behance-fill"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="footer-child">
                    <h3>النشرة الاخبارية</h3>
                    <ul>
                        <li>تابع اخر التحديثات</li>
                        <li><form><input type="text" name="email" placeholder='ادخل البريد الالكتروني' /><button type='submit' className=""><i className="ri-arrow-right-line"></i></button></form></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <span>Copyright &copy;2018 All rights reserved</span>
            </div>
        </div>
    </footer>
</>
  )
}

export default Footer