import React, { createContext, useContext, useState } from 'react'
export const TasksC = createContext(undefined)
export function TaskProvider({children}){
    const [tasks, setTask] = useState([])
    const takenDates = ['I will try to find all the single taken day. I just want to know the future form of my data.']
    return(
        <TasksC.Provider value={{tasks, handleTask:(value) => setTask([...tasks, value]), takenDates}}>
            {children}
        </TasksC.Provider>
    )
}

export const useTasks = () => useContext(TasksC) 