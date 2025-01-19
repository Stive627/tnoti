import React from 'react'
import color from '../color'

function DigitalWalthrough() {
    const colorApp = color()
  return (
    <div className=' absolute w-full h-full'>
        <div className=' w-full h-full flex justify-center items-center '>
        <div className=' border p-4 w-1/3 ' style={{borderColor:colorApp.blurborder}}>
            <h2 className=' text-center'>Would you like a digital walkthrough?</h2>
            <div className=' flex flex-row justify-between gap-3'>
                <button className=' border p-3' style={{borderColor:colorApp.blurborder}}>I'm good</button>
                <button className=' border p-3' style={{borderColor:colorApp.blurborder, backgroundColor:colorApp.blue, color:'white'}}>Yes</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default DigitalWalthrough