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
            createdAt: new Date().toISOString(),
            likes: [],
            comments: [],
           };
           state.posts.unshift(newPost);
        },
        addLike: (state, action) => {
            const { postId, userId } = action.payload;
            const post = state.posts.find(post => post.id === postId);
            const hasLiked = post.likes.includes(userId);

            if (hasLiked) {
                post.likes = post.likes.filter(id => id !== userId);
            } else {
                post.likes.push(userId);
            }
        },
        addComment: (state, action) => {
            const { postId, comment } = action.payload;
            const postIndex = state.posts.findIndex((post) => post.id === postId);
              
            if (postIndex !== -1) {
                state.posts[postIndex]= {
                    ...state.posts[postIndex],
                    comments: [
                        ...state.posts[postIndex].comments,
                        {
                            id: crypto.randomUUID(),
                            userId: comment.userId,
                            content: comment.content,
                            createdAt: new Date().toISOString(),
                        },
                    ],
                };
            }
        },
}});

export const { addPost, addLike, addComment } = postSlice.actions;
export default postSlice.reducer;