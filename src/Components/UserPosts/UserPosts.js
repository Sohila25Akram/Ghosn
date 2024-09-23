import { Post } from '../Post/Post'
import './userPosts.css'

const UserProfile = ({post}) => {
    return(
        <>
            {post.map(post => (
                <Post post={post} />
            ))}
        </>
    )
}

export default UserProfile