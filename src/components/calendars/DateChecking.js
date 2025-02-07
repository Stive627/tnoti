import React, { useState } from 'react'

function DateChecking() {
    function getHTML5DateTimeStringsFromDate(d) {
        let ds = d.getFullYear().toString().padStart(4, '0') + '-' + (d.getMonth()+1).toString().padStart(2, '0') + '-' + d.getDate().toString().padStart(2, '0');
        let ts = d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0') + ':' + d.getSeconds().toString().padStart(2, '0');
        return [ds, ts];
      }
      let d = new Date();
      let dstrings = getHTML5DateTimeStringsFromDate(d);
      console.log(dstrings[0])
    const [date, setDate] = useState('2025-02-09')
    const [time, setTime] = useState('09:54:12')
  return (
    <div className=' h-screen w-screen flex justify-center items-center'>
        <div className=' w-1/2'>
            <input value={date} onChange={(e) => {setDate(e.target.value); console.log(e.target.value)}} type='date' className=' p-2 w-1/5'/>
            <input value={time} onChange={(e)=> {setTime(e.target.value)}}className=' border border-black'/>
        </div>
    </div>
  )
}

export default DateChecking