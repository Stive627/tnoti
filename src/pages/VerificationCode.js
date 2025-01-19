import React, {useState} from 'react'
import NextConnexion from '../components/NextConnexion'
import Code from '../components/Code'
import color from '../color'
import Transition from '../components/Transition'

function VerificationCode({email, code}) {
  const colorApp = color()
  const [show, setShow] = useState(false)
  return (
    <NextConnexion>
        <p>Enter the 06-digit code sent to <b>{email}</b></p>
        <Code />
        <p className=' my-5'>Generate new code <button onClick={()=>setShow(true)} style={{color:colorApp.orange}} className=' border border-none '></button></p>
        <Transition show={show} handleToogle = {() =>setShow(false)}/>
    </NextConnexion>
  )
}

export default VerificationCode