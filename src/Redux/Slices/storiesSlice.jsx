import { createSlice } from "@reduxjs/toolkit";
import { Stories } from "../../Data/Stories";


const initialState = {
    stories: Stories,
};

const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
  }
});

export default storiesSlice.reducer;
