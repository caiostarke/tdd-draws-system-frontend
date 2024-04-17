import React from 'react'
import LikesComponent from './LikesComponent'

export default function DrawCard({image_url, drawName, drawBody, likes}) {
  return (
    <div className='px-5 py-4 mt-5 rounded-lg shadow-2xl max-w bg-slate-100'>
      <img src={image_url} />

       <LikesComponent likes={likes} liked={true} />
        
      <h1 className='mt-5 mb-5 text-xl font-bold'> { drawName }</h1>
      <p>{ drawBody } </p>
    </div>
  )
}
