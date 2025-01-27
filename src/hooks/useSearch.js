import { useEffect, useState } from "react";
import { useTasks } from "./TaskContext";

export default function useSearch(keyword) {
    const [result, setResult] = useState(undefined)
    const {tasks} = useTasks()
    useEffect(() => {
        setResult(tasks.filter(elt => elt.toLowerCase() === keyword.toLowerCase()))
    },[keyword, tasks])

    return result
}