import HireForm from "@/components/HireForm"


export default function HireContact() {
  
  return (
    <div className=" bg-gray-50 px-6 py-9 dark:bg-gray-700" >
      <div className="flex flex-col items-center justify-center ">
        <h1 className="dark:text-white font-semibold text-gray-800  text-3xl md:text-5xl">We are hiring!</h1>
        <p className="dark:text-stone-200 text-center py-3 text-gray-700 md:text-[17px]">
          We are looking for freelance Developers, Subtitle writers, Content writers and Video editors. If you think you are fit for the role. Submit the form. Make sure you have a valid email so we can contact you back in case your application gets selected. Cheers!
        </p>
        <div className="max-w-[600px] md:w-[600px] p-5 py-6 rounded-lg bg-gray-100 dark:bg-gray-800 md:p-8">
          <p className="text-gray-600 dark:text-gray-400" >India Only</p>
          <p className="text-gray-800 font-medium dark:text-white text-xl" >Apply Now!</p>
          {/* form start here  */}
            <HireForm/>
          {/* form End here  */}
        </div>
      </div>
    </div>
  )
}
