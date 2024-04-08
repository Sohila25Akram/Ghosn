import React , {useEffect} from 'react'
import bg from "../assets/images/85b45300d00f80813a86701804a1b6f5.png"
import "../styles/home.css"
import img_one from "../assets/images/6894f95b73dd52943a365198ba6bae84.jpeg" 
import img_two from "../assets/images/afc2cf7eaa4157cd0c2dc097b2beffd3.jpeg" 
import img_three from "../assets/images/86d4b833f735c4c72b3f84a9417bb272.jpeg" 
import categoryone from "../assets/images/categoryone.jpeg"
import categorytwo from "../assets/images/categorytwo.jpeg"
import categorythree from "../assets/images/categorythree.jpeg"
import Articleone from "../assets/images/articleone.png"
import Articletwo from "../assets/images/articletwo.png"
import Articlethree from "../assets/images/articlethree.png"
import appone from "../assets/images/appone.png"
import apptwo from "../assets/images/apptwo.png"
import appthree from "../assets/images/appthree.png"
import appfour from "../assets/images/appfour.png"
import play from "../assets/images/googleplay.png"
import axios from 'axios'
const Home = () => {
  useEffect(()=>{
    const getplants=async()=>{

      const response= await axios.get(`https://9838mzjl-7268.uks1.devtunnels.ms/api/Plant/GetPlants`)
      console.log(response)
    }
    getplants()
  })

  return (
<div className="home">
<div className="h-content">
  <div className="bg">
    <div className='bg-img'><img src={bg} alt="" /></div>
    <div className='bg-text'>
      <h2>قم بشراء نباتات
أحلامك بسهولة مع غصن</h2>
      <div style={{display:"flex",width:"max-content",marginTop:"-35px",color:"#fff"}}>
      <span style={{display:"flex",flexDirection:"column",alignItems:"center"}}><span style={{fontSize:"32px",direction:"ltr"}}>100  +</span><span style={{fontSize:"18px"}}>عميل</span></span>
      <hr style={{margin: "10px 15px 0 15px",
    color: "#fff",
    background: "#000",
    border: "1px solid #fff",
    height: "36px"}} />
        <span style={{display:"flex",flexDirection:"column",alignItems:"center"}}><span style={{fontSize:"32px",direction:"ltr"}}>50 +</span><span style={{fontSize:"18px"}}>سلالة نبات</span></span>
       
      </div>
      <div className="serch" style={{marginTop:"10px",display:"flex",alignItems:"center"}}>
        <span style={{fontSize: "1.4rem",
    background: "#ddd",
    padding: "7px 10px",
    borderRadius: "6px",
    marginLeft: "-48px",
    zIndex: "9999999999999"}}>      <i class="ri-search-line"></i>
</span>
        <input type="search" placeholder='ما الذي تبحث عنه؟' style={{    padding: "15px",
    width: "70%",
    borderRadius: "4px",
    border: "none",paddingRight:"59px"}} name="" id="" />
      </div>
    </div>
  </div>
  <div className="Most-plants-Selling">
    <div className="plants">
      <div className="cards">
        <div className="card">
          <img src={img_one} alt="" />
          <span>صبار طبيعي</span>
          <span><span>310</span><span>E.P</span></span>
        </div>
        <div className="card">
        <img src={img_two} alt="" />
          <span>نبات صناعي</span>
          <span><span>240</span><span>E.P</span></span>

        </div>
        <div className="card">
        <img src={img_three} alt="" />
          <span>عمة القاضي</span>
          <span><span>350</span><span>E.P</span></span>

        </div>
      </div>
    </div>
    <div className='content'>
      <h3>النبات الاكثر مبيعا</h3>
      <p>شراء نباتك المفضل هوأفضل طريقة لحياة صحية</p>
      <button>شاهد المزيد <i class="ri-arrow-left-line"></i></button>
    </div>
  </div>
  <div className="Categories">
    <h4 style={{margin:"0px",fontSize:"32px"}}>الفئات</h4>
    <p style={{color:"rgba(30, 30, 30, 0.5)",margin: "10px 0 45px 0px",padding: "0",fontSize:"18px"}}>كل ما تبحث عنه متوفر لدي غصن</p>
    <div className="all-cards">
      <div className="catigory-card">
        <img src={categoryone} alt="" />
        <span>نباتات منزلية</span>
      </div>
      <div className="catigory-card">
        <img src={categorytwo} alt="" />
        <span>نباتات زهرية</span>
        <p>مختلف النباتات الزهرية المنزلية
والمستخدمة للحدائق</p>
        <button style={{    background: "#fff",
    border: "none",
    width: "30%",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
}}>
        اكتشف

          <i class="ri-arrow-right-line"></i>
        </button>
      </div>
      <div className="catigory-card">
        <img src={categorythree} alt="" />
        <span>نباتات للحدائق</span>
      </div>
    </div>
  </div>
  <div className="PracticalArticles">
    
  <h4 style={{margin:"0px",fontSize:"32px"}}>مقالات عملية</h4>
    <p style={{color:"rgba(30, 30, 30, 0.5)",margin: "10px 0 45px 0px",padding: "0",fontSize:"18px"}}>أهم المقلات الخاصة بالنباتات للتغذية الفكرية لمحبي النباتات</p>
    <div className="articles">
     <div className="article">
      <div className="ar-left">
<h2>عنوان المقال</h2>
<p>جزء من المقال او تعريف عنه.مثال(تقوم بين التربة والنبات علاقة متبادلة. فالتربة الخصبة تشجع نمو النبات عن طريق تزويد النباتات بالعناصر المغذية والعمل كخزان يحتفظ بالماء)  </p>
<button>عرض المقال</button>
      </div>
      <div className="ar-right">
<img src={Articleone} alt="" />
      </div>
      </div>      
     <div className="article">
      <div className="ar-left">
<h2>عنوان المقال</h2>
<p>جزء من المقال او تعريف عنه.مثال(تقوم بين التربة والنبات علاقة متبادلة. فالتربة الخصبة تشجع نمو النبات عن طريق تزويد النباتات بالعناصر المغذية والعمل كخزان يحتفظ بالماء)  </p>
<button>عرض المقال</button>
      </div>
      <div className="ar-right">
<img src={Articletwo} alt="" />
      </div>
      </div>      
     <div className="article">
      <div className="ar-left">
<h2>عنوان المقال</h2>
<p>جزء من المقال او تعريف عنه.مثال(تقوم بين التربة والنبات علاقة متبادلة. فالتربة الخصبة تشجع نمو النبات عن طريق تزويد النباتات بالعناصر المغذية والعمل كخزان يحتفظ بالماء)  </p>
<button>عرض المقال</button>
      </div>
      <div className="ar-right">
<img src={Articlethree} alt="" />
      </div>
      </div>      
    </div>
    </div> 
    <div className="about">
      <h4 style={{margin:"0px",fontSize:"32px"}}>About us</h4>
      <p style={{color:"rgba(30, 30, 30, 0.5)",margin: "10px 0 45px 0px",padding: "0",fontSize:"18px"}}>اطلب الآن وانضم لمجتمع غصن ومحبي النباتات</p>
      <div className="about-us">
        <div>
          <span><i class="ri-plant-line"></i></span>
          <h6>تشكيلة متنوعة</h6>
          <p>في غصن نوفر لك أنواع مختلفة من النباتات
في فئات متعددة لتجد ما تفضل</p>
        </div>
        <div>
          <span><i class="ri-box-3-line"></i></span>
          <h6>شحن سريع</h6>
          <p>يتم شحن وتوصيل المنتج خلال 4 أيام إلي 
جميع انحاء جمهورية مصر العربية</p>
        </div>
        <div>
          <span><i class="ri-phone-line"></i></span>
          <h6>24/7 خدمة</h6>
          <p>يوفر غصن الخدمة طوال الاسبوع في 
كلا من الموقع والتطبيق</p>
        </div>
        <div>
          <span><i class="ri-article-line"></i></span>
          <h6>معلومات النبات</h6>
          <p>يوفر لك غصن جميع التفاصيل 
الخاصة بكل نبات في ملف
خاص به لضمان رعايته</p>
        </div>
      </div>
    </div>
    <div className="application">
      <h6 style={{margin:"0px",fontSize:"32px"}} >التطبيق</h6>
      <p style={{color:"rgba(30, 30, 30, 0.5)",margin: "10px 0 45px 0px",padding: "0",fontSize:"18px"}}>قم بتحميل التطبيق الآن للاستفادة من المميزات التالية</p>
      <div className="benefit_apllication">
        <div>
          <img src={appone} alt="" />
          <h6>الانضمام لمحبي النباتات</h6>
          <p>يوفر التطبيق مجتمعا للسماع 
لمحبي النباتات بالتواصل معا لمشاركة 
الآراء والتجارب المختلفة.</p>
        </div>
        <div>
          <img src={apptwo} alt="" />
          <h6>علاج أمراض النباتات</h6>
          <p>التعرف علي المرض المصاب به 
النبات واقتراح العلاج المناسب
لهذا المرض وطريقته.</p>
        </div>
        <div>
          <img src={appthree} alt="" />
          <h6>التعرف علي النبات</h6>
          <p>يمكنك من التعرف علي اي
نبات من خلال استخدام 
الماسح الضوئي أو صورة النبات.</p>
        </div>
        <div>
          <img src={appfour} alt="" />
          <h6>استكشاف النباتات</h6>
          <p>ستكون قادرا علي استكشاف 
أنواع أكثر مختلفة ومتميزة
من النباتات بسهولة.</p>
        </div>
        
      </div>
      <h6 style={{margin:"0px",fontSize:"32px",
    marginTop: "10px",
    marginBottom: "10px"}}>تحميل التطبيق الآن</h6>
      <button style={{
        fontSize: "25px",
        display: "flex",
        alignItems: "center",
        gap: "7px",
        border: "none",
        background: "rgba(83, 172, 95, 1)",
        padding: "5px 20px",
        borderRadius: "25px",
        color: "#fff"
      }}><img style={{width:"40px",height:"40px"}} src={play} alt="" />Google play</button>
    </div>
</div>

</div>

    )
}

export default Home