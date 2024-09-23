import React, { useEffect, useState } from 'react'
import frame from "../assets/images/Frame 73.png"
import img13 from "../assets/images/image 13.png"
import img14 from "../assets/images/image 14.png"
import img12 from "../assets/images/image 12.png"
import "../styles/article.css"
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'


const api = 'https://ghosn.runasp.net'
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmZjhlNDI0Yy1iODA4LTRjZTAtOTljNS1kMTBmNTI4YWZlMWYiLCJzdWIiOiJhaG1lZHNhbGFoMjQiLCJlbWFpbCI6ImFobWVkLnNhbGFoQGdvb2dsZS5jb20iLCJuYW1lIjoiQWhtZWQgU2FsYWgiLCJ1aWQiOiIxIiwicm9sZSI6WyJXcml0ZXIiLCJFZGl0b3IiLCJBZG1pbiJdLCJuYmYiOjE3MTY1ODU5MzUsImV4cCI6MTcxNjU4NjExNSwiaWF0IjoxNzE2NTg1OTM1LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.OyX1fzO-8eqE8hSFmRqExJ3FlLHbxlpyUT-rTKNMZ9g"


const Article = () => {
    const { slugAndId } = useParams()
    // const [article, setArticle] = useState(0)
    const articleId = slugAndId.split('-').pop();
    const publishedArticles = useSelector(state => state.articles.publishedArticles)
    const allArticles = useSelector(state => state.articles.allArticles)
    const [isFixed, setIsFixed] = useState(false);

    // const article = articles.find(article => article.id === parseInt(articleId))
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 70) {
    //             setIsFixed(true);
    //         } else {
    //             setIsFixed(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    
    if (!publishedArticles || !allArticles) {
        return (
            <section>
            <h2>Article not found!</h2>
            </section>
        )
    }

    const article = allArticles.find(article => article.id === parseInt(articleId)) || publishedArticles.find(article => article.id === parseInt(articleId));


    if (!article) {
        return (
            <section>
                <h2>Article not found!</h2>
            </section>
        );
    }

    // const handleGetArticleId = async () => {
    //     console.log("Fetching product with ID:", productId); 
    //     try{
    //         const response = await axios.post(api2,{
    //             query: getProductById,
    //             variables: {productId : parseInt(productId)}
    //         })
    //         // if (response.data.data && response.data.data.plantById) {
    //         //     dispatch(setProducts(response.data.data.plantById[0])); // Return the first element if found
    //         // }
    //         console.log("Full GraphQL response:", response); // Full response debug log
    //         if (response.data.errors) {
    //             console.error("GraphQL errors:", response.data.errors);
    //         } else {
    //             console.log("GraphQL data:", response.data.data);
    //             const dataReturned = response.data.data.plantById;
    //             if (dataReturned && dataReturned.length > 0) {
    //                 setProductById(dataReturned[0]); // Access the first element in the array
    //             } else {
    //                 console.error("No product found:", response.data);
    //             }
    //         }
    //     }catch (error){
    //         console.error("Error fetching product:", error);
    //         throw error; // Re-throw the error to propagate it further
    //     }
    // }
    // useEffect(() => {
    //     handleGetArticleId();
    // }, [articleId])
   
    const onMakeArticlePublishClick = async () => {
        try{
            const response = await axios.post(`${api}/api/Article/Publish/${articleId}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log('the article published successfully')
        }catch (error){
            console.error('error to publish the article', error)
        }
    }

    const onDeleteArticleClick = async () => {
        try{
            const response = await axios.delete(`${api}/api/Article/${article.slug}/delete`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log('the article deleted successfully');
        }catch(error){
            console.error('error to deleet the article'. error)
        }
       
    }
    

    //add scroll for publish or refuse container
    // const publishRefuse = document.getElementsByClassName('publish-or-refuse-container')
    // window.onscroll = {
    //     if(document.body.scrollTop > 60){
    //         publishRefuse.style.position = 'fixed';
    //     }
    // }

   
  return (
    <div className='article-container-dir'>
    {!article.published && 
        <div className={`publish-or-refuse-container ${isFixed ? 'fixed-container' : ''}`}>
            <button className='main-button green-button' onClick={onMakeArticlePublishClick}>Publish</button>
            <button className='main-button green-button' onClick={onDeleteArticleClick}>Refuse</button>
        </div>
    }
    <div className="singlearticle container">
        <div className='article-title'>
            <h2>{article.title}</h2>
            {/* <h3>آثاره وأهميته والعلاقة بين التقدم وانخفاض الغطاء.</h3> */}
        </div>
        {/* <section>
            <h4>section header</h4>
            <p>تقوم عملية البناء الضوئي تساعد النباتات على استقرار المناخ، عن طريق تعويض التقلب في درجات الحرارة والرطوبة خلال عملية اخراج الاكسجين في عملية البناء الضوئي. تستخدم النباتات ثاني اكسيد الكربون في عملية البناء الضوئي، وتعورض كمية الغازات في الجو التي تنبعث من الحرائق.</p>
            <img src={img12} alt="" />
        </section> */}
        {/* <section>
            <h4>أهمية الغطاء النباتي:</h4>
            <p>يمتص النباتات ثاني اكسيد الكربون وتخرج الاكسجين الهام للتنفس، وهذا يحد من ظاهرة الاحتباس الحراري. يعمل الغطاء الجوي على تنقية الجو من الغازات السامة ومن الغبار وكافة المواد الضارة العالقة بالجو. يعمل الغطاء النباتي على الحفاظ على درجات الحرارة التي تناسب الانسان لكي يعيش، وتقليص الفرق في الحرارة بين الليل والنهار.
                يحفظ رطوبة التربة ودورة حياة المياه الجوفية.
                يحافظ الغطاء على دورات العناصر العضوية والمعدنية في التربية.</p>
            <img src={frame} style={{width:"100%"}} alt="" />
        </section> */}
        {/* <section>
            <h4>آثار الغطاء النباتي على المناخ والطقس</h4>
            <p>تغطي النباتات حوالة 20% من مساحة كوكب الارض، ولهذا فمن المنطقي ان تكون هذه النباتات تؤثر على الطقس والمناخ، حيث يقوم النباتات بإخراج بخار الماء، وهذا البخار يكون سحابة وهذه السحب تؤثر على الطقس، وكذلك في الرطوبة وفي درجات الحرارة. وكذلك تمتص النباتات نسبة كبيرة من الطاقة ومع ذلك لا تساهم النباتات في الاحترار الكلي لأن الدفء الزائد يتم تعويضه عن طريق التبريد التبخيري الناتج عن النتح. المناخ في الاصل هو متوسط الطقس على فترة زمنية طويلة، لهذا فالغطاء النباتي مهم جداً للمناخ.تقوم عملية البناء الضوئي تساعد النباتات على استقرار المناخ، عن طريق تعويض التقلب في درجات الحرارة والرطوبة خلال عملية اخراج الاكسجين في عملية البناء الضوئي. تستخدم النباتات ثاني اكسيد الكربون في عملية البناء الضوئي، وتعورض كمية الغازات في الجو التي تنبعث من الحرائق.</p>
        </section> */}
        {article.sections && article.sections.map((section, index) => (
            <ArticleSection section={section} key={index} />
        ))}
        <div className='article-author-container'>
            {/* <div className='article-author-container'><img src={img13} alt="" /><img src={img14} alt="" /></div> */}
            <div>
                <h3>هذا المقال بقلم كلا من : </h3>
                <p>{article.author.firstName} {article.author.lastName}</p>
                {/* <p>اسم الكاتب الثاني</p> */}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Article

export const ArticleSection = ({section}) => {
    return(
        <section>
            <h4>{section.heading}</h4>
            {/* <p>تقوم عملية البناء الضوئي تساعد النباتات على استقرار المناخ، عن طريق تعويض التقلب في درجات الحرارة والرطوبة خلال عملية اخراج الاكسجين في عملية البناء الضوئي. تستخدم النباتات ثاني اكسيد الكربون في عملية البناء الضوئي، وتعورض كمية الغازات في الجو التي تنبعث من الحرائق.</p> */}
            <p>{section.contentText}</p>
            <img src={`${api}/${section.ReleventImgUrl}`} alt="" />
        </section>
    )
}

// const MakeArticlePublished = () => {
//     return(
//         <div className='publish-or-refuse-container'>
//             <button className='main-button green-button' onClick={() => {}}>Publish</button>
//             <button className='main-button green-button' onClick={() => {}}>Refuse</button>
//         </div>
//     )
// }