import axios from "axios"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getUsersById } from "../queries/query"
import { useEffect, useState } from "react"
import { Post } from "../Components/Post/Post"

const api = 'https://ghosn.runasp.net'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14"

export function UserProfile () {
    const {id} = useParams()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null); // Add error state

    // const users = useSelector(state => state.users.users)
    // const user = users.find(user => user.id === Number(id))

    // const user = userId || id;

    // if (!user) {
    //     return (
    //         <div className="container">
    //             <h2>User not found</h2>
    //         </div>
    //     );
    // }

    // const users = useSelector(state => state.users.users)
    // const user = users.find(user => user.id === Number(id))

    // const user = userId || id;

    // const fetchUserInfo = async () => {
    //     try{
    //         const response = await axios.post(`${api}/graphql`, {
    //             query: 
    //         })
    //     }catch (error){
    //         console.error("Faild to fetch user personal info", error)
    //     }
    // }

    const fetchUserData = async () => {
        try{
            const response = await axios.post(`${api}/graphql`,{
                query: getUsersById,
                variables: {id: parseInt(id)}
            }, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            console.log("Full API Response:", response); // Log the full response
            const userInfo = response.data.data.userByIdWithPosts;
            console.log("User Info:", userInfo); // Log userInfo to inspect its structure
            if (userInfo && Array.isArray(userInfo)) {
                setUser(userInfo);
            }
            setLoading(false);
        }catch(error){
            console.error("failed to get the user info")
            setError("Failed to get the user info");
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUserData();
    }, [id])

    // if (!user) {
    //     return (
    //         <div className="container">
    //             <h2>User not found</h2>
    //         </div>
    //     );
    // }

    if (loading) {
        return <div className="container"><h2>Loading...</h2></div>; // Display a loading message
    }

    if (error) {
        return <div className="container"><h2>{error}</h2></div>; // Display error message
    }

    if (!user) {
        return <div className="container"><h2>User not found</h2></div>; // Handle case where user is not found
    }

    return(
        <div className="container">
           {/* <h2>{user.userName}</h2> */}
           {/* waiting for profile --> copy profile code here */}
           <h2>{user.userName}</h2>
           {user.length === 0 ? (
                <h2>No posts yet</h2>
            ) : (
                user.map((item) => (
                    <Post post={item.post} key={item.post.id} isReacted={item.IsLikedByMe} reactionType={item.reactionType} />
                ))
            )}
        </div>
    )
}

// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Post } from "../Components/Post/Post";
// import FollowingsProfile from "../Components/Followings/Followingsprofile";
// import FollowersProfile from "../Components/Followers/Followersprofile";
// import { PurchaseHistory } from "../Components/PurchaseHistory/PurchaseHistory";
// import UserPosts from "../Components/UserPosts/UserPosts";
// import { getUsersById } from "../queries/query";
// // import './userProfile.css';

// const api = 'https://ghosn.runasp.net'
//     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14"

// export function UserProfile() {
//     const { id } = useParams();
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [active, setActive] = useState("المشتريات");

//     const fetchUserData = async () => {
//         try {
//             const response = await axios.post(`${api}/graphql`, {
//                 query: getUsersById,
//                 variables: { id: parseInt(id) }
//             }, 
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             }
//         );
//             const userInfo = response.data.data.userByIdWithPosts;
//             setUser(userInfo);
//             setLoading(false);
//         } catch (error) {
//             console.error("failed to get the user info", error);
//             setError("Failed to get the user info");
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchUserData();
//     }, [id]);

//     if (loading) {
//         return <div className="container"><h2>Loading...</h2></div>;
//     }

//     if (error) {
//         return <div className="container"><h2>{error}</h2></div>;
//     }

//     if (!user) {
//         return <div className="container"><h2>User not found</h2></div>;
//     }

//     return (
//         <div className="user-profile container">
//             <section>
//                 <div className="myinformation">
//                     <div className="myinfo">
//                         <span>{user.cityName ? user.cityName : "مكان الاقامة"}<i className="ri-map-pin-line"></i></span>
//                         <span>{user.dateOfBirth}<i className="ri-calendar-line"></i></span>
//                         <span>{user.email}<i className="ri-global-line"></i></span>
//                         <div className="myfollowingandfollowers">
//                             <span>{user.totalFollowings} يتابع </span>
//                             <span>{user.totalFollowers} المتابعون</span>
//                         </div>
//                     </div>
//                     <div className="myimg">
//                         <img src={`${api}/${user.imageUrl}`} alt={user.userName} />
//                         <span>{user.userName}</span>
//                     </div>
//                 </div>
//             </section>
//             <section>
//                 <ul className='profile-tap'>
//                     <li onClick={() => setActive("المشتريات")} className={`${active === "المشتريات" ? "active" : ""}`}>المشتريات</li>
//                     <li onClick={() => setActive("المتابعون")} className={`${active === "المتابعون" ? "active" : ""}`}>المتابعون</li>
//                     <li onClick={() => setActive("يتابع")} className={`${active === "يتابع" ? "active" : ""}`}>يتابع</li>
//                     <li onClick={() => setActive("المنشورات")} className={`${active === "المنشورات" ? "active" : ""}`}>المنشورات</li>
//                 </ul>
//                 <div className='content-of-tap'>
//                     {active === "المشتريات" && <PurchaseHistory />}
//                     {active === "المتابعون" && <FollowersProfile user={user} />}
//                     {active === "يتابع" && <FollowingsProfile />}
//                     {active === "المنشورات" && <UserPosts posts={user.post} />}
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default UserProfile;
