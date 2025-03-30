"use client"
import React, { useContext, useEffect } from "react"
import { ThemeContext } from "@/context/ThemeContext"

export default function ToggleThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    if (typeof window === "undefined") return

    const htmlClasses = document.documentElement.classList
    const newTheme = theme === "dark" ? "light" : "dark"
    
    localStorage.setItem("theme", newTheme)
    htmlClasses.toggle("dark")
    setTheme(newTheme)
  }
  
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`
        relative flex h-7 w-14 cursor-pointer items-center rounded-full
        border-2 border-transparent transition-colors duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
        ${theme === "dark" ? "bg-indigo-600" : "bg-gray-200"}
      `}
    >
      <span className="sr-only">Toggle theme</span>
      <div
        className={`
          ${theme === "dark" ? "translate-x-7" : "translate-x-0"}
          pointer-events-none inline-block h-6 w-6 transform rounded-full
          bg-white shadow-lg ring-0 transition duration-200 ease-in-out
        `}
      />
    </button>
  )
}