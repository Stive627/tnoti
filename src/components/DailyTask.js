import React, { useState } from 'react'
import { useTasks } from '../hooks/TaskContext'
import AddIcon from '@mui/icons-material/Add';
import color from '../color'

function DailyTask() {
    const {tasks} = useTasks()
    const [showAdd, setShowAdd] = useState(false)
    const title = 'Daily Task' + (tasks.tasks.length > 1 ? 's':'')
    const colorApp = color()
  if(tasks.length > 0){
    return (
      <div className=' w-full h-full flex justify-center'>
          <div className=' w-4/6'>
          <h1>{title}</h1>
          <hr className = ' my-2'/>
          <div className=' w-full flex flex-col gap-2'></div>
          </div>
      </div>
    )
  }
  return(
    <div className = 'w-full h-full flex justify-center'>
      <div className = ' w-4/6'>
        <p onClick={() =>{}} style={{color:colorApp.blue, fontSize:'18px', textAlign:'center'}} className=' my-4'><AddIcon/> {' '}Let’s add tasks to get started</p>
        <div className=' w-full px-4'><img alt = 'no tasks' src=''/></div>
        {showAdd && ''}
      </div>
    </div>
  )
}

export default DailyTask