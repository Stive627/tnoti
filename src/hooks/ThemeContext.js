import React, { createContext, useContext, useState } from 'react'

export const ThemeCon = createContext(undefined)

export function ThemeProvider({children}){
    const [theme, setTheme] = useState('light')
    return(
        <ThemeCon.Provider value={{theme, handleTheme: ()=>setTheme(theme === 'light' ? 'dark' : 'light')}}>
            {children}
        </ThemeCon.Provider>
    )
}

export const useTheme = () => useContext(ThemeCon)



