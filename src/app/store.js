import { configureStore } from "@reduxjs/toolkit";
import ProductsListReducer from "../features/products/productsSlice";
import ArticlesListReducer from "../features/articles/articlesSlice"
import CartListReducer from "../features/products/cartSlice"
import PostsReducer from "../features/posts/postsSlice"
import UsersReducer from "../features/users/usersSlice"

const store = configureStore({
    reducer: {
        products: ProductsListReducer,
        articles: ArticlesListReducer,
        cart: CartListReducer,
        posts: PostsReducer,
        users: UsersReducer
    }
})

export default store;