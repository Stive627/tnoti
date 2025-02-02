import React from 'react'
import IntervalWeather from './IntervalWeather'

function ListWeather({data, selectedHour}) {
  return (
    <div className = ' w-full h-full flex flex-col divide-y gap-2'>
      {data.map((elt, indx) => <IntervalWeather key={indx} temperature={elt.main.temp - 273.15} hour={elt.dt_txt.split(' ')[1].slice(0, 5)} selectedHour = {selectedHour}/>)}
    </div>
  )
}

export default ListWeather