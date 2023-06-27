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
               state.loading = true;
          },
          [getPosts.fulfilled]: (state, { payload }) => {
               state.loading = false;
               state.entities = payload;
          },
          [getPosts.rejected]: (state, { payload }) => {
               state.loading = false;
          }
     }
})

export  const postReducer = userSlice.reducer