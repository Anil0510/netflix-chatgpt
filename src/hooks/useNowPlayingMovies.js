import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utilis/constant";
import { addNowPlayingMovies } from "../utilis/moviesSlice";
const useNowPlayingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
    
  );
  console.log("nowPlayingMovies",nowPlayingMovies)

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json ,"results")
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
   if (!nowPlayingMovies  || nowPlayingMovies.length===0 ){
     getNowPlayingMovies();}
  }, []);
};

export default useNowPlayingMovies;