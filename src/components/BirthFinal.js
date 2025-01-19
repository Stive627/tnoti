import React, {useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Elt from './Elt'
import color from '../color';

function BirthFinal({value, list, handleValue, title}){
    const [show, setShow] = useState(false)
    const colorApp = color()
  return (
    <div className=' relative  w-full '>
        <p className={` text-[21px]`} style={{color:colorApp.grey}}>{title}</p> 
        <button onClick={() => setShow(!show)} className=' border border-gray-100  outline-1  text-lg'>{value}  {'  '} <KeyboardArrowDownIcon/> </button>
{show && <div onMouseDown = { () => setShow(!show)} className = ' absolute top-0 w-screen h-screen'>
            <div onMouseDown={(e)=> e.stopPropagation()} className=' relative top-7 left-4 h-40 w-full overflow-y-scroll'>
              <div className = ' flex flex-col  '>
                  {list.map((elt, indx) => <Elt key={indx} value={elt} handleValue={handleValue} check={elt === value}/>)} 
              </div>
            </div>
         </div>}
    </div> 
  )
}

export default BirthFinal