import Image from "next/image";
import Card from "@/components/Card";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";

export default async function Home() {
    const session = await getServerSession(authOptions);
    return (
        <div className="dark:bg-gray-800 dark:text-white w-screen flex items-center justify-center flex-col">
            {/* Hero section starts here   */}
            <div className="w-screen text-center my-14 mx-10 px-10 space-y-3">
                <h1 className=" font-bold text-3xl md:text-[40px]">
                    Welcome to{" "}
                    <span className="text-indigo-500">DailyLearn</span> <br />
                    Learn Marketing |
                </h1>
                {/*JSON.stringify(session)*/}
                <p className="text-center text-gray-500 md:text-xl">
                    Confused on which course to take? I have got you covered.
                    Browse courses and find out the best course for you. Its
                    free! Learning Hub is my attempt to teach basics and those
                    course to people in short time which took me ages to learn.
                </p>
                <div className="pt-5 dark:text-white my-5 flex items-center justify-center space-x-1.5">
                    <button className="font-semibold text-base bg-black text-white rounded px-3 py-2">
                        Free Courses
                    </button>
                    <button className="font-semibold text-base bg-gray-400 text-black rounded px-3 py-2">
                        Explore Blogs
                    </button>
                </div>
            </div>
            {/* Hero section Ends here   */}

            {/* Recommended Courses starts here   */}
            <div className="w-screen my-3 mx-10 flex items-center justify-between flex-col">
                <h1 className="text-center w-screen font-bold text-3xl">
                    Recommended Courses
                </h1>
                <div className="my-12 md:px-4  w-screen flex flex-wrap items-center justify-center flex-col md:flex-row md:flex-wrap gap-8 space-y-8 md:space-y-0">
                    {/* course cards starts from here */}
                    <div className="dark:bg-gray-700 pb-2 overflow-auto h-auto w-9/12 max-w-[360px] shadow shadow-md rounded-xl">
                        <div className="object-fill text-center h-40 border bg-amber-400">
                            image
                        </div>
                        <div className="px-5 space-y-1.5 py-2">
                            <p>FREE COURSE</p>
                            <h3>Marketing Subject</h3>
                            <p>
                                Python is one of the most demanded programming
                                languages in the job market. Surprisingly, it is
                                equally easy to learn and master Python. Let's
                                commit our 100 days of code to python!
                            </p>
                            <button className="bg-indigo-600 text-white p-2 rounded rounded-full">
                                {" "}
                                Start Course{" "}
                            </button>
                        </div>
                    </div>

                    <div className="dark:bg-gray-700 pb-2 overflow-auto h-auto w-9/12 max-w-[360px] shadow shadow-md rounded-xl">
                        <div className="object-fill text-center h-40 border bg-amber-400">
                            image
                        </div>
                        <div className="px-5 space-y-1.5 py-2">
                            <p>FREE COURSE</p>
                            <h3>Marketing Subject</h3>
                            <p>
                                Python is one of the most demanded programming
                                languages in the job market. Surprisingly, it is
                                equally easy to learn and master Python. Let's
                                commit our 100 days of code to python!
                            </p>
                            <button className="bg-indigo-600 text-white p-2 rounded rounded-full">
                                {" "}
                                Start Course{" "}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Recommended Courses Ends here   */}
        </div>
    );
}
