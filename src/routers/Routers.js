import { Routes, Route } from "react-router-dom"
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import Profile from '../Pages/Profile'
import Article from '../Pages/Article'
import { Details } from '../Pages/Details';
import { Cart } from '../Pages/Cart';
import { DashboardLayout } from "../Layout/DashboardLayout";
import Articles from "../Pages/Articles"
import { Community } from "../Pages/Community"
import Login from "../Components/Login/Login"
import Signup from "../Components/Signup/Signup"
import RegistrationProcess from "../Pages/RegistrationProcess"
import { Comments } from "../Pages/Comments"
import { AddPost } from "./Pages/AddPost"
import { UserProfile } from "../Pages/UserProfile"
import Pots from "../Components/Pots/Pots"
import SearchPeople from "../Pages/SearchPeople"

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
