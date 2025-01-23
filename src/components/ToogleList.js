import React from 'react'

function ToogleList({handleSelectTitle, list}) {

  return (
    <div className=' absolute w-full divide-y'>
        <div className = 'w-full'>
            {
                list.map((elt, index) => <p  onClick = {() => handleSelectTitle(elt)}  className=' w-full' key = {index}>{elt}</p>)
            }
        </div>
    </div>
  )
}

export default ToogleList