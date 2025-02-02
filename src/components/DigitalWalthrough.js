import React, { useState } from 'react'
import color from '../color'
import { useNavigate } from 'react-router-dom'
import NewTask from '../WalkThrough/NewTask'
import SearchUI from '../WalkThrough/SearchUI'
import WeatherUI from '../WalkThrough/WeatherUI'
import TodayUI from '../WalkThrough/TodayUI'
import ProgressUI from '../WalkThrough/ProgressUI'
import CalendarUI from '../WalkThrough/CalendarUI'

const MainUI = () => {
    const colorApp = color()
    const navigate = useNavigate()
    return(
      <div className=' w-full h-full flex justify-center items-center '>
      <div className=' border p-4 w-1/3 ' style={{borderColor:colorApp.blurborder}}>
            <h2 className=' text-center'>Would you like a digital walkthrough?</h2>
            <div className=' flex flex-row justify-between gap-3'>
                <button onClick={() => navigate('/home')} className=' border p-3' style={{borderColor:colorApp.blurborder}}>I'm good</button>
                <button className=' border p-3' style={{borderColor:colorApp.blurborder, backgroundColor:colorApp.blue, color:'white'}}>Yes</button>
            </div>
      </div>
  </div>
    )
  }

function DigitalWalthrough() {
    const navigate = useNavigate()
    const [indx, setIndx] = useState(0)
    const handleNext = () => setIndx(indx + 1)
    const handleBack = () => setIndx(indx - 1)
    switch (indx) {
      case 1:
        return  <NewTask handleBack={handleBack} handleNext={handleNext}/>
      case 2:
        return  <SearchUI handleBack={handleBack} handleNext={handleNext}/>
      case 3:
        return  <WeatherUI handleBack={handleBack} handleNext={handleNext}/>
      case 4:
        return  <TodayUI handleBack={handleBack} handleNext={handleNext}/>
      case 5:
        return  <ProgressUI handleBack={handleBack} handleNext={handleNext}/>
      case 6:
        return  <CalendarUI handleBack={handleBack} handleNext={() => navigate('/home')}/>
      default:
        return  <MainUI/>
    }
}

export default DigitalWalthrough