import React from 'react'

function Overlayer({children,handleOutside, background = ''}) {
  return (
    <div onMouseDown = {() => handleOutside()} className={`absolute top-0 w-screen h-screen ${background}`}>
        {children}
    </div>
  )
}

export default Overlayer