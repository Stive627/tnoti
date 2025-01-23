import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import color from '../color';
import Pie from './Pie';
import usePercentage from '../hooks/usePercentage';
import getTime from '../logic/getTime';

function SingleTask({title, hour, minute}) {
    const colorApp = color()
    const time = String(hour) + ':' + String(minute)
    const percentage = usePercentage(getTime(hour,minute))
  return (
    <div className=' w-full  flex justify-between'>
        <div className = 'flex flex-row gap-4 items-center'>
            <button style={''?{borderColor:colorApp.blue, backgroundColor:'white'}:{borderColor:colorApp.orange, backgroundColor:colorApp.blue}} className=' p-2 border'><CheckIcon className=' text-white' style={{fontSize:'24px'}}/></button>
            <p className=' text-[21px]'>{title}</p>
        </div>
        <div className=' flex flex-row gap-4'>
            <p className=' text-[21px]'>{time}</p>
            <Pie percentage = {percentage} colour={'white'}/>
        </div>
    </div>
  )
}

export default SingleTask