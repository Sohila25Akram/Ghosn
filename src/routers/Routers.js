import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Products from '../pages/Products'
import Profile from '../pages/Profile'
import Article from '../pages/Article'
import { Details } from '../pages/Details';
import { Cart } from '../pages/Cart';
import { DashboardLayout } from "../Layout/DashboardLayout";
import Articles from "../pages/Articles"
import { Community } from "../pages/Community"
import Login from "../Components/Login/Login"
import Signup from "../Components/Signup/Signup"
import RegistrationProcess from "../pages/RegistrationProcess"
import { Comments } from "../pages/Comments"
import { UserProfile } from "../pages/UserProfile"
import Pots from "../Components/Pots/Pots"
import SearchPeople from "../pages/SearchPeople"
import { AddPost } from "../pages/AddPost"

export function Routers(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/Ghosn' element={<Home/>}  />
            <Route path='/products' element={<Products/>}  />
            {/* <Route path='/pots' element={<Pots />} /> */}
            <Route path="/Plant/:productId" element={ <Details /> } />
            <Route path='/profile' element={<Profile/>}  />
            <Route path='/article/:slugAndId' element={<Article/>}  />
            {/* <Route path="/details" element={ <Details />} /> */}
            <Route path="/cart" element={ <Cart />} />
            <Route path="/dashboard/*" element={ <DashboardLayout /> } />
            <Route path="/articles" element={ <Articles /> } />
            <Route path="/community" element={ <Community /> } />
            <Route path="/community/comments/:postId" element={ <Comments /> } />
            <Route path="/registeration" element={ <RegistrationProcess /> } />
            {/* <Route path="/login" element={ <Login /> } /> */}
            <Route path="/community/addPost" element={ <AddPost /> } />
            <Route path="/community/searchPeople" element={ <SearchPeople /> } />
            <Route path="/community/userProfile/:id" element={ <UserProfile /> } />
        </Routes>
    )
}
