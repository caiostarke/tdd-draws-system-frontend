import React from 'react'

export default function LikesComponent({likes, liked}) {
  return (
    <div className='flex items-center gap-1 mt-5'>
        <p className='text-xs font-semibold'>{likes}</p>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className='cursor-pointer' fill={liked ? 'red' : 'none'} stroke={liked ? 'none' : 'currentColor'} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>    
    </div>
  )
}
