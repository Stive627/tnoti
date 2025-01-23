import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import color from '../color';

function Searchbar({value, handleValue}) {
    const colorApp = color()
  return (
            <div className=' w-1/3  p-4 h-1/2 overflow-x-hidden overflow-y-scroll'>
                <div className=' w-full flex flex-row items-center'>
                    <div className=' p-2 bg-white'><SearchIcon  className=' bg-white '/></div>
                    <input  className=' w-full py-2 outline-none' placeholder='Search any task or navigate to any part of TNoti  '/>
                </div>
                <hr className=' w-full my-2' style={{backgroundColor:colorApp.grey}}/>
            </div>
  )
}

export default Searchbar