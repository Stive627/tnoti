import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function HeadCalendar({curMonth, currYear, handleNext, handlePrevious, handleSelect, arr}) {
    const bluecolor = 'rgba(22, 124, 255, 1)'
    const darkcolor = 'rgba(67, 67, 67, 1)'
    const [show, setShow] = useState(false)
  return (
    <div className=' relative '>
    <div className=' w-full py-1 my-1 flex justify-between'>
        <div className=' flex flex-row text-[18px]'>
            <div><button  onClick={()=> handlePrevious()}><ArrowBackIosNewIcon style={{color:bluecolor}}/></button></div>
            <div className=' w-24'><p className=' text-center' style={{color:bluecolor, fontWeight:'bold'}}>{ curMonth}</p></div>
            <div><button   onClick={()=> handleNext()}><ArrowForwardIosIcon style={{color:bluecolor}}/></button></div>
        </div>
        <div >
            <button onClick={(e)=> {e.stopPropagation(); setShow(!show)}} style={{color:darkcolor}} className='text-[18px] cursor-pointer'>{currYear}</button>
        </div>
    </div>
{ show && <div onClick={()=>setShow(!show)} className = 'absolute w-full'>
            <div className=' float-right'>
            <div className='w-full flex flex-col divide-y divide-blue-400  border '>
                {arr.map((elt, indx) => <button onClick = {(e) => {e.stopPropagation(); handleSelect(indx); setShow(!show);}} key={indx} className={`text-[18px] py-1 px-2 w-24  ${parseInt(elt) === parseInt(currYear) ? 'bg-blue-500 text-white' : 'bg-white'}`}>{elt}</button>)}
            </div>
            </div>
          </div>}
      </div>

  )
}

export default HeadCalendar