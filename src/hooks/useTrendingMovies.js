import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTrendingMovies } from '../utilis/moviesSlice'
import { API_OPTIONS } from '../utilis/constant'

const useTrendingMovies = () => {
  const  dispatch =useDispatch()

  const trendingMovies=useSelector((store)=>store.movies.TrendingMovies)
  const getTrendingMovies=async()=>{
   const data= await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', API_OPTIONS);

   const json=await data.json();
   dispatch(addTrendingMovies(json.results))
  };
  useEffect(()=>{
    !trendingMovies&&getTrendingMovies();
  })
}

export default useTrendingMovies