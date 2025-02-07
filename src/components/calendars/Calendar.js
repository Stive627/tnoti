import React, { useState } from 'react'
import Month from './Month'
import data from './data'
import HeadCalendar from './HeadCalendar';

function Calendar({handleClick}) {
    const charMonth = new Intl.DateTimeFormat('fr-FR', {month:'2-digit'}).format(new Date())
    const digit_month = parseInt(charMonth)
    const [indx, setIndx] = useState(digit_month -1)
    const calendarSize = data.length
    const prevMonth = () => setIndx(indx <= 0 ? calendarSize -1  : (indx - 1) % calendarSize)
    const nextMonth = () => setIndx( indx > calendarSize -1  ? 1 : (indx + 1) % (calendarSize))
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const years = ['2025', '2026', '2027', '2028','2029','2030']
    const currMonth = months[indx%12]
    const currYear = years[Math.floor(indx/12)]
    const numberYear = Math.floor(data.length/12)
    const handleSelect = (year) => setIndx(12*year + indx%12)
    let arr = []
    for(var i = 0; i < numberYear; i ++){
      arr = [...arr, 2025 + i]
    }
  return (
    <div className='flex justify-center'>
      <div className=' mx-4 '>
        <HeadCalendar curMonth={currMonth} currYear={currYear} handleNext={nextMonth} handlePrevious={prevMonth} handleSelect={handleSelect} arr={arr}/>
        <Month currentYear={currYear} currentMonth={indx%12 === 0 ? 12 : indx%12} handleClick={handleClick} month = {data[indx]} cm={indx +1 % 12 === parseInt(charMonth)}/>
      </div>
    </div>
  )
}

export default Calendar
