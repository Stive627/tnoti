import React from 'react'
import color from '../color'

function SocialMedia({handleClick, value, logo}) {
    const colorApp = color()
  return (
    <button className=' w-full border py-4 px-2 my-2' style={{borderColor: colorApp.blurborder}} onClick={()=>handleClick()}><img alt={`logo ${value}`} src={logo}/>{'  '}Continue with {value}</button>
  )
}

export default SocialMedia