import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Notification() {
  return (
    <div className=' w-full px-7 py-4'>
        <div className=' flex flex-row gap-5'>
            <button ><ArrowBackIosIcon/></button>
            <h2>Notifications</h2>
        </div>
        <div className=' px-7'>
        <button className=' float-right'>Get reminders</button>
        </div>
    </div>
  )
}

export default Notification