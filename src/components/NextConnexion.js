import React from 'react'
import tnotilogo from '../../public/tnotilogo.png'


function NextConnexion({children}) {
  return (
    <div className=' w-screen h-screen  flex justify-center'>
        <div className=' w-1/3 '>
        <div className=' flex justify-center'><img alt='Logo TNOTI' src={tnotilogo} className=' w-1/3 '/></div>
        <div className=' my-4'>{children}</div>
        </div>
    </div>
  )
}

export default NextConnexion