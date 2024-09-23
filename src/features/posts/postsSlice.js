import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: []
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        postAdded(state, action) {
            state.posts.push(action.payload)
        },
        commentAdded: (state, action) => {
            const { postId, comment } = action.payload;
            const existingPost = state.posts.find(post => post.id === postId);
            if (existingPost) {
                existingPost.comments.push(comment);
            }
        },
        reactionAdded: (state, action) => {
            const { postId, reaction } = action.payload;
            const existingPost = state.posts.find(post => post.id === postId);
            if (existingPost) {
                existingPost.reactions.push(reaction);
                existingPost.totalLikes += 1;
            }
        },
        reactionRemoved(state, action) {
            const { postId, reactionId } = action.payload;
            const existingPost = state.posts.find(post => post.id === postId);
            if (existingPost) {
                existingPost.reactions = existingPost.reactions.filter(reaction => reaction.id !== reactionId);
                existingPost.totalLikes -= 1;
            }
        }
    }
})

export const { setPosts, postAdded, commentAdded, reactionAdded, reactionRemoved } = postsSlice.actions

export default postsSlice.reducer