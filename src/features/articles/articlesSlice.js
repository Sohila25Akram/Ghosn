import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allArticles: [],
    publishedArticles: [],
    isLoading: false,
    error: null
}
const articlesSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {
        setAllArticles(state, action){
            state.allArticles = action.payload;
        },
        setPublishedArticles(state, action){
            state.publishedArticles = action.payload;
        },
        setLoading(state, action){
            state.isLoading = action.payload;
        },
        setError(state, action){
            state.error = action.payload;
        },
    }
})

export const { setAllArticles, setPublishedArticles, setLoading, setError } = articlesSlice.actions;

export default articlesSlice.reducer
