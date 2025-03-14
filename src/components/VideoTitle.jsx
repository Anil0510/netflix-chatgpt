import React from 'react'

const VideoTitle = ({title,overview}) => {
  if (!title || !overview) return null;
  console.log("title",title)
  return (
    <div className=' w-screen aspect-video pt-[20%] px-25 absolute text-white bg-gradient-to-r from '>
<h1 className='text-6xl font-bold'>{title}</h1>
<p className='py-6 text-lg w-1/4'> {overview}</p>
<div >
    <button className='bg-white text-black p-4 px-12 text-xl rounded-lg hover:opacity-75'>Play </button>
    
   
    <button className='mx-2 bg-white text-black p-4  px-12 text-xl rounded-lg hover:opacity-75'>More-Info</button>
</div>


    </div>
  )
}

export default VideoTitle