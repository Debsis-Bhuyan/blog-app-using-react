import React from 'react'
import Banner from '../Components/Banner'
import BlogPage from '../Components/BlogPage'

export default function Home() {
  return (
    <div>
      <Banner/>
      <div className='max-w-7xl mx-auto'>
        <BlogPage/>
      </div>
    </div>
  )
}
