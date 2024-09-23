import React , {useEffect, useState} from 'react'
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
// import axios from 'axios'
import { ProductCard } from '../Components/ProductCard/ProductCard'
import { Link } from 'react-router-dom'
import { ArticleSnapShot } from '../Components/ArticleSnapShot/ArticleSnapShot'
import { useSelector } from 'react-redux'
import { getProductList , getProductsWithLimit, getRecommendedArticles} from '../queries/query'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useQuery } from 'react-query'
import { setError, setProducts, setLoading } from '../features/products/productsSlice'
import { SearchPanel } from '../Components/Search/Search'
import { fetchProductList } from '../actions/productsAction'


const defaultData = [
  
  {
      id: "1",
      name: 'name',
      description: 'description',
      defaultPrice: 100.6,
  },
  
  {
      id: "2",
      name: 'name2',
      description: 'description2',
      defaultPrice: 200.57,
  },
  {
      id: "3",
      name: 'name3',
      description: 'description2',
      defaultPrice: 200.90,
  },
  {
      id: "4",
      name: 'name4',
      description: 'description2',
      defaultPrice: 200.89,
  },
  {
      id: "5",
      name: 'name5',
      description: 'description2',
      defaultPrice: 200.90,
  },
]

// const api = 'https://9838mzjl-7268.uks1.devtunnels.ms/graphql';
// const api = 'https://4gf4bwsm-7268.uks1.devtunnels.ms'
// const api = 'https://q534k15r-7268.uks1.devtunnels.ms/graphql'
const api = 'https://ghosn.runasp.net/graphql'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14'

