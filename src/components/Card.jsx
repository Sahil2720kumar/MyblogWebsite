import Image from 'next/image'
import react from "react"

export default function Card({cardContent,buttonContent,blog}){
  //console.log(cardContent,buttonContent)
  return (
     <div id="" className="max-w-[360px] dark:bg-gray-700 card min-h-[490px] pb-3 shadow shadow-md overflow-hidden rounded rounded-xl ">
        <div className="h-[170px] bg-rose-100">
        </div>
        <div className="py-1 px-6 h-full">
           {blog?<>
             <span>
                <span className="mr-0.5  rounded-full min-h-[10px] bg-indigo-300" >
                  <Image src="/vercel.svg"
                    width={20}
                    height={20}
                    className="inline px-0.5 " 
                    alt="Picture of the author">
                  </Image>
                </span> 
                sahil kumar sah</span>
                <span className="text-[15px] px-3 dark:text-gray-300 text-gray-600" >• November 20, 2023</span>
              </>:
            <span className="block text-gray-800 dark:text-stone-300 ">FREE COURSE</span>
           }
           
           <p className="text-xl my-2">{cardContent.title}</p>
           <p className="min-h-[120px] overflow-hidden text-ellipsis my-3 text-[17px] dark:text-white text-gray-700">{cardContent.body}</p>
           <button className="text-[17px] font-semibold bg-indigo-600 transition hover:bg-indigo-700 my-3 text-white px-3 py-1 rounded rounded-full"> {buttonContent} </button>
        </div>
     </div>
  )
}