import React,{useState} from 'react'
import Connexion from '../components/Connexion'
import TextInput from '../components/TextInput'
import Password from '../components/Password'
import Button from '../components/Button'
import color from '../color'
import { useNavigate } from 'react-router-dom'
import SocialMedia from '../components/SocialMedia'
import AppleIcon from '@mui/icons-material/Apple';
import google from '../../public/google.png'

function Registration({emailPhone, password, rePassword, handleEmailPhone, handlePassword, handleRePassword}) {
  const colorApp = color()
  const navigate = useNavigate()
    const [verify, setVerify] = useState(true)
    const valid = password === rePassword
    const handleVerifyPassword = () =>{
      const condition = /\d/.test(password) && /[A-Z]/.test(password) && password.length > 6 
      return setVerify(condition)
    }
    const handleVerifyRePassword = () => setVerify(valid)
  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <Connexion>
        <h3>Let’s register to continue</h3>
        <form onSubmit={(e)=>handleSubmit(e)} className='w-full flex flex-col gap-2 '>
        <TextInput value={emailPhone} placeholder={'Email or phone number'} handleChange = {(value) => handleEmailPhone(value)}/>
        <Password handleVerify={handleVerifyPassword} value={password} placeholder={'Password'} handlePassword={(value) => handlePassword(value)}/>
        <Password handleVerify={handleVerifyRePassword} value={rePassword} placeholder={'Re-Enter your password'} handlePassword={(value) => handleRePassword(value)}/>
        <p style={verify ? {color:colorApp.grey} : {color:'rgba(214, 16, 16, 1)'}}>The password will contain more than 6 characters, Capital letter, number and have to match.</p>
        <div className=' my-2 flex justify-center'><Button value={'Create your account'} type='submit'/></div>
        </form>
        <p className=' my-2 text-center'>Already have an account? <button onClick={()=>navigate('/login')} className=' border border-none bg-white underline' style={{color: colorApp.orange}}>Login here </button></p>
        <SocialMedia logo={google} value={'Apple'}/>
        <SocialMedia logo={AppleIcon} value={'Google'}/>
    </Connexion>
  )
}

export default Registration