const Home = () => {
  const [showSearchPanel , setShowSearchPanel] = useState(false)

  const fetchAriclesList = async() => {
    try{
      const response = await axios.post(api, {
        query: getRecommendedArticles
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const articlesList = response.data.data.recommendedArticles;
      return articlesList
    }catch(error){
      console.error("failed to fech Articles", error)
    }
  }

  const { data: products, isLoading: productsLoading, error: productsError } = useQuery("getProducts", fetchProductList);
  const { data: articles, isLoading: articlesLoading, error: articlesError } = useQuery("getArticles", fetchAriclesList);

  if (productsLoading || articlesLoading) {
      return <div>Loading...</div>;
  }

  if (productsError) {
      return <div>Error loading products: {productsError.message}</div>;
  }

  if (articlesError) {
      return <div>Error loading articles: {articlesError.message}</div>;
  }
  
  const handelSearchPanleClick = () => {
    setShowSearchPanel(true)
  }
  return (
    <div className="home">
      <div className='container'>
        <div className="bg">
            <h1>قم بشراء نباتات أحلامك بسهولة مع غصن</h1>
            <div className='floaten'>
            <div className='bg-img'><img src={bg} alt="" /></div>
            <div className='bg-text'>
              <span style={{display:"flex",flexDirection:"column",alignItems:"center"}}><span style={{fontSize:"32px",direction:"ltr"}}>100  +</span><span style={{fontSize:"18px"}}>عميل</span></span>
              <hr style={{
                margin: "10px 15px 0 15px",
                color: "#fff",
                background: "#000",
                border: "1px solid #fff",
                height: "36px"}} 
              />
              <span style={{display:"flex",flexDirection:"column",alignItems:"center"}}><span style={{fontSize:"32px",direction:"ltr"}}>50 +</span><span style={{fontSize:"18px"}}>سلالة نبات</span></span>
            </div>
            </div>
            <div className="search-container" onClick={handelSearchPanleClick}>
              <span className='search-icon'><i className="ri-search-line"></i></span>
              <input type="search" placeholder='ما الذي تبحث عنه؟' name="" id="" />
            </div>
            {showSearchPanel && <SearchPanel setShowSearchPanel={setShowSearchPanel} />}
        </div>
      </div>
      <div className="Most-plants-Selling">
        <div className='container'>
          <div className="cards">
            {/* <div className="card">
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
            </div> */}
            {products.map(product => (
              <ProductCard product={product} key={product.id} /> 
            ))}
            {/* <ProductCard /> */}
            {/* <ProductCard /> */}
            {/* <ProductCard /> */}
            <div className='content'>
              <h3>النبات الاكثر مبيعا</h3>
              <p>شراء نباتك المفضل هوأفضل طريقة لحياة صحية</p>
              <button className='main-button green-button'>شاهد المزيد <i className="ri-arrow-left-line"></i></button>
            </div>
          </div>
          </div>
      </div>
      <div className="Categories">
        <div className='container'>
          <div className='sec-label'>
            <h2>الفئات</h2>
            <p>كل ما تبحث عنه متوفر لدي غصن</p>
          </div>
          <div className="all-cards">
            <div className="catigory-card">
              <img src={categoryone} alt="" />
              <span>نباتات منزلية</span>
            </div>
            <div className='catigory-card-2'>
              <div className="catigory-card">
                <img src={categorytwo} alt="" />
                <span>نباتات زهرية</span>
              </div>
              <p>مختلف النباتات الزهرية المنزلية والمستخدمة للحدائق</p>
                <Link to='/products' className='main-button'>
                  <i className="ri-arrow-right-line"></i>اكتشف
                </Link>
            </div>
            <div className="catigory-card">
              <img src={categorythree} alt="" />
              <span>نباتات للحدائق</span>
            </div>
          </div>
        </div>
      </div>
      <div className="PracticalArticles">
        <div className='container'>
          <div className='sec-label'>
            <h2>مقالات عملية</h2>
            <p>أهم المقلات الخاصة بالنباتات للتغذية الفكرية لمحبي النباتات</p>
          </div>
          <div className="articles">
            {/* <div className="article">
              <div className="ar-left">
                <h2>عنوان المقال</h2>
                <p>جزء من المقال او تعريف عنه.مثال(تقوم بين التربة والنبات علاقة متبادلة. فالتربة الخصبة تشجع نمو النبات عن طريق تزويد النباتات بالعناصر المغذية والعمل كخزان يحتفظ بالماء)  </p>
                <button>عرض المقال</button>
              </div>
              <div className="ar-img">
                <img src={Articleone} alt="" />
              </div>
            </div>      
            <div className="article">
              <div className="ar-left">
                <h2>عنوان المقال</h2>
                <p>جزء من المقال او تعريف عنه.مثال(تقوم بين التربة والنبات علاقة متبادلة. فالتربة الخصبة تشجع نمو النبات عن طريق تزويد النباتات بالعناصر المغذية والعمل كخزان يحتفظ بالماء)  </p>
                <button>عرض المقال</button>
              </div>
              <div className="ar-img">
                <img src={Articletwo} alt="" />
              </div>
            </div>      
            <div className="article">
              <div className="ar-left">
                <h2>عنوان المقال</h2>
                <p>جزء من المقال او تعريف عنه.مثال(تقوم بين التربة والنبات علاقة متبادلة. فالتربة الخصبة تشجع نمو النبات عن طريق تزويد النباتات بالعناصر المغذية والعمل كخزان يحتفظ بالماء)  </p>
                <button>عرض المقال</button>
              </div>
              <div className="ar-img">
                <img src={Articlethree} alt="" />
              </div>
            </div>       */}
            {articles && articles.length > 0 ? articles.map(article => (
              <ArticleSnapShot article={article} key={article.id} />
            )) : (
              <p>No articles available</p>
            )}
            {/* <ArticleSnapShot /> */}
            {/* <ArticleSnapShot /> */}
            {/* <ArticleSnapShot /> */}
          </div>
        </div>
      </div> 
      <div className="about">
        <div className='container'>
          <div className='sec-label'>
            <h2>معلومات عنا</h2>
            <p>اطلب الآن وانضم لمجتمع غصن ومحبي النباتات</p>
          </div>
          <div className="about-us">
            <div>
              <span><i className="ri-plant-line"></i></span>
              <h6>تشكيلة متنوعة</h6>
              <p>في غصن نوفر لك أنواع مختلفة من النباتات في فئات متعددة لتجد ما تفضل</p>
            </div>
            <div>
              <span><i className="ri-box-3-line"></i></span>
              <h6>شحن سريع</h6>
              <p>يتم شحن وتوصيل المنتج خلال 4 أيام إلي جميع انحاء جمهورية مصر العربية</p>
            </div>
            <div>
              <span><i className="ri-phone-line"></i></span>
              <h6>24/7 خدمة</h6>
              <p>يوفر غصن الخدمة طوال الاسبوع في كلا من الموقع والتطبيق</p>
            </div>
            <div>
              <span><i className="ri-article-line"></i></span>
              <h6>معلومات النبات</h6>
              <p>يوفر لك غصن جميع التفاصيل الخاصة بكل نبات في ملف خاص به لضمان رعايته</p>
            </div>
          </div>
        </div>
      </div>
      <div className="application">
        <div className='container'>
          <div className='sec-label'>
            <h2>التطبيق</h2>
            <p>قم بتحميل التطبيق الآن للاستفادة من المميزات التالية</p>
          </div>
          <div className="benefit_apllication">
            <div>
              <img src={appone} alt="" />
              <h6>الانضمام لمحبي النباتات</h6>
              <p>يوفر التطبيق مجتمعا للسماع لمحبي النباتات بالتواصل معا لمشاركة الآراء والتجارب المختلفة.</p>
            </div>
            <div>
              <img src={apptwo} alt="" />
              <h6>علاج أمراض النباتات</h6>
              <p>التعرف علي المرض المصاب به النبات واقتراح العلاج المناسب لهذا المرض وطريقته.</p>
            </div>
            <div>
              <img src={appthree} alt="" />
              <h6>التعرف علي النبات</h6>
              <p>يمكنك من التعرف علي اي نبات من خلال استخدام الماسح الضوئي أو صورة النبات.</p>
            </div>
            <div>
              <img src={appfour} alt="" />
              <h6>استكشاف النباتات</h6>
              <p>ستكون قادرا علي استكشاف أنواع أكثر مختلفة ومتميزة من النباتات بسهولة.</p>
            </div>
          </div>
          <div className='download-cont'>
            <h6>
              تحميل التطبيق الآن
            </h6>
            <button className='main-button green-button'><img style={{width:"40px",height:"40px"}} src={play} alt="" />Google play</button>
          </div>
        </div>
      </div>
    </div>

  )
}

// export function ArticleSnapShot(){
//   return(
//     <div className="article">
      
//       <div className='ar-cont'>
//         <div className="ar-img">
//           <img src={Articleone} alt="" />
//         </div>
//         <div>
//           <h2>عنوان المقال</h2>
//           <p>جزء من المقال او تعريف عنه. مثال (تقوم بين التربة والنبات علاقة متبادلة. فالتربة الخصبة تشجع نمو النبات عن طريق تزويد النباتات بالعناصر المغذية والعمل كخزان يحتفظ بالماء)  </p>
//           <button className='main-button'>عرض المقال</button>
//         </div>
//         <div className='clear-cont'></div>
//       </div>
//     </div>      
//   )
// }

export default Home