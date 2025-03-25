import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: [], 
    trailerVideo:null,
    PopularMovies:null,
    TrendingMovies:null
  },
  reducers: {  
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload; 
    },
    addTrailerVideo:(state,action)=>{
      state.trailerVideo=action.payload
    },
    addPopularMovies:(state,action)=>{
      state.PopularMovies=action.payload;
    },
    addTrendingMovies:(state,action)=>{
      state.TrendingMovies=action.payload;
    }
  }
});

export const { addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTrendingMovies } = moviesSlice.actions;

export default moviesSlice.reducer; // ✅ Default export
