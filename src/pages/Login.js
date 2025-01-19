import React, {useState} from 'react'
import Connexion from '../components/Connexion'
import { useNavigate } from 'react-router-dom'
import color from '../color'
import TextInput from '../components/TextInput'
import Password from '../components/Password'
import Button from '../components/Button'
import SocialMedia from '../components/SocialMedia'
import AppleIcon from '@mui/icons-material/Apple';
import google from '../../public/google.png'

function Login() {
    const [emailPhone, setEmailPhone] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const colorApp = color()
    const navigate = useNavigate()
    function handleSubmit(e){
      e.preventDefault()
    }
  return (
    <Connexion>
        <h3>Login</h3>
        <form onSubmit={(e)=>handleSubmit(e)} className='w-full flex flex-col gap-2 '>
        <TextInput value={emailPhone} placeholder={'Email or phone number'} handleChange={(value)=>setEmailPhone(value)}/>
        <Password value={password} placeholder={'Password'} handlePassword={(value)=>setPassword(value)}/>
        <div className=' my-2 flex justify-center'><Button value={'Create your account'} type='submit'/></div>
        </form>
        <p className=' my-2 text-center'>Don’t have an account? <button onClick={()=>navigate('/login')} className=' border border-none bg-white underline' style={{color: colorApp.orange}}>Sign Up </button></p>
        <SocialMedia logo={google} value={'Apple'}/>
        <SocialMedia logo={AppleIcon} value={'Google'}/>
    </Connexion>
  )
}

export default Login