import React, { useState } from 'react'
import TextInput from './TextInput'
import ToogleList from './ToogleList'
import color from '../color'
import AButton from './AButton'

function AddTask({handleClose}) {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [startTime, setStartTime] = useState({hour:'00', minute:'00'})
    const [endTime, setEndTime] = useState({hour:'00', minute:'00'})
    const [showTitle, setShowTitle] = useState(false)
    const common = ['Breakfast', 'Visit', 'Study', 'Gym']
    const [s, Ss] = useState({sh:false, sm:false, eh:false, em:false})
    const handleSelectTitle = () => {
        setShowTitle(!showTitle)
    }
    const colorApp = color()
  return (
    <div style={{backgroundColor:'rgba(217, 217, 217, 1)'}} className=' absolute top-0 w-screen h-screen'>
        <div className=' w-full h-full flex items-center justify-center p-4'>
            <div className=' w-60'>
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
            </div>

            {/* wheater */}

            <div  className=' flex flex-row-reverse gap-4'>
                <AButton value={'Add Task'} style={{border:'1px', borderColor:'rgba(227, 100, 20, 1)', color:'white', backgroundColor:colorApp.orange}}/>
                <AButton style={{border:'1px', color:colorApp.grey, borderColor:colorApp.blurgrey}} value={'Cancel'} handleClick={handleClose}/>
            </div>
        </div>
    </div>
  )
}

export default AddTask