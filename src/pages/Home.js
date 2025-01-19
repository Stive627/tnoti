import React from 'react'
import Sidebar from '../components/Sidebar'

function Home() {
  return (
    <div className=' grid grid-cols-9 w-screen h-screen'>
        <Sidebar/>
        <div className=' col-span-6'></div>
    </div>
  )
}

export default Home