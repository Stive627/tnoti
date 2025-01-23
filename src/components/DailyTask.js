import React from 'react'
import { useTasks } from '../hooks/TaskContext'

function DailyTask() {
    const {tasks} = useTasks()
    const title = 'Daily Task' + (tasks.tasks.length > 1 ? 's':'')
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

export default DailyTask