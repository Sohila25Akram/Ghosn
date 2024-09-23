import axios from "axios"
import { useEffect, useState } from "react";
import { Post } from "../Post/Post";

const api = 'https://ghosn.runasp.net'
export function MyPosts(){
    const [myPosts, setMyPosts] = useState([])

    const fetchMyPosts = async () => {
        try{
            const response = await axios.get(`${api}/api/post/MyPosts`);
            setMyPosts(response.data)
        }catch(error){
            console.error("falied to fetch my posts", error)
        }
    }
useEffect(() => {
    fetchMyPosts();
}, [])

    return(
        <div>
            {myPosts && myPosts.length > 0 ? (
                myPosts.map((post) => (
                    <Post post={post} key={post.id} />
                ))
            ) : (
                "no posts yet"
            )}
        </div>
    )
}