import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../../Data/Users";


const initialState = {
    users: Users,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
           const newUser = {
            id: crypto.randomUUID(),
            userName: action.payload.userName,
            name: action.payload.name,
            avatar: action.payload.image || '',
           };
           state.Users.unshift(newUser);
        },
    },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;