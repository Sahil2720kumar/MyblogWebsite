import react from "react"
import CardContainer from "@/components/CardContainer"
import Accordion from "@/components/Accordion"
import CourseTabs from "@/components/CourseTabs"

export default function CourseName({params,searchParams}){
  const {coursename} =params
  return (
    <div className="dark:text-white dark:bg-gray-800">
      <div  className="p-3 ">
        <div className="min-h-[200px] bg-amber-400">
          {/*Image*/}
        </div>
        <div className="">
          {/* accordion-collapse  */}
            <Accordion />
          {/* End accordion-collapse  */}
          {/* tabs  */}
            <CourseTabs topicTitle={coursename} />
          {/* End  tabs  */}
        </div>
      </div>
    </div>
  )
}