import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import '../App.css'
function Transition({show, handleToogle}) {
  return (
    <>
    <div onAnimationEnd={()=>handleToogle()} className={`absolute -right-44 ${show  && ' verificationanim'}`}>
        <div className=' p-4 border border-black '>
            <p>New code sent <CheckCircleOutlineIcon className=' text-white bg-black rounded-full'/></p>
        </div>
    </div>
    </>
  )
}

export default Transition