import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice"; 
import UserReducer from "./UserSlice";

const appStore = configureStore({
    reducer: {
        user: UserReducer,
        movies: moviesReducer, 
    }
});

export default appStore;
