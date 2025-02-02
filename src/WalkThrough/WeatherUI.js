import React from 'react'
import Box from './Box'

function WeatherUI({handleBack, handleNext}) {
  return (
    <div className=' absolute'>
        <div className=' flex flex-row items-center gap-3 '>
            <div className=' bg-white w-10 h-4'></div>
            <Box title={'View Weather'} content={'Check the weather to plan  your day.'} handleBack={handleBack} handleNext={handleNext}/>
        </div>
    </div>
  )
}

export default WeatherUI