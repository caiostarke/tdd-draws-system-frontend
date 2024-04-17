import React from 'react'

export default function NavBar() {
  return (
        <header className='mb-1.5 px-16 flex'>
            <nav className='flex justify-between w-full'>
                <div className='flex items-center'>   
                    <a href="/" className='text-xl font-semibold'>Draw <span className='text-red-500'>Lovers</span></a>
                </div>

                <div>
                    <nav className='flex gap-5 '>
                        <a href="#" className='px-3 py-5'>Home</a>
                        <a href="#" className='px-3 py-5'>My Draws</a>
                        <a href="#" className='px-3 py-5'>Liked Draws</a>
                    </nav>
                </div>
            </nav>
        </header>
  )
}
