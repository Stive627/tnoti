import React, { useState } from 'react'
import color from '../color'

function Birth({title, placeholder, value, handleValue, maxLength}) {
    const [focus, setFocus] = useState(false)
    const handleFocus = () => setFocus(true)
    const handleOnBlur= () => {setFocus(false); handleValue(String(value).length === 1 ? '0'+ String(value) : value)}
    const handleChange = (e) => handleValue(e.target.value > maxLength ? e.target.value.slice(0, maxLength) : e.target.value)
    const className = `p-2 border text-[21px]`
    const colorApp = color()
  return (
        <div>
            <p className={` text-[21px]`} style={focus ? {color:colorApp.blue} : {color:colorApp.grey}}>{title}</p>
            <input onKeyUp={(e) => /[0-9]/.test(e.key)} onFocus={handleFocus} onBlur={handleOnBlur} maxLength={2} style={focus ? {outlineColor:colorApp.blue} : {borderColor:colorApp.blurborder}} type = 'number' className = {className}  value={value} onChange={handleChange} placeholder = {placeholder}/>
        </div>
  )
 }

export default Birth