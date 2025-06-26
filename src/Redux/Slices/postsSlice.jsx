import { createSlice } from "@reduxjs/toolkit";
import { Posts } from "../../Data/Posts";

const initialState = {
    posts: Posts,
};

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
           const newPost = {
            id: crypto.randomUUID(),
            userId: action.payload.userId,
            content: action.payload.content,
            image: action.payload.image || '',
            createAt: new Date().toISOString(),
            likes: [],
            comments: [],
           };
           state.posts.unshift(newPost);
        },
    },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;