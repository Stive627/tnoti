import React, { useEffect, useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import color from '../color';

function Password({value, handlePassword, placeholder, handleVerify}) {
    const [type, setType] = useState('password')
    const [check, setCheck] = useState(true)
    const colorApp = color()
  return (
    <div className=' my-1'>
        <div className=' flex justify-center w-full '>
          <div className=' w-full'> <input value={value} placeholder={placeholder} style={{outlineColor:'rgba(61, 93, 242, 1)', color:colorApp.grey}} className=' w-full border border-gray-400 px-2 py-1' type={type}  onChange={(e)=>handlePassword(e.target.value)} onBlur={()=>handleVerify()}/></div>
          <div className=' relative'> <button onClick ={()=>setType(type === 'password' ? 'text' : 'password')} className=' absolute right-1 top-1 cursor-pointer'>{type === 'password' ? <VisibilityIcon/> : <VisibilityOffIcon/>}</button></div>        
        </div>
        {!check && <p className = 'text-red-600'>The password don't match.</p>}
    </div>
  )
}

export default Password