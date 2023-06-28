import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./user_action";


const initialState = {
     entities: [],
     loading: false,     
}

export const userSlice = createSlice({
     name: 'posts',
     initialState,
     extraReducers: {
          [getPosts.pending]: (state) => {
               console.log("state pending called")
               state.loading = true;
          },
          [getPosts.fulfilled]: (state, { payload }) => {
               console.log("state success called")
               state.loading = false;
               state.entities = payload;
          },
          [getPosts.rejected]: (state, { payload }) => {
               console.log("state rejected called")
               state.loading = false;
          }
     }
})

export  const postReducer = userSlice.reducer