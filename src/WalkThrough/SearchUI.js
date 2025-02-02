import React from 'react'
import Box from './Box'

function SearchUI({handleBack, handleNext}) {
  return (
    <div className=' absolute'>
        <div className=' flex flex-row items-center gap-3 '>
            <div className=' bg-white w-10 h-4'></div>
            <Box title={'Search your tasks'} content={'Quickly find tasks with keywords or filters.'} handleBack={handleBack} handleNext={handleNext}/>
        </div>
    </div>
  )
}

export default SearchUI