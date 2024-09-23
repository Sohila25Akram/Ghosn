import { useEffect } from "react"
import { ArticleSnapShot } from "../Components/ArticleSnapShot/ArticleSnapShot"
import '../styles/articles.css'
import { useSelector } from "react-redux"
import { useQuery } from 'react-query'
import { getPublichedArticles } from '../queries/query'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setError, setPublishedArticles, setLoading } from '../features/articles/articlesSlice'
import { fetchArticleList } from "../actions/articlesAction"

// const api = 'https://9838mzjl-7268.uks1.devtunnels.ms/graphql';
// const api = 'https://3b2dnvtd-7268.uks1.devtunnels.ms/graphql';
const api = 'https://ghosn.runasp.net/graphql'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14"

function Articles(){

    // const articles  = useSelector(state => state.articles.publishedArticles)

    // const dispatch = useDispatch();

    //-----------------------------------------------
    // const fetchArticleList = async () => {
    //     try {
    //         const response = await axios.post(api, {
    //             query: getPublichedArticles
    //         },{
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });
    //         const articles = response.data.data.publishedArticles;
    //         return articles;
    //     } catch (error) {
    //         console.error('Request failed:', error);
    //         throw new Error('Failed to fetch article list'); // Rethrow error for further handling
    //     }
    // };
    //-----------------------------------------------
    const {data: articles = [], isLoading, error} = useQuery("getArticleList", fetchArticleList);


    useEffect(() =>{
        // const fetchData = async () =>{
        //     dispatch(setLoading(true));
        //     try {
        //         const articleList = await fetchArticleList();
        //         dispatch(setPublishedArticles(articleList));
        //     } catch (error) {
        //         dispatch(setError(error.message));
        //     } finally {
        //         dispatch(setLoading(false));
        //     }
        // }
        // fetchData();
        fetchArticleList();
    }, []);

    
    // if (isLoading) return <div className="pro">Loading...</div>;
    // if (error) return <div className="pro">Error: {error.message}</div>;

    return(
        <div className="container">
            <h2>مقالات علمية</h2>
            <div className="articles-container">
                {articles.map(article => (
                    <ArticleSnapShot key={article.id} article={article} />
                ))}
                {/* <ArticleSnapShot /> */}
                {/* <ArticleSnapShot />
                <ArticleSnapShot /> */}
            </div>
        </div>
    )
}

export default Articles