import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import DigitalWalthrough from '../components/DigitalWalthrough'

function Home() {
  const [walkthrough, setWalkthrough] = useState(false)
  useEffect(() => {
    fetch('').then((value) => value.json()).then((value) => setWalkthrough(value.walkthroughdigital))
  },[walkthrough])
  return (
    <>
      <div className = 'grid grid-cols-9 w-screen h-screen'>
        <Sidebar/>
        <Content/>
      </div>
      {walkthrough && <div className=' absolute w-full h-full' style={{backgroundColor:'rgba(217, 217, 217, 1)'}}><DigitalWalthrough/></div>}
    </>
  )
}

export default Home