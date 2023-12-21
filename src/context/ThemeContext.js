"use client"
import react,{useState,createContext,useEffect} from "react"

export const ThemeContext=createContext()
const getThemeLocalStorage=()=>{
  if(typeof window!=="undefined"){
    const htmlClasses=document.querySelector("html").classList
    if(localStorage.theme==="dark"){
      htmlClasses.add("dark")
    }
    const localTheme=localStorage.getItem("theme")
    console.log("localTheme: ",localTheme)
    return localTheme || "light"
  }
}

export function ThemeContextProvider({children}){
  const [mount,setMount]=useState(false)
  const [theme,setTheme]=useState(()=>{
      return getThemeLocalStorage()
  })
  //console.log("ThemeContext: "+theme)
  return <ThemeContext.Provider value={{theme,setTheme}}>{children}</ThemeContext.Provider>
}