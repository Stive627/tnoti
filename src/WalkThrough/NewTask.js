import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import color from '../color';
import Box from './Box';

function NewTask({handleNext, handleBack}) {
  const colorApp = color()
  return (
    <div className=' absolute'>
      <div className=' flex flex-row gap-3 items-center'>
        <div className=' border border-white rounded-full bg-white p-5'>
            <div style={{backgroundColor:colorApp.blue}} className=' p-2'><AddIcon className=' text-[18px] text-white'/> </div>
        </div>
        <Box hide = {true} title = {'Add new tasks'} content={'Easily create and add new tasks.'} handleBack={handleBack} handleNext={handleNext}/>
      </div>
    </div>
  )
}

export default NewTask