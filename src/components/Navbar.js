import React, { useState } from 'react'
import Avatar from './Avatar'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Icon from './Icon';
import color from '../color';
import Overlayer from './Overlayer';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Navbar({Nnotification = 0}) {
  const colorApp = color()
  const [show, setShow] = useState(false)
  return (
    <div className=''>
        <div className=' w-full py-3 px-2 flex flex-row-reverse gap-3'>
            <div className = ' flex flex-row gap-1 items-center'>
               <Avatar/>
               <button className=' hover:bg-gray-300' onClick={()=>setShow(!show)}>{show ?<KeyboardArrowDownIcon   style={{fontSize:'25px', color:colorApp.grey}}/> : <KeyboardArrowUpIcon style={{fontSize:'25px', color:colorApp.grey}}/>}</button>
            </div>
            <Icon badge={Nnotification} icon = {<NotificationsIcon style={{fontSize:'40px', color:colorApp.grey}} />}/>
        </div>
        {show && 
        <Overlayer handleOutside={()=>setShow(!show)}>

        </Overlayer>}
    </div>
  )
}

export default Navbar