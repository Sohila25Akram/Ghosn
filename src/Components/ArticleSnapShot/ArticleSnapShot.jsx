import { Link } from "react-router-dom"
import Articleone from "../../assets/images/articleone.png"
import four from "../../assets/images/afc2cf7eaa4157cd0c2dc097b2beffd3.jpeg"
import './articleSnapShot.css'
import axios from "axios"
import { toast } from "react-toastify"

const api = 'https://ghosn.runasp.net'
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmZjhlNDI0Yy1iODA4LTRjZTAtOTljNS1kMTBmNTI4YWZlMWYiLCJzdWIiOiJhaG1lZHNhbGFoMjQiLCJlbWFpbCI6ImFobWVkLnNhbGFoQGdvb2dsZS5jb20iLCJuYW1lIjoiQWhtZWQgU2FsYWgiLCJ1aWQiOiIxIiwicm9sZSI6WyJXcml0ZXIiLCJFZGl0b3IiLCJBZG1pbiJdLCJuYmYiOjE3MTY1ODU5MzUsImV4cCI6MTcxNjU4NjExNSwiaWF0IjoxNzE2NTg1OTM1LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.OyX1fzO-8eqE8hSFmRqExJ3FlLHbxlpyUT-rTKNMZ9g"


export function ArticleSnapShot({article}){
  if (!article) {
    return null;
  }
  

  const onDeleteArticleClick = async () => {
    try{
        const response = await axios.delete(`${api}/api/Article/${article.slug}/delete`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if(response.status===200 || response.status===201){
          toast.success('the article deleted successfully')
          window.location.reload()
        }
       
    }catch (error) {
        console.error('error to deleet the article'. error)
    }
   
}

    return(
      <div className="article">
        <div className='ar-cont'>
          <div className="ar-img">
            {article.introImgUrl === null ? <img src={four} alt="main" /> : <img src={`${api}/${article.ReleventImgUrl}`} alt="main" />}
          </div>
          <div>
            {/* <h2>{article.slug.split('-').join(' ')}</h2> */}
            <h2>{article.title}</h2>
            <div className="clip-desc">
              <p>{article.sections && article.sections.length > 0 && article.sections[0].contentText}</p>
            </div>
            <div className="article-snapshot-bottom">
              <Link to={`/article/${article.slug}-${article.id}`} className='main-button'>عرض المقال</Link>
              <button className="main-button" onClick={onDeleteArticleClick}><i className="ri-delete-bin-line"></i></button>
            </div>
          </div>
          <div className='clear-cont'></div>
        </div>
      </div>      
    )
  }