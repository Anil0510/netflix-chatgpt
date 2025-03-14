import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utilis/constant";
import { addTrailerVideo } from "../utilis/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    console.log("API Response:", json);

    const filterData = json?.results?.filter((video) => video.type === "Trailer");
    const trailer = filterData?.length ? filterData[0] : json?.results[0];

    console.log("Filtered Trailer:", trailer);

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (!trailerVideo) {
      getMovieVideos();
    }
  }, [movieId]);

  console.log("Redux Store Trailer:", trailerVideo);
};

export default useMovieTrailer;
