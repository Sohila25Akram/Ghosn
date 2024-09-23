import { useEffect, useState } from "react";
import { Post } from "../Components/Post/Post";
import '../styles/community.css'
import { PeopleSnapshot } from "../Components/Post/Post";
import axios from "axios";
import {getRecommendedPosts} from "../queries/query"
import { useDispatch } from "react-redux";
import { postAdded, setPosts } from "../features/posts/postsSlice";
import { SuggestedPeople } from "../Components/SuggestedPeople/SuggestedPeople";
import { AddPost } from "./AddPost";
import { Link } from "react-router-dom";
import { SearchPanel } from "../Components/Search/Search";
import Followersprofile from "../Components/Followers/Followersprofile";
import Followingsprofile from "../Components/Followings/Followingsprofile";
import { Suspense } from "react";
import { useQuery } from "react-query";
import PostSkeleton from "../Components/Skeleton/PostSkeleton/PostSkeleton";


export function Community(){
    const [isActiveCategory, setIsActiveCategory] = useState(0)
    const [recommendedPosts, setRecommendedPosts] = useState([])
    const categories = ["Posts", "Suggested People"];
    // const [showSearchPanel , setShowSearchPanel] = useState(false)
    
    const handleClick = (e) => {
        setIsActiveCategory(e)
    }

    // const handelSearchPanleClick = () => {
    //     setShowSearchPanel(true)
    // }


    const api = 'https://ghosn.runasp.net'
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14"


    const dispatch = useDispatch();
    const fetchRecommendedPosts = async() => {
        try{
            const response = await axios.post(`${api}/graphql`, {
                query: getRecommendedPosts
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const postsList = response.data.data.recommendedPosts;
            setRecommendedPosts(postsList)
            // postsList.forEach(post => dispatch(postAdded(post)));
            dispatch(setPosts(postsList));
        }catch(error){
            console.error("failed to fech recommended posts", error)
        }
    }

    useEffect(() => {
        fetchRecommendedPosts();
    }, [dispatch])

    const {data, isLoading, error} = useQuery('getRecommendedPosts', fetchRecommendedPosts);

    if(isLoading){
        return <PostSkeleton />
    }

    return(
        <div className="container">
            <div className="community-container">
                <div className="community-tap-container">
                    <div className="community-tap">
                        {categories.map((category, index) => (
                            <span
                                key={index}
                                className={`main-button green-button ${isActiveCategory === index ? 'active' : ''}`}
                                onClick={() => handleClick(index)}
                            >
                                {category}
                        </span>
                        ))}
                    </div>
                    {/* <div className="search-container" onClick={handelSearchPanleClick}>
                        <span className='search-icon'><i className="ri-search-line"></i></span>
                        <input type="search" placeholder='ما الذي تبحث عنه؟' name="" id="" />
                    </div>
                    {showSearchPanel && <SearchPanel setShowSearchPanel={setShowSearchPanel} />} */}
                    <Link to='/community/searchPeople' className="search-btn">
                        <span>Search</span>
                        <i className="ri-search-line"></i>
                    </Link>
                </div>
                {isActiveCategory === 0 && (
                    <div className="community-flex">
                        <div className="posts-container">
                            {recommendedPosts.map((post, index) => (
                                <Post post={post} key={index} />
                            ))}
                            <Link to={"/community/addPost"} style={{width:"fit-content",padding:"16px",position:"fixed",bottom:"40px",left:"10px"}} className="main-button green-button"><i className="ri-add-circle-line"></i></Link>
                        </div>
                        <div>
                            <SuggestedPeople />
                        </div>
                    </div>
                )}
                {isActiveCategory === 1 && (
                    <div className="suggested-people-separate">
                        <SuggestedPeople />
                    </div>
                )}
                {/* {isActiveCategory === 2 && (
                    <div className="followings-separate">
                        <Followingsprofile />
                    </div>
                )}
                {isActiveCategory === 3 && (
                    <div className="folllowers-separate">
                        <Followersprofile />
                    </div>
                )} */}
              
            </div>
        </div>
    )
}

