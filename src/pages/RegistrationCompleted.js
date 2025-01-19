import React, { useState } from 'react'
import NextConnexion from '../components/NextConnexion'
import Password from '../components/Password'
import color from '../color'

function RegistrationCompleted({handlePassword, handleRePassword, password, rePassword}) {
  const [verify, setVerify] = useState(true)
  const colorApp = color()
  const valid = password === rePassword
  const handleVerifyPassword = () =>{
    const condition = /\d/.test(password) && /[A-Z]/.test(password) && password.length > 6 
    return setVerify(condition)
  }
  const handleVerifyRePassword = () => setVerify(valid)
  return (
    <NextConnexion>
    <h2 >Let’s register to continue</h2>
    <Password  handleVerify={handleVerifyPassword} value={password} handlePassword={handlePassword}  placeholder={'Password'} />
    <Password handlePassword={handleRePassword} handleVerify={handleVerifyRePassword} value={rePassword}  placeholder={'Re-Enter your password'}/>
    <p style={verify ? {color:colorApp.grey} : {color:'rgba(214, 16, 16, 1)'}}>The password will contain more than 6 characters, Capital letter, number and have to match.</p>
    <button disabled ={!valid} className=' text-center w-1/3 text-white' style={{backgroundColor:colorApp.blue}}>Complete</button>
    </NextConnexion>
  )
}

export default RegistrationCompleted