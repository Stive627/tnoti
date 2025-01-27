import React from 'react'
import color from '../color'

function Reminder() {
    const colorApp = color()
  return (
    <div style={{backgroundColor:'rgba(204, 204, 204, 0.34)'}} className=' absolute top-0 w-full h-full'>
        <div className=' h-full w-full justify-center items-center'>
            <div className=' w-2/3 bg-white p-4'>
            <h2>Get reminders</h2>
            <hr/>
            <p>Stay organized with our mobile app—download now for
            timely reminders directly to your phone.</p>
            <div className=' flex justify-center my-6'>
                <button style={{backgroundColor:colorApp.blue}} className=' text-white text-[19px] px-3 py-1'>Download TNoti(mobile)</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Reminder