import React from 'react'
import BlogPage from '../Components/BlogPage'

export default function Blog() {
  return (
    <div className=''>
      <div className=' bg-black text-center text-white px-2 py-20'>
      <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-3">
           Blog
        </h1>
      </div>
      <div className='max-w-7xl mx-auto'><BlogPage/></div>

    </div>
  )
}
