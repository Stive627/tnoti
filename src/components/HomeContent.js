import React from 'react'
import Meteo from './Meteo'
import DailyTask from './DailyTask'

function HomeContent() {

  return (
    <div className=' w-full h-full p-3'>
        <Meteo/>
        <DailyTask/>
    </div>
  )
}

export default HomeContent