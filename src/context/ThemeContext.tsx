import { createContext, useContext, useEffect, useState } from "react";

type Theme='light' | 'dark';
interface ThemeContextProps{
    theme:Theme; 
    toggleTheme:() => void;
}

const ThemeContext=createContext<ThemeContextProps>({
    theme:'dark',
    toggleTheme:()=> { },
})

export const ThemeProvider:React.FC<{ children: React.ReactNode}> = ({ children }) =>{
    const[theme,setTheme] = useState<Theme>(()=>{
        const saved =localStorage.getItem('theme')

        return (saved as Theme) || 'dark';
    })


useEffect(()=>{
    localStorage.setItem('theme',theme)
    if(theme === 'dark'){
        document.documentElement.classList.add('dark')
    }else{
        document.documentElement.classList.remove('dark')
    }
    
},[theme])

const toggleTheme=()=>{
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark') )
}

return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
)
}
export const useTheme = () => useContext(ThemeContext);