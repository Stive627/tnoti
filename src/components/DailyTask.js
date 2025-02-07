import React, { useState } from 'react'
import { useTasks } from '../hooks/TaskContext'
import AddIcon from '@mui/icons-material/Add';
import color from '../color'
import no_task from '../../public/no_task.png'
import AddTask from './AddTask';
import SingleTask from './SingleTask';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Calendar from './calendars/Calendar';


function DailyTask() {
    const {tasks} = useTasks()
    const [showAdd, setShowAdd] = useState(false)
    const [showCalendar, setShowCalendar] = useState(false)
    const title = 'Daily Task' + (tasks.tasks.length > 1 ? 's':'')
    const colorApp = color()
    var dat = undefined
    function handleClick(selectedDate){
      dat = selectedDate
      setShowAdd(true)
      setShowCalendar(false)
    }
  if(tasks.length > 0){
    return (
      <div className=' w-full h-full flex justify-center'>
          <div className=' w-4/6'>
            <h1>{title}</h1>
            <hr className = ' my-2'/>
            <div className=' w-full flex flex-col gap-2'> 
              {tasks.map((elt, index) =><SingleTask key={index} taskinfo = {elt}/>)}
            </div>
          </div>
          <button onClick={() => setShowCalendar(true)} className=' absolute bottom-7 right-7  p-3 ' style={{backgroundColor:colorApp.blue}}><CalendarMonthIcon className=' text-white'/></button>
          {showCalendar && <Calendar handleClick={handleClick}/>}
      </div>
    )
  }
  return(
    <div className = 'w-full h-full flex justify-center'>
      <div className = ' w-4/6'>
        <p onClick={() =>setShowAdd(true)} style={{color:colorApp.blue, fontSize:'18px', textAlign:'center'}} className=' my-4'><AddIcon/> {' '}Let’s add tasks to get started</p>
        <div className=' w-full px-4'><img alt = 'no tasks' src={no_task}/></div>
        {showAdd && <div className=' absolute w-screen h-screen'><AddTask initialDate={dat} handleClose={()=> setShowAdd(false)}/></div>}
      </div>
    </div>
  )
}

export default DailyTask