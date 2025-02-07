import React from 'react'
import { useTasks } from '../../hooks/TaskContext'
import color from '../../color'

function Month({month, cm, handleClick, currentMonth, currentYear}) {
    const {takenDates} = useTasks()
    const title = ['S','M','T','W','T','F','S']
    const darkcolor = 'rgba(67, 67, 67, 1)'
    const date = new Date()
    const day = date.getDate()
    const currentday = (value) => Number(value) === day
    const dt = (day) => String(currentYear) + '-' + String(currentMonth).padStart(2, '0') + '-' + String(day) 
    const Square = ({d}) => <div className='  flex justify-center items-center'><div><button onClick={()=> handleClick(dt(d))} style={{color:(currentday(d) && cm )?'white':'black', backgroundColor:(currentday(d) && cm )?'rgba(22, 124, 255, 1)': takenDates.includes(dt(d)) ? color().orange: 'white'}} className={`${currentday(d) && !cm &&' border'} rounded-full  w-8 h-8  m-2  flex items-center justify-center`}><p>{d}</p></button></div></div>
  return (
    <>   
      <div className = 'flex justify-between'>{title.map((elt, indx) => <p className='  text-[15px] w-full text-center' style={{color:darkcolor}} key={indx}>{elt}</p>)}</div> 
      <div className = 'border border-gray-200 grid grid-cols-7 divide-y divide-x   divide-gray-200'>
          {month.map((elt, indx) => <Square key={indx} d={elt}/>)}
      </div>
    </>
  )
}

export default Month