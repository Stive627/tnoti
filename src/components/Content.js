import React from 'react'
import Navbar from './Navbar'
import HomeContent from '../hooks/HomeContent'

function Content() {
  return (
    <div className=' col-span-6'>
        <Navbar/>
        <HomeContent/>
    </div>

  )
}

export default Content