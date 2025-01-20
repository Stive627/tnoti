import React from 'react'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

function Home() {
  return (
    <div className=' grid grid-cols-9 w-screen h-screen'>
        <Sidebar/>
        <Content/>
    </div>
  )
}

export default Home