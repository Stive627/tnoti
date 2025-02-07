import React, { useState } from 'react'
import TextInput from './TextInput'
import ToogleList from './ToogleList'
import color from '../color'
import AButton from './AButton'
import { useTasks } from '../hooks/TaskContext'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InfoIcon from '@mui/icons-material/Info';
import Forecast from './Forecast'
import { getHTML5DateTimeStringsFromDate } from '../logic/getHTML5DateTimeStringsFromDate'

function AddTask({handleClose, initialDate = getHTML5DateTimeStringsFromDate(new Date())[0]}) {
    const [title, setTitle] = useState('')
    const [startTime, setStartTime] = useState({hour:'00', minute:'00'})
    const [endTime, setEndTime] = useState({hour:'00', minute:'00'})
    const [showTitle, setShowTitle] = useState(false)
    const [showWeather, setShowWeather] = useState(false)
    const [date, setDate] = useState(initialDate)
    const common = ['Breakfast', 'Visit', 'Study', 'Gym']
    const [s, sS] = useState({sh:false, sm:false, eh:false, em:false})
    const disabled = !title || !date || !startTime.hour || !startTime.minute || !endTime.hour || !endTime.minute
    const colorApp = color()
    const {handleTask} = useTasks()
    const textcolor = disabled ? colorApp.blurborder : colorApp.grey
    function handleClick(){
        try {
            handleTask({title:title, date:date, startTime:{hour:startTime.hour, minute:startTime.minute}, endTime:{hour:endTime.hour, minute:endTime.minute}})
            handleClose()
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <div style={{backgroundColor:'rgba(217, 217, 217, 1)'}} className=' absolute top-0 w-screen h-screen'>
        <div className=' w-full h-full flex items-center justify-center p-4'>
            <div className=' w-60 relative'>
                <h2>Add a new task</h2>
                <div className=' flex flex-col gap-2'>
                    <div className=' relative w-full'>
                        <TextInput placeholder={'Title'} value={title} handleChange={(value) => setTitle(value)} handleFocus={() => setShowTitle(!showTitle)} handleOnBlur={() => setShowTitle(!showTitle)} />
                        {showTitle && <ToogleList list={common} handleSelectTitle={(value)=>{setTitle(value); setShowTitle(!showTitle)}}/>}
                    </div>
                    <TextInput placeholder={'Date'} type='date' handleChange={(value) => setDate(value)}/>
                    <div className=' w-full flex justify-between divide-x-2 divide-gray-400'>
                        <div>
                            <p style={{color:colorApp.grey}}>Start Time</p>
                            <div className=' flex justify-between '>
                                <div className=' relative'>  
                                    <TextInput value={startTime.hour} placeholder={'00'} handleChange={(value) => setStartTime({...startTime, hour:value})}/>
                                    {s.sh && <ToogleList/>}
                                </div>
                                <div className=' relative'>
                                    <TextInput value={startTime.minute} placeholder={'00'} handleChange={(value) =>setStartTime({...startTime, minute:value})}/>
                                    {s.sm && <ToogleList/>}
                                </div>
                            </div>
                        </div>
                        <div> 
                            <p style={{color:colorApp.grey}}>End Time</p>
                            <div className=' flex justify-between'>
                                <div className=' relative'>  
                                    <TextInput value={endTime.hour} handleChange={(value) => setEndTime({...endTime, hour:value})}/>
                                </div>
                                <div className=' relative'>  
                                    <TextInput value={endTime.minute} handleChange={(value) => setEndTime({...endTime, minute:value})}/>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex w-full justify-between'>
                    <p style={{color:textcolor, fontSize:'21px'}}>Weather forecast</p>
                    <button onClick={() => setShowWeather(!showWeather)} style={{color:textcolor, fontSize:'21px'}}><KeyboardArrowDownIcon/></button>
                </div>
                {showWeather && !disabled && <Forecast date={date} selectedHours={{start:startTime.hour, end:endTime.hour}}/>}
                <hr className=' w-full' style={{color:textcolor}}/>
                <p style={{color:colorApp.blurborder}}><InfoIcon/>{' '}You can edit a task later by double-clicking on it</p>
                <div  className=' flex flex-row-reverse gap-4'>
                    <AButton disabled = {!disabled} value = {'Add Task'} style = {{border:'1px', borderColor:'rgba(227, 100, 20, 1)', color:'white', backgroundColor:colorApp.orange}} handleClick={handleClick}/>
                    <AButton style={{border:'1px', color:colorApp.grey, borderColor:colorApp.blurgrey}} value={'Cancel'} handleClick={handleClose}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddTask