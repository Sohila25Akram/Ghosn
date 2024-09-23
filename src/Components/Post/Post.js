import './post.css'
import initialImage from '../../assets/image.png'
import loginImage from '../../assets/login-1.png'
import { Link, useParams } from 'react-router-dom'
import avatar from '../../assets/images/avatar.jpg'
import axios from 'axios'
import { useState } from 'react'


const api = 'https://ghosn.runasp.net'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14"
export function Post({post, isReacted, reactionType}){
    const [reacted, setReacted] = useState(isReacted)
    const [currentReactionType, setCurrentReactionType] = useState(reactionType);
    const [totalLikes, setTotalLikes] = useState(post.totalLikes);
    // const [selectedEmoji, setSelectedEmoji] = useState(null);

    const emojis = [
        { name: 'Like', symbol: '👍' },
        { name: 'Love', symbol: '❤' },
        { name: 'Laugh', symbol: '😂' },
        { name: 'Sad', symbol: '😢' },
        { name: 'Angry', symbol: '😡' },
        { name: 'Wow', symbol: '😮' },
    ];


    // const getEmojiByName = (name) => {
    //     const emoji = emojis.find(e => e.name === name);
    //     return emoji ? emoji.symbol : null;
    // };
    // const handleEmojiClick = (emoji) => {
    //     setSelectedEmoji(emoji.id);
    //     if (onEmojiSelect) {
    //         onEmojiSelect(emoji);
    //     }
    // };

    // const [isReacted, setIsReacted] = useState(post.IsLikedByMe)

    const onAddReactionClicked = async () => {
        try{
            const response = await axios.post(`${api}/api/post/LikePost`, {
                postId: post.id,
                reactionType: 1
            }, {
                headers : {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log("react created" , response)
            setReacted(true);
            setCurrentReactionType(1);
            setTotalLikes(prevLikes => prevLikes + 1);
        }catch(error){
            console.log('error to make a react', error)
        }
    }

    const deleteReactionClicked = async () => {
        try {
            const response = await axios.delete(`${api}/api/post/unlikePost/${post.id}`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log("reaction deleted", response);
            setReacted(false);
            setCurrentReactionType(null);
            setTotalLikes(prevLikes => prevLikes - 1);
        } catch (error) {
            console.log('error deleting reaction', error);
        }
    };

    const handleReactionClick = () => {
        if (reacted) {
            deleteReactionClicked();
        } else {
            onAddReactionClicked();
        }
    };

    return(
        <div className='post-container'>
            <div className='post-container-top-part'>
                <div>
                    <Link to={`/community/userProfile/${post.Author.id}`} className='people-snapshot'>
                        <div className='people-img'>
                            <img src={post.Author.image? `${api}/${post.Author.ReleventImgUrl}` : avatar} alt={post.Author.userName} />
                        </div>
                        <div>
                            <h4>{post.Author.userName}</h4>
                            <span>{post.createdAt}</span>
                        </div>
                    </Link>
                </div>
                 <span><i className="ri-more-fill"></i></span>
            </div>
            <div className='post-content'>
                <p>{post.text}</p>
                {post.imageUrl && 
                    <div className='post-img-container'>
                        <img src={`${api}/${post.ReleventImgUrl}`} alt='post' /> 
                    </div>
                } 
            </div>
            <div className='post-container-bottom-part'>
                <span><i className="ri-share-forward-line"></i> 2</span>
                <Link to={`/community/comments/${post.id}`}><span><i className="ri-message-2-line"></i> {post.totalComments}</span></Link>
                {/* <EmojiSelector onEmojiSelect={reactionType} /> */}
                {/* <div className='emoji-container'>
                {emojis.map((emoji) => (
                    <span
                        key={emoji.id}
                        className={`emoji-icon ${selectedEmoji === emoji.id ? 'selected' : ''}`}
                        onClick={() => handleEmojiClick(emoji)}
                    >
                        {emoji.symbol}
                    </span>
                ))}
                </div> */}
              
                {/* <span onClick={() => {}}>
                    {isReacted?<i className="ri-heart-fill" style={{color:"#008D3E"}}></i> : <i className="ri-heart-line"></i> }
                    {post.totalLikes}
                </span> */}
                <span className='emoji-like-btn' onClick={handleReactionClick}>
                    {currentReactionType ? (
                        <i className="ri-heart-fill" style={{color:"#008D3E"}}></i>
                    ) : (
                        <i className="ri-heart-line"></i>
                    )}
                    {totalLikes}
                </span>
                <div className='emojis-container'>
                    {emojis.map(emoji => (
                        <span className='emoji-icon' key={emoji.name}>{emoji.symbol}</span>
                    ))}
                </div>
                {/* <span><i className="ri-heart-fill"></i> 23</span> */}
            </div>
            {/* <ul className="options-list">
                <li><Link to={`/Plant/`} className="link-option"><span>Show</span> <i className="ri-indent-decrease"></i></Link></li>
                <li><Link to='/products' className="link-option"><span>Edit</span> <i className="ri-edit-2-line"></i></Link></li>
                <li><span className="link-option"><span>Delete</span> <i className="ri-delete-bin-5-line"></i></span></li>
            </ul> */}
        </div>
    )
}

export const PeopleSnapshot = ({person}) =>{
    return(
        <>
        {/* replce betwwen the person id amd userId to show result 
            if no result in id which come search ---> ask Amr to provide it
        */}
            <Link to={`/community/userProfile/${person.id}`} className='people-snapshot'>
                <div className='people-img'>
                    {person.imageUrl ? (
                        <img src={`${api}/${person.imageUrl}`} alt={person.userName} />
                    ) : person.imageProfile ? (
                        <img src={`${api}/${person.imageProfile}`} alt={person.userName} />
                    ) : (
                        <img src={avatar} alt={person.userName} />
                    )}
                </div>
                <div>
                    <h4>{person.userName}</h4>
                    <span>time</span>
                </div>
            </Link>
        </>
    )
}
