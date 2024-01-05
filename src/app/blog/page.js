import react from "react"
import CardContainer from "@/components/CardContainer"

export default function Blog(){
  return (
    <div className="bg-gray-50 dark:text-white dark:bg-gray-800">
      <div  className="py-5">
        <h1 className="dark:text-white  md:text-5xl font-semibold text-center text-indigo-600 text-4xl">Our Blogs</h1>
        <CardContainer blog={true} />
      </div>
    </div>
  )
}