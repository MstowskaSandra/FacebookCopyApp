import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from './Slices/postsSlice';
import usersReducer from './Slices/usersSlice';
import modalReducer from './Slices/modalSlice';
import storiesReducer from './Slices/storiesSlice';

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    modal: modalReducer,
    stories: storiesReducer,
});

export default rootReducer;