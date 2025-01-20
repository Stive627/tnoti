import React from 'react'
import color from '../color';


function Icon({badge, icon, handleClick = () => {}}) {
    const colorApp = color()
  return (
    <button onClick={()=>handleClick()} className=' relative'>
        {icon}
        <div style={{backgroundColor:colorApp.orange}} className=' border rounded-full text-white p-2 font-bold w-4 h-4  absolute flex justify-center items-center bottom-5  left-5'><p className=' text-sm'>2</p></div>
    </button>
  )
}

export default Icon