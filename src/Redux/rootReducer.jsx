import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from './Slices/postsSlice';
import usersReducer from './Slices/usersSlice';

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
})

export default rootReducer;