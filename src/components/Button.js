import React from 'react'
import color from '../color'

function Button({disabled=false, value, type='button'}) {
    const colorApp = color()
  return (
    <button    disabled={disabled} type={type} className=' py-2 px-4' style={{color:colorApp.blue}}>{value}</button>
  )
}

export default Button