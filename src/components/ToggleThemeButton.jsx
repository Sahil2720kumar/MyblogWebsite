"use client"
import react,{useContext,useState,useEffect} from "react"
import {ThemeContext} from "@/context/ThemeContext"
 

export default function ToggleThemeButton() {
  const {theme,setTheme}=useContext(ThemeContext)
  // console.log(localStorage.getItem("theme"))
  const toggleTheme=()=>{
    const htmlClasses=document?.querySelector("html").classList
    if(localStorage.theme==="dark"){
      localStorage.setItem("theme","light")
      htmlClasses.remove("dark")
      setTheme("light")
    }else{
      localStorage.setItem("theme","dark")
      htmlClasses.add("dark")
      setTheme("dark")
    }
  }
  
  return (
    <div onClick={toggleTheme} className={`border border-white w-12 h-6 rounded rounded-full  relative p-1 flex items-center ${theme=="dark"?"bg-white":"bg-indigo-600"}`}>
      <div className={`absolute w-5 h-5  rounded rounded-full text-black ${theme=="dark"?"bg-indigo-600 right-0.5" :"bg-white left-0.5 "}`}></div>
    </div>
  )
}