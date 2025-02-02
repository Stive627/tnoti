import React from 'react'
import '../App.css'
import color from '../color'

function Box({title, content, hide = false, handleNext, handleBack, NextName = 'Next'}) {
  const colorApp = color()
  return (
    <div className=' relative w-24 border' style={{borderColor:'rgba(204, 204, 204, 1)'}}>
      <div className=' absolute tooltip' ></div>
      <div className=' absolute border p-4'>
          <p className=' font-bold text-[19px]'>{title}</p>
          <p className=' text-[16px]' style={colorApp.grey}>{content}</p>
          <div className=' w-full flex flex-row gap-3'>
              <button onClick={()=>handleNext()} className=' nextbutton'>{NextName}</button>
              {!hide && <button onClick={() => handleBack()} className=' backbutton'>Back</button>}
          </div>
      </div>
    </div>
  )
}

export default Box