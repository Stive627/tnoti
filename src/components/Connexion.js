import React, { useState } from 'react'
import tnotilogo from '../../public/tnotilogo.png'
import color from '../color'
import Privacy from './Privacy'

function Connexion({children}) {
    const [visiblePolicy, setVisiblePolicy] = useState(false)
    const colorApp = color()
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
        <div className=' w-1/3 py-5'>
            <div className=' flex justify-center'>
                <div className=' w-1/3'><img className=' object-cover' alt='logo TNoti' src={tnotilogo}/></div>
            </div>
            <div className=' w-full flex flex-col gap-2'>
                {children}
            </div>
            <div className=' my-1'>
                <p className=' text-[18px] text-center' style={{color:colorApp.grey}}>By continuing, you agree to </p>
                <p className=' text-center'>TNoti’s <span onClick={()=>setVisiblePolicy(!visiblePolicy)} className=' underline'>Terms of Service</span>  and  <span className=' underline'>Privacy Policy</span>.</p>
            </div>
        </div>
        {visiblePolicy && <Privacy handleClose={()=>setVisiblePolicy(!visiblePolicy)}/>}
    </div>
  )
}

export default Connexion