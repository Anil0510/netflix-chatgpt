import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utilis/constant'
const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10 '>
        <img src={BG_URL} alt='back-groubg'/>

      </div>
<GptSearchBar/>
<GptMovieSuggestion/>

    </div>
  )
}

export default GptSearch