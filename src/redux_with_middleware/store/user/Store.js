import { configureStore } from "@reduxjs/toolkit";
import { postReducer, userSlice } from "./userSlice";

export const myStore = configureStore({
    reducer : {
        posts : postReducer
    }
})

export default myStore