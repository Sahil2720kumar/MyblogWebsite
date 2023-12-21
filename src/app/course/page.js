import react from "react"
import CardContainer from "@/components/CardContainer"

export default function Course(){
  return (
    <div className="bg-gray-50 dark:text-white dark:bg-gray-800">
      <div  className="py-5">
        <h1 className="dark:text-white font-semibold text-center text-indigo-600 text-4xl md:text-5xl">Free Courses</h1>
            <CardContainer/>
        
      </div>
    </div>
  )
}