import React from 'react'

function Listelt({name, value}) {
  return (
    <div className=' w-full flex justify-between'>
        <p className=' font-semibold '>{name}</p>
        <p className=''>{value}</p>
    </div>
  )
}

export default Listelt