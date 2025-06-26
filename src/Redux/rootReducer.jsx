import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from './Slices/postsSlice';
import usersReducer from './Slices/usersSlice';
import modalReducer from './Slices/modalSlice';

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    modal: modalReducer,
});

export default rootReducer;