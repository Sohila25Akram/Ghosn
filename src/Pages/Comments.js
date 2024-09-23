import { Link, useParams } from 'react-router-dom'
import '../styles/comments.css'
import { Post } from '../Components/Post/Post'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { commentAdded } from '../features/posts/postsSlice';

const api = 'https://ghosn.runasp.net'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14"

export function Comments (){
    const [commentContent, setCommentContent] = useState('')
    const [comments, setComments] = useState([]);

    const { postId } = useParams();
    const dispatch = useDispatch();

    const posts = useSelector(state => state.posts.posts)
    const post = posts.find(post => post.id === parseInt(postId))

    // const posts = useSelector(state => {
    //     console.log("Redux State:", state);
    //     return state.posts.posts;
    // });

    // const post = posts.find(post => post.id === parseInt(postId));

    useEffect(() => {
        if (post) {
            setComments(post.comments);
        }
    }, [post]);

    
    const onAddCommentClick = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(`${api}/api/post/AddComment`, {
                postId: postId,
                content: commentContent
            },{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log("Comment added successfully")

            const newComment = {
                ...response.data,
                content: commentContent // Ensure content is set
            }; // Assuming the API response contains the new comment details

            setComments([...comments, newComment]);

            setCommentContent('');
           
        }catch(error){
            console.error()
        }
    }

    if (!post) {
        return <div>Loading...</div>; // or any other loading indicator
    }
    
    return(
        <div className='comments-container container'>
            <div className='comments-container-top-corner'>
                <Link to='/community'><span><i className="ri-arrow-right-line"></i></span></Link>
                <span><i className="ri-more-fill"></i></span>
            </div>
            <Post post={post} />
            {/* <h2>Our comments</h2> */}
            {/* <Comment />
            <Comment /> */}
            {comments.length > 0 ? (
                comments.map((comment, index) => {
                    console.log(comment);
                    return <Comment key={index} comment={comment} />
            })
            ) : (
                <p>No comments yet.</p>
            )}
            <form onSubmit={onAddCommentClick}>
                <input type='text' placeholder='write comment' value={commentContent} onChange={e => setCommentContent(e.target.value)} />
                <button type='submit' className='main-button'><i className="ri-send-plane-2-fill"></i></button>
                {/* {(commentContent > 0) ? <button type='submit' className='main-button'><i className="ri-send-plane-2-fill"></i></button> : ''} */}
            </form>
        </div>
    )
}

const Comment = ({comment}) => {
    return(
        <div className='comment-single-container'>
            <div className='comment-user-img'>
                <img src={`${api}/${comment.Author.ReleventImgUrl}`} alt='username' />
            </div>
            <div className='comment-content-single-container'>
                <div className='comment-content'>
                    <h4>{comment.Author.userName}</h4>
                    <p>{comment.content}</p>
                </div>
                <div className='bottom-comment-part'>
                    <span><i className="ri-heart-line"></i> {comment.totalLikes}</span>
                    <span><i className="ri-message-2-line"></i> 2</span>
                </div>
            </div>
        </div>
    )
} 