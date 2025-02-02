import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Box from './Box';
function CalendarUI({handleBack, handleNext}) {
  return (
    <div className=' absolute'>
        <div className=' flex flex-row items-center gap-4'>
        <Box first={true} title={'Calendar and List mode'} content={'Switch to calendar or list modes for easy display of tasks.'} handleBack={handleBack} handleNext={handleNext} NextName='Finish'/>
            <div className=' p-6 bg-white border border-white rounded-full'>
                <div style={{backgroundColor:'rgba(61, 93, 242, 1)'}} className=' p-2'>
                    <CalendarMonthIcon className=' text-white text-[25px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CalendarUI