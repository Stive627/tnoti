import React from 'react'
import { useTasks } from '../hooks/TaskContext'
import { useProfile } from '../hooks/ProfileContext'
import getGreeting from '../logic/getGreeting'

function Meteo() {
    const {date} = useTasks()
    const getDay = () => new Intl.DateTimeFormat('en-US', {'weekday':'long'}).format(date)
    const getDate = () => new Intl.DateTimeFormat('en-US', {'dateStyle':'full'}).format(date)
    const getHour = () => new Intl.DateTimeFormat('fr-FR', {'hour':'2-digit'}).format(date).slice(0,2)
    const {profile} = useProfile()
    const username = profile.username
    const usernameFinal = username.split(' ')[0]
    const greeting = getGreeting(getHour())

  return (
    <>
        <div className = ' flex justify-between'>
            <div>
                <h2>{getDay()}</h2>
                <p style={{fontSize:'21px'}}>{getDate()}</p>
            </div>
            <div className=' w-32 h-32 bg-gray-400'></div>
        </div>
        <p className=' text-center my-5'>{greeting} {usernameFinal}, How are you today? </p>
    </>
  )
}

export default Meteo