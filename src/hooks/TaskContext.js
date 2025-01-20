import React, { createContext, useContext, useState } from 'react'
export const TasksC = createContext(undefined)
export function TaskProvider({children}){
    const [tasks, setTask] = useState(undefined)
    return(
        <TasksC.Provider value={{tasks, handleTask:(value)=>setTask(value)}}>
            {children}
        </TasksC.Provider>
    )
}

export const useTasks = () => useContext(TasksC) 