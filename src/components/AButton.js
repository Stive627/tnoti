import React from 'react'

function AButton({value,style,handleClick, disabled = false }) {
  return (
    <button disabled = {disabled} onClick={() =>handleClick()} className=' w-8' style={style}>{value}</button>
  )
}

export default AButton