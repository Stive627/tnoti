import React from 'react'
import Avatar from './Avatar'
import { useProfile } from '../logic/ProfileContext'
import Person2Icon from '@mui/icons-material/Person2';
import color from '../color';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function Menu() {
    const {profile} = useProfile()
    const colorApp = color()
    const navigate = useNavigate()
  return (
    <div onMouseDown={(e) => e.stopPropagation()} className=' relative top-16 right-16'>
        <div className=' w-32 p-3 flex flex-col divide-y gap-2 border' style={{borderColor:colorApp.grey}}>
            <p style={{color:colorApp.grey}} className=' w-full'  onClick={()=>{}}><Avatar/> {'  '} <b>{profile.username}</b> </p>
            <p style={{color:colorApp.grey}} className=' w-full ' onClick={()=> navigate('/profile')}><Person2Icon/>{'  '}Profile</p>
            <div style={{color:colorApp.grey}} className=' w-full flex justify-between'><p className=' w-full ' onClick={()=>{}}> {'  '} Theme</p> <button><KeyboardArrowRightIcon/></button></div>
            <p style={{color:'rgba(155, 18, 18, 1)'}} className=' w-full ' onClick={()=>{}}> <LogoutIcon/>{'  '} Logout</p>
        </div>
    </div>
  )
}

export default Menu