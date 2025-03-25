import React from 'react'
import langs from '../utilis/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langKey=useSelector((store)=>store.config.langs)
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className=' w-1/2 bg-black grid-cols-12'>

           <input type='text' className='p-4 m-4  bg-white col-span-9'    
            placeholder={langs[langKey].gptSearchPlaceholder}/> 
           <button className='py-2 px-4 bg-rose-700 text-white rounded-lg col-span-3 m-4'>
            
           {langs[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar