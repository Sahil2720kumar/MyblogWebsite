"use client"
import react,{useContext,useState,useEffect} from "react"
import PuffLoader from "react-spinners/PuffLoader";

export default function Search({searchParams}){
  const {query}=searchParams
  const [tabShow,setTabShow]=useState(1)
  const [isLoading,setIsLoading]=useState(true)
  
  
  
  return (
    <div className=" flex flex-col items-center justify-center dark:text-white  py-5 h-screen dark:bg-gray-800">
        <h1 className=" text-center font-semibold text-2xl md:text-[36px]">Results for query: <span className="text-indigo-600">{query}</span></h1>
        <nav className="my-5 ">
          <ul className=" list-none flex justify-center space-x-5 ">
            <li onClick={()=>setTabShow(1)} className={`${tabShow===1?"border-b-2 md:border-b-4 border-indigo-600":""}  dark:text-white font-semibold text-gray-700 md:text-xl `}>Course (1)</li>
            <li onClick={()=>setTabShow(2)} className={`${tabShow===2?"border-b-2 md:border-b-4 border-indigo-600":""} dark:text-white font-semibold text-gray-700 md:text-xl `}>Blog (10)</li>
            <li onClick={()=>setTabShow(3)} className={`${tabShow===3?"border-b-2 md:border-b-4 border-indigo-600":""} dark:text-white font-semibold text-gray-700 md:text-xl`}>Youtube (10)</li>
          </ul>
        </nav>
        <div id="tabs_container" className="h-full max-w-[900px]  overflow-hidden flex justify-center">
          <div  className={`${tabShow===1?"block":"hidden"} bg-gray-50   dark:bg-gray-600 dark:shadow-stone-50 dark:text-white overflow-scroll w-screen rounded rounded-xl shadow shadow-md h-4/5`}>
            <h3 className="dark:text-white overflow-scroll  text-white font-semibold bg-indigo-500 p-2 px-3">IN Course ({isLoading?"please wait for a second !":"45 RESULTS FOUND"})</h3>
            {isLoading?
              <div className="h-[280px] flex items-center justify-center"><PuffLoader color="#3f6ff5" /></div>
            : <>
              <p className="hover:bg-indigo-200 dark:text-white hover:dark:text-gray-700 scrollbar-hide whitespace-nowrap border-b-[1px] text-gray-800 overflow-scroll  p-3 block">loram issun C++ Maps C++ Maps C++ Maps C++ Maps C++ Maps</p>
              <p className="hover:bg-indigo-200 dark:text-white scrollbar-hide whitespace-nowrap border-b-[1px] text-gray-800 overflow-scroll  p-3 block">loram issun C++ Maps C++ Maps C++ Maps C++ Maps C++ Maps</p>
              <p className="hover:bg-indigo-200 dark:text-white scrollbar-hide whitespace-nowrap border-b-[1px] text-gray-800 overflow-scroll  p-3 block">loram issun C++ Maps C++ Maps C++ Maps C++ Maps C++ Maps</p>
              </>
            }
          </div>
          <div  className={`${tabShow===2?"block":"hidden"} dark:bg-gray-600 bg-gray-50  overflow-scroll w-screen rounded rounded-xl shadow shadow-md h-4/5`}>
            <h3 className=" overflow-scroll dark:text-white text-white font-semibold bg-indigo-500 p-2 px-3">IN Blog (5 RESULTS FOUND)</h3>
            <p className="hover:bg-indigo-200 dark:text-white scrollbar-hide whitespace-nowrap border-b-[1px] text-gray-800 overflow-scroll  p-3 block">loram issun C++ Maps C++ Maps C++ Maps C++ Maps C++ Maps</p>
            <p className="hover:bg-indigo-200 dark:text-white scrollbar-hide whitespace-nowrap border-b-[1px] text-gray-800 overflow-scroll  p-3 block">loram issun C++ Maps C++ Maps C++ Maps C++ Maps C++ Maps</p>
            <p className="hover:bg-indigo-200 dark:text-white scrollbar-hide whitespace-nowrap border-b-[1px] text-gray-800 overflow-scroll  p-3 block">loram issun C++ Maps C++ Maps C++ Maps C++ Maps C++ Maps</p>
          </div>
          <div  className={`${tabShow===3?"block":"hidden"} dark:bg-gray-600 bg-gray-50   overflow-scroll w-screen rounded rounded-xl shadow shadow-md h-4/5`}>
            {/*<h3 className=" overflow-scroll dark:text-white text-white font-semibold bg-indigo-500 p-2 px-3">IN Youtube (4 RESULTS FOUND)</h3>
            <p className="hover:bg-indigo-200 dark:text-white scrollbar-hide whitespace-nowrap border-b-[1px] text-gray-800 overflow-scroll  p-3 block">loram issun C++ Maps C++ Maps C++ Maps C++ Maps C++ Maps</p>
            <p className="hover:bg-indigo-200 dark:text-white scrollbar-hide whitespace-nowrap border-b-[1px] text-gray-800 overflow-scroll  p-3 block">loram issun C++ Maps C++ Maps C++ Maps C++ Maps C++ Maps</p>
            <p className="hover:bg-indigo-200 dark:text-white scrollbar-hide whitespace-nowrap border-b-[1px] text-gray-800 overflow-scroll  p-3 block">loram issun C++ Maps C++ Maps C++ Maps C++ Maps C++ Maps</p>*/}
             <div className="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12 flex items-center justify-center flex-col h-full">
               <svg className="mx-auto mb-4 w-10 h-10 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z"/></svg>
               <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">Under Maintenance</h1>
               <p className="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">Our Enterprise administrators are performing scheduled maintenance.</p>
            </div>
          </div>
        </div>
    </div>
  )
}