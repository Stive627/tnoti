import React from 'react'

function Month({month, r1, r2, r3, r4, r5, r6=undefined, handleClick}) {
    const title = ['S','M','T','W','T','F','S']
    const yearMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const date = new Date()
    const day = date.getDate()
    const charMonth =  new Intl.DateTimeFormat('fr-FR', {month:'2-digit'}).format(new Date())
    const currentMonth = (m) => parseInt(charMonth) === yearMonths.indexOf(m) + 1
    const currentday = (value) => Number(value) === day
    const dt = charMonth+'/'+String(day)+'/2025'
    const DayUI = ({d, m}) => <button onClick={() => handleClick(dt)} className={`${currentday(d) && currentMonth(m) && ' text-white bg-black border-black'} ${currentday(d) && !currentMonth(m) &&'bg-gray-300'}  border rounded-full cursor-pointer ${d && 'p-2'}`}>{d}</button>
    console.log(currentMonth('03'))
  return (
    <table className=' w-full border' style={{borderColor:'rgba(204, 204, 204, 1)'}}>
        <tbody>

        <tr>
            {title.map((elt, indx) => <th key={indx}>{elt}</th>)}
        </tr>
        <tr>
            {r1.map((elt, indx) => <td key={indx}><DayUI d={elt} m={month}/></td>)}
        </tr>
        <tr>
            {r2.map((elt, indx) => <td key={indx}><DayUI d={elt} m={month}/></td>)}
        </tr>
        <tr>
            {r3.map((elt, indx) => <td key={indx}><DayUI d={elt} m={month}/></td>)}
        </tr>
        <tr>
            {r4.map((elt, indx) => <td key={indx}><DayUI d={elt} m={month}/></td>)}
        </tr>
        <tr>
            {r5.map((elt, indx) => <td key={indx}><DayUI d={elt} m={month}/></td>)}
        </tr>
        {
        r6 &&   <tr>
                    {r6.map((elt, indx) => <td key={indx}><DayUI d={elt} m={month}/></td>)}
                </tr>
        }
        </tbody>
    </table>
  )
}

export default Month