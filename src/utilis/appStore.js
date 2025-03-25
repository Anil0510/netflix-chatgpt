import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice"; 
import UserReducer from "./UserSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice"

const appStore = configureStore({
    reducer: {
        user: UserReducer,
        movies: moviesReducer, 
        gpt:gptReducer,
        config:configReducer,
    }
});

export default appStore;
