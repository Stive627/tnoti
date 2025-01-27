import React, { useEffect, useState } from 'react'
import fetchN from '../logic/fetchN'
import getWeather from '../logic/getWeather'

var uri = 'https://geolocation-35309290975.us-central1.run.app/'
function Forecast({date}) {
    const [data, setData] = useState(undefined)
    useEffect(() => {
        fetchN(uri,{}, (value) => setData(getWeather(value.list, date)))
    },[data, date])

    switch(typeof data){
        case 'object':
            return <div className = 'w-full py-4 px-2 flex items-center'> </div>
        case 'string':
            return <div className=' w-full py-4 px-2'><p className=' text-center text-[21px]'> {data}</p></div>
        default:
            return <div className=' w-full py-4 px-2'><p className=' text-center text-[21px]'>loading...</p></div>
    }

}

export default Forecast