import React from 'react'
import logo from '../../public/tnotilogo.png'
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import color from '../color';

function Sidebar() {
    const colorApp = color()
  return (
    <div className=' col-span-3 p-3'>
        <div className=' fixed w-full'>
            <div className=' w-1/3'> <img alt='logo TNoti' src={logo} className=' object-cover'/> </div>
            <div className=' flex justify-between'>
                <button className=' hover:bg-gray-300 p-2'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm240-80h400v-480H400v480Zm-80 0v-480H160v480h160Zm-160 0v-480 480Zm160 0h80-80Zm0-480h80-80Z"/></svg></button>
                <button style={{backgroundColor:colorApp.blue}} className=' rounded-full p-1'><AddIcon/></button>
            </div>
        </div>
            <div className=' w-full hover:bg-gray-100'><button style={{color:colorApp.grey}} className=''><SearchIcon style={{color:colorApp.grey}}/> {' '} Search</button></div>
            <div className=' w-full hover:bg-gray-100'><button style={{color:colorApp.grey}} className=''><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgba(67, 67, 67, 1)"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Zm0-80h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41Zm220-240Z"/></svg> {' '} Weather</button></div>   
        <div className=' fixed bottom-0 left-0 w-full ' >
        <hr className=' mx-3 my-2'/>
        <button style={{color:colorApp.grey}} className=' p-2 w-full'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgba(67, 67, 67, 1)"><path d="m140-220-60-60 300-300 160 160 284-320 56 56-340 384-160-160-240 240Z"/></svg>{' '} Progress Dashboard</button>
        </div>
    </div>
  )
}

export default Sidebar