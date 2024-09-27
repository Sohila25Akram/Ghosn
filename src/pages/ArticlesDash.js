import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ArticleSnapShot } from "../Components/ArticleSnapShot/ArticleSnapShot";
import { getAllArticles, getPublichedArticles, getPendingArticle } from "../queries/query";
import axios from "axios";
import { useEffect, useState } from "react";
import { setError, setAllArticles, setLoading } from '../features/articles/articlesSlice'
import { ArticleCategory } from "../Components/Taps/Taps";
import '../styles/articles.css'

export function ArticlesDash(){
    // const [allArticles, setAllArticles] = useState([])
    // const articles = useSelector(state => state.articles.articles)
    const categories = ["All", "Published", "Pending"];
    const [isActiveCategory, setIsActiveCategory] = useState(0);

    const handleClick = (e) => {
        setIsActiveCategory(e)
    }
    const api = 'https://ghosn.runasp.net/graphql'
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmZjhlNDI0Yy1iODA4LTRjZTAtOTljNS1kMTBmNTI4YWZlMWYiLCJzdWIiOiJhaG1lZHNhbGFoMjQiLCJlbWFpbCI6ImFobWVkLnNhbGFoQGdvb2dsZS5jb20iLCJuYW1lIjoiQWhtZWQgU2FsYWgiLCJ1aWQiOiIxIiwicm9sZSI6WyJXcml0ZXIiLCJFZGl0b3IiLCJBZG1pbiJdLCJuYmYiOjE3MTY1ODU5MzUsImV4cCI6MTcxNjU4NjExNSwiaWF0IjoxNzE2NTg1OTM1LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.OyX1fzO-8eqE8hSFmRqExJ3FlLHbxlpyUT-rTKNMZ9g"
    
    const articles  = useSelector(state => state.articles.allArticles)

    const dispatch = useDispatch();

    // const currentArticleState = document.querySelector(".article-tap span").textContent;

    const fetchArticleList = async (category) => {
        let query;
        switch (category) {
            case "Published":
                query = getPublichedArticles;
                break;
            case "All":
                query = getAllArticles;
                break;
            case "Pending":
                query = getPendingArticle;
                break;
            default:
                query = getAllArticles;
                break;
        }

        try {
            const response = await axios.post(api, { query }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (category === "Published") {
                return response.data.data.publishedArticles;
            } else {
                return response.data.data.allArticles;
            }
        } catch (error) {
            console.error('Request failed:', error);
            throw new Error('Failed to fetch article list'); // Rethrow error for further handling
        }
    };

    useEffect(() =>{
        const fetchData = async () =>{
            dispatch(setLoading(true));
            try {
                const category = categories[isActiveCategory];
                const articleList = await fetchArticleList(category);
                dispatch(setAllArticles(articleList));
            } catch (error) {
                dispatch(setError(error.message));
            } finally {
                dispatch(setLoading(false));
            }
        }
        fetchData();
    }, [dispatch, isActiveCategory]);


    return(
        <div className="container">
            <div className="article-tap" style={{display: "flex",justifyContent: "space-between", width:"100%"}}>
                {/* <ArticleCategory /> */}
                {categories.map((category, index) => (
                    <span key={index} className={`main-button green-button ${isActiveCategory === index ? 'active' : ''}`} onClick={() => handleClick(index)}>{category}</span>
                ))}
                  <Link to='/dashboard/articlesDash/addArticle' className="main-button" style={{width:"fit-content"}}>Add Article</Link>
            </div>
            {/* {articles.map(article => (
                <ArticleSnapShot key={article.id} article={article} />
            ))} */}
            {articles.map(article => (
                <ArticleSnapShot key={article.id} article={article} />
            ))}
        </div>
       

    )
}