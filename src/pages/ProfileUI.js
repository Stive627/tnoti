import React from 'react'
import Navbar from '../components/Navbar'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import color from '../color';
import Avatar from '../components/Avatar';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Listelt from '../components/Listelt';
import '../App.css'
import TextInput from '../components/TextInput';
function ProfileUI() {
    const colorApp = color()
  return (
    <div className=' w-screen h-screen '>
        <Navbar/>
        <div className=' mx-7 my-5'>
            <div className=' flex flex-row gap-5'>
                <ArrowBackIosIcon style={{color:colorApp.grey}}/>
                <p className=' font-bold text-[25px]'>Profile</p>
            </div>
            <div className=' w-full h-full flex justify-center items-center'>
                <div style={{borderColor:colorApp.blurborder}} className=' p-8 border'>
                    <div className=' w-full justify-center my-2'>
                        <div className = ' relative'>
                            <Avatar/>
                            <button style={{borderColor:colorApp.blue}} className=' p-2 bg-white absolute border'> <CameraAltIcon/> </button>
                        </div>
                        <div className=' flex flex-col divide-y'>
                            <Listelt name={'Username'} />
                            <Listelt name={'Email'}/>
                            <Listelt name={'Password'}/>
                        </div>
                        <form>
                        <label>Name</label>
                        <TextInput/>
                        <label></label>
                        </form>
                        <button style={{color:colorApp.blue, borderColor:colorApp.blue}} className='ProfileButton my-2 mx-5 border text-[18px] hover:text-white'>Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileUI