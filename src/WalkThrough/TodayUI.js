import React from 'react'
import Box from './Box'
import color from '../color'

function TodayUI({handleBack, handleNext}) {
    const colorApp = color()
  return (
    <div className=' absolute'>
        <div className=' flex flex-row items-center gap-3 '>
            <div className=' bg-white w-10 h-4 pl-9 py-3'><p style={{color:colorApp.blue}}>Today</p></div>
            <Box title={'View tasks day wise'} content={'See and manage tasks organized by day.'} handleBack={handleBack} handleNext={handleNext}/>
        </div>
    </div>
  )
}

export default TodayUI