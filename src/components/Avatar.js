import React, { useState } from 'react'
import color from '../color'
import { useProfile } from '../hooks/ProfileContext'

function Avatar({handleProfile=()=>{}}) {
  const {profile} = useProfile()
  const colorApp = color()
  const letter = profile.username[0]
  if(profile.img){
    return <button onClick={()=>handleProfile()} className = ' w-20 h-20'><img className = ' object-cover rounded-full' src={profile.img} alt='Profile'/></button>
  }
  return <button onClick={()=>handleProfile()} className = ' w-14 h-14 text-white p-3 ' style={{backgroundColor:colorApp.blue}}>{letter} </button>
}

export default Avatar