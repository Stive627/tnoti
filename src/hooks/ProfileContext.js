import React, { createContext, useContext, useState } from 'react'

export const ProfileContext = createContext(undefined)

export function ProfileProvider({children}){
    const [profile, setProfile] = useState(undefined)
    return(
        <ProfileContext.Provider value={{profile, handleProfile:(value) => setProfile(value)}}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = ()=> useContext(ProfileContext)