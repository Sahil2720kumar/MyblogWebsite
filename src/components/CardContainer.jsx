"use client"
import react,{useState,useEffect} from "react"
import Card from "@/components/Card"
import axios from "axios"
import PuffLoader from "react-spinners/PuffLoader";


export default function CardContainer({blog}){
  const [courses,setCourses]=useState([])
  const [page,setPage]=useState(1)
  const [isLoading,setIsLoading]=useState(true)
  const [extraLoading,setExtraLoading]=useState(false)
  
  const handleInfiniteScroll=()=>{
    const cards_containerHeight=document.getElementById("cards_container")
   // console.log("window.innerHeight: "+window.innerHeight)
   // console.log("scrollTop: "+document.documentElement.scrollTop)
   // console.log("offsetHeight: "+cards_containerHeight.offsetHeight)
   // console.log("offsetHeight: "+document.documentElement.scrollHeight)
    if (window?.innerHeight+document?.documentElement?.scrollTop+1 >= cards_containerHeight?.offsetHeight) {
      setPage((prev)=>prev+1)
      setExtraLoading(true)
    }
    
    
  }
  const getCourse=async()=>{
    try {
      const res=await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page={page}`)
      const data=res.data
      setIsLoading(false)
      setExtraLoading(false)
      setCourses((prev)=>[...prev,...data])
      //console.log("courses useState: ",courses)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    console.log("start...")
    getCourse()
  },[page])
  
  useEffect(()=>{
    console.log("useEffect called..")
    window.addEventListener("scroll", handleInfiniteScroll)
    return ()=> window.removeEventListener("scroll",handleInfiniteScroll)
  },[])
  return (
    <div className="md:flex md:items-center md:flex-col md:justify-center">
    <div id="cards_container" className=" my-4 flex items-center justify-center md:flex-row  md:flex-wrap flex-col space-y-5 p-3 px-6 space-y-2 md:space-y-0 md:gap-8">
     {isLoading? 
        <div className="h-[280px] flex items-center justify-center"><PuffLoader color="#3f6ff5" /></div>
        :
        courses.map((currentVal,index)=>{
          return <Card key={index} cardContent={currentVal} buttonContent={blog?"Read More":"Start Course"} blog={blog} />
        })
      }
      
   </div>
   {extraLoading? 
        <div className="my-4 md:block h-[280px] flex md:flex-col items-center justify-center"><PuffLoader color="#3f6ff5" /></div>
        :
        ""
      }
   </div>
  )
}