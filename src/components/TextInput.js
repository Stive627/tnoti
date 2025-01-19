import React from 'react'
import color from '../color'

function TextInput({value, handleChange, placeholder}) {
    const colorApp = color()
  return (
    <div className=' w-full'>
        <input className=' py-1 px-3' style={{color:colorApp.grey}} placeholder={placeholder} value={value} onChange={(e) => handleChange(e.target.value)}/>
    </div>
  )
}

export default TextInput