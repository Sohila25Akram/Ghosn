import { PeopleSnapshot } from '../Components/Post/Post'
import '../styles/addPost.css'
import login from '../assets/login-1.png'
import { useState , useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { postAdded } from '../features/posts/postsSlice'
import { Link } from 'react-router-dom'
import CookiesServices from "../Services/CookiesServices"
import { toast } from 'react-toastify'
const img = ''
const initialPerson = {
    userName: 'username',
    imageUrl: login
}

const api = 'https://ghosn.runasp.net'

export function AddPost () {
    const [postAudience, setPostAudience] = useState('1')
    const [postContent, setPostContent] = useState('');
    const [postImage, setPostImage] = useState(null);
    const token=CookiesServices.get('jwt')
    const [dataProfile , setdataProfile]=useState({})

    useEffect(()=>{
        const profile=async()=>{
            try{
                const response= await axios.get("https://ghosn.runasp.net/api/Auth/v2/profile",{
                    headers:{Authorization: `Bearer ${token}`},
                    
                })
            
                setdataProfile(response.data)
              
                       }
            catch(error){}

        }
        profile()
    })

    const dispatch = useDispatch();

    const handlePostAudience = (e) => {
        setPostAudience(e.target.value)
    }

    const handleContentChange = (e) => {
        setPostContent(e.target.value);
    };

    const handleImageChange = (e) => {
        setPostImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('Content', postContent);
        formData.append('ImageFile', postImage);
        formData.append('PostAudience', postAudience)

        try{
            const response = await axios.post(`${api}/api/post/Add`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log('Post added successfully:', response.data);
            dispatch(postAdded(formData))
            // Reset form state
            setPostContent('');
            setPostImage(null);
            setPostAudience('1');
        }catch(error){
            console.error('failed to add post', error)
        }
    };

    return(
        <div className='add-post-container-above'>
        <div className='add-post-container'>
            <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='add-post-top-corner'>
                    <PeopleSnapshot person={dataProfile} />
                    <Link to='/community'><span onClick={() => {}}><i className="ri-arrow-left-line"></i></span></Link>
                </div>
                <textarea placeholder='ادخل المحتوى الذي تريده' value={postContent} onChange={handleContentChange}></textarea>
                <input type='file' onChange={handleImageChange} /><br />
                <span>خصوصية المنشور:</span><br />
                <div className='post-audience-container'>
                    <div className='post-audience'>
                        <label htmlFor='public'>Public</label>
                        <input type='radio' name='post-audience' id='public' value='1' onClick={handlePostAudience} />
                    </div>
                    <div className='post-audience'>
                        <label htmlFor='followers'>Followers</label>
                        <input type='radio' name='post-audience' id='followers' value='2' onClick={handlePostAudience} />
                    </div>
                    <div className='post-audience'>
                        <label htmlFor='only-me'>Only Me</label>
                        <input type='radio' name='post-audience' id='only-me' value='3' onClick={handlePostAudience} />
                    </div>
                </div>
                <button type='submit' className='add-post-btn main-button green-button'>Pulish Now</button>
            </form>
            </div>
        </div>
        </div>
    )
}
