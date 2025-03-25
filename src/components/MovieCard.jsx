import React from 'react'
import { IMG_CDN_URL } from '../utilis/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img alt="movie-card"
        src={IMG_CDN_URL + posterPath}/>
        {/* <img src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg" alt='cd' />+{posterPath} */}
    </div>
  )
}

export default MovieCard