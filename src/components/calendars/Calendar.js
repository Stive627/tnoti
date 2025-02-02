import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Month from './Month'
import data from './data'

function Calendar({handleClick}) {
    const charMonth = new Intl.DateTimeFormat('fr-FR', {month:'2-digit'}).format(new Date())
    const digit_month = parseInt(charMonth)
    const [mo, setMo] = useState(digit_month)
    const nextMonth = () => setMo(mo < 3 ? mo + 1 : mo)
    const previousMonth = () => setMo(mo > 1 ? mo - 1 : mo)
    const indx = `0${mo}`
    console.log(indx)
    const yearMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return (
    <div >
            <div className='flex justify-center items-center h-screen'>
              <div className=' border w-3/4 lg:w-1/2' style={{borderColor:'rgba(204, 204, 204, 1)'}}>
                <div className=' flex justify-between '>
                  <div className=' flex flex-row items-center gap-3 py-1'>
                    <button onClick={() => previousMonth()} className=' p-1 border rounded-full bg-gray-200 text-[16px]'><ArrowBackIosNewIcon className=' text-gray-600' /></button>
                    <p>{yearMonths[indx -1]}</p>
                    <button onClick={() => nextMonth()} className=' p-1 border rounded-full bg-gray-200 text-[16px]'><ArrowForwardIosIcon className=' text-gray-600'/></button>
                  </div>
                  <div className=' text-[18px] float-right' style={{backgroundColor:'rgba(204, 204, 204, 1)'}} >2025</div>
                </div>
                <Month month={data[indx].month} r1={data[indx].r1} r2={data[indx].r2} r3={data[indx].r3} r4={data[indx].r4} r5={data[indx].r5} r6={data[indx].r6} handleClick={handleClick}/>
              </div>
            </div>
    </div>
  )
}

export default Calendar