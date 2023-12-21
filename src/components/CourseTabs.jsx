"use client"
import react,{useContext,useState,useEffect} from "react"
import PuffLoader from "react-spinners/PuffLoader";



const CourseTabs = ({topicTitle}) => {  console.log(topicTitle)
  const [tabShow,setTabShow]=useState(1)
  const [isLoading,setIsLoading]=useState(false)
  
  return (
    <div className="" >
        <nav className="scrollbar-hide  my-2 overflow-scroll">
          <ul className=" list-none flex items-center space-x-5">
            <li onClick={()=>setTabShow(1)} className={`${tabShow===1?" border-b-2 border-indigo-600":""} text-[18px] dark:text-white font-semibold text-gray-700`}>Overview</li>
            <li onClick={()=>setTabShow(2)} className={`${tabShow===2?" border-b-2 border-indigo-600":""} text-[18px] dark:text-white font-semibold text-gray-700`}>Q&A</li>
            <li onClick={()=>setTabShow(3)} className={`${tabShow===3?"border-b-2 border-indigo-600":""} text-[18px] dark:text-white font-semibold text-gray-700`}>Downloads</li>
            <li onClick={()=>setTabShow(4)} className={`${tabShow===4?"border-b-2 border-indigo-600":""} text-[18px] dark:text-white font-semibold text-gray-700`}>Announcements</li>
          </ul>
        </nav>
        <div id="tabs_container" className="px-1  overflow-hidden flex justify-center">
          <div  className={`${tabShow===1?"block":"hidden"}    dark:text-white  w-screen `}>
            {isLoading?
              <div className="h-[280px] flex items-center justify-center"><PuffLoader color="#3f6ff5" /></div>
            : <>
                <h1 className="text-2xl font-bold my-3 ">{topicTitle} Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi #1</h1>
                <p className="p-2  text-xl text-gray-900 dark:text-stone-100" >
                  Programming is a way to talk to computers. A language like Hindi, English or Bengali can be used to talk to a human but for computers we need straightforward instructions.
                  Computer is Dumb!
                  When was the last time you ordered some cereal and got DVDs of Serial?
                  Programming is the act of constructing a program, a set of precise instructions telling a computer what to do.
                  What is EcmaScript?
                  ECMAScript is a standard on which JavaScript is based!
                  It was created to ensure that different documents on JavaScript are actually talking about the same language.
                  JavaScript and ECMAScript can almost always be used interchangeably. JavaScript is very literal in what it allows.
                  How to execute JavaScript?
                  JavaScript can be executed right inside one's browser. You can open the JavaScript console and start writing JavaScript there.
                  Another way to execute JavaScript is a runtime like Node.js which can be installed and used to run JavaScript code.
                  Yet another way to execute JavaScript is by inserting it inside
                  Yet another way to execute JavaScript is by inserting it inside
                  Yet another way to execute JavaScript is by inserting it inside
                  Yet another way to execute JavaScript is by inserting it inside
                  Yet another way to execute JavaScript is by inserting it inside
                  Yet another way to execute JavaScript is by inserting it inside
                  Yet another way to execute JavaScript is by inserting it inside
                  Yet another way to execute JavaScript is by inserting it inside
                  Yet another way to execute JavaScript is by inserting it inside
                  Yet another way to execute JavaScript is by inserting it inside
                  Yet another way to execute JavaScript is by inserting it inside
                </p>
              </>
            }
          </div>
          <div  className={`${tabShow===2?"block":"hidden"}   w-screen `}>            
           {isLoading?
              <div className="h-[280px] flex items-center justify-center"><PuffLoader color="#3f6ff5" /></div>
            : <>
                <h1 className="text-2xl font-bold my-3 ">{topicTitle} Question and answers </h1>
                <p className="text-xl text-gray-900 p-2 dark:text-stone-100" >
                  Programming is a way to talk to computers. A language like Hindi, English or Bengali can be used to talk to a human but for computers we need straightforward instructions.
                  Computer is Dumb!
                  When was the last time you ordered some cereal and got DVDs of Serial?
                  Programming is the act of constructing a program, a set of precise instructions telling a computer what to do.
                  What is EcmaScript?
                  ECMAScript is a standard on which JavaScript is based!
                  It was created to ensure that different documents on JavaScript are actually talking about the same language.
                  JavaScript and ECMAScript can almost always be used interchangeably. JavaScript is very literal in what it allows.
                  How to execute JavaScript?
                  JavaScript can be executed right inside one's browser. You can open the JavaScript console and start writing JavaScript there.
                  Another way to execute JavaScript is a runtime like Node.js which can be installed and used to run JavaScript code.
                  Yet another way to execute JavaScript is by inserting it inside
                  Yet another way to execute JavaScript is by inserting it inside
                  Yet another way to execute JavaScript is by inserting it inside
                  Yet another way to execute JavaScript is by inserting it inside
                  Yet another way to execute JavaScript is by inserting it inside
                  Yet another way to execute JavaScript is by inserting it inside
                  Yet another way to execute JavaScript is by inserting it inside
                  Yet another way to execute JavaScript is by inserting it inside
                  Yet another way to execute JavaScript is by inserting it inside
                  Yet another way to execute JavaScript is by inserting it inside
                  Yet another way to execute JavaScript is by inserting it inside
                </p>
              </>
            }
          </div>
          <div  className={`${tabShow===3?"block":"hidden"}  h-screen overflow-scroll w-screen `}>
            {isLoading?
              <div className="h-[280px] flex items-center justify-center"><PuffLoader color="#3f6ff5" /></div>
            : <>
                 <h1 className="text-2xl my-3 font-bold ">{topicTitle} Downloads </h1>
                  <ol className="ps-3 text-xl mt-3 space-y-1 list-decimal list-inside dark:text-stone-100">
                    <li className="space-x-3 my-6">
                        <span className="" > Notes om </span>
                        <button className="text-[15px] p-1 px-2 rounded bg-indigo-500 text-white">Download</button>
                    </li>
                  </ol>
              </>
            }
          </div>
          <div  className={`${tabShow===4?"block":"hidden"} h-screen   overflow-scroll w-screen `}>
            {isLoading?
              <div className="h-[280px] flex items-center justify-center"><PuffLoader color="#3f6ff5" /></div>
            : <>
                 <h1 className="text-2xl my-3 font-bold ">{topicTitle} Announcements </h1>
                  <p className="text-xl text-gray-900 p-2 dark:text-stone-100" >No Announcements as of now!</p>
              </>
            }
          </div>
        </div>
    </div>
  )
}

export default CourseTabs;