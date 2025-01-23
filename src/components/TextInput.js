import React from 'react'
import color from '../color'

function TextInput({value, handleChange, placeholder, type = 'text', handleFocus = () => {}, handleOnBlur = () =>{}}) {
    const colorApp = color()
  return (
    <div className=' w-full'>
        <input  type={type} onFocus={() => handleFocus()} onBlur={() => handleOnBlur()} className=' py-1 px-3 w-full' style={{color:colorApp.grey, outlineColor:colorApp.blue}} placeholder={placeholder} value={value} onChange={(e) => handleChange(e.target.value)}/>
    </div>
  )
}

export default TextInput