import { useEffect, useState } from "react";
import getTime from "../logic/getTime";

export default function usePercentage(time){
    const seconds = time.hour * 3600 + time.minute * 60 
    const [percentage, setPercentage] = useState(seconds? 100/seconds : 100)
    useEffect(() => {
            if(seconds){ 
            var intervalId = setInterval(() => {
                setPercentage(p => p + 100/seconds)
                console.log(percentage)
            }, 1000);
            }
            console.log()
        return () => clearInterval(intervalId)
    },[percentage, seconds])

    return percentage
}