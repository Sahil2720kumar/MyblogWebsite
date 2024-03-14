"use client";
import react, { useContext, useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const CourseTabs = ({ topicTitle, topicContent }) => {
    console.log(topicTitle);
    const [tabShow, setTabShow] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className=''>
            <nav className='scrollbar-hide  my-2 overflow-scroll'>
                <ul className=' list-none flex items-center space-x-5'>
                    <li
                        onClick={() => setTabShow(1)}
                        className={`${
                            tabShow === 1 ? " border-b-2 border-indigo-600" : ""
                        } text-[18px] md:text-3xl dark:text-white font-semibold text-gray-700`}
                    >
                        Overview
                    </li>
                    <li
                        onClick={() => setTabShow(2)}
                        className={`${
                            tabShow === 2 ? " border-b-2 border-indigo-600" : ""
                        } text-[18px] md:text-2xl dark:text-white font-semibold text-gray-700`}
                    >
                        Q&A
                    </li>
                    <li
                        onClick={() => setTabShow(3)}
                        className={`${
                            tabShow === 3 ? "border-b-2 border-indigo-600" : ""
                        } text-[18px] md:text-2xl dark:text-white font-semibold text-gray-700`}
                    >
                        Downloads
                    </li>
                    <li
                        onClick={() => setTabShow(4)}
                        className={`${
                            tabShow === 4 ? "border-b-2 border-indigo-600" : ""
                        } text-[18px] md:text-2xl dark:text-white font-semibold text-gray-700`}
                    >
                        Announcements
                    </li>
                </ul>
            </nav>
            <div
                id='tabs_container'
                className='min-h-screen px-1  overflow-hidden flex justify-center'
            >
                <div
                    className={`${
                        tabShow === 1 ? "block" : "hidden"
                    }    dark:text-white  w-screen `}
                >
                    {isLoading ? (
                        <div className='h-[280px] flex items-center justify-center'>
                            <PuffLoader color='#3f6ff5' />
                        </div>
                    ) : (
                        <div className='px-3 md:mt-3'>
                            <h1 className='text-2xl font-bold my-3 md:text-4xl'>
                                {topicContent.title}
                            </h1>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: topicContent.content.html
                                }}
                                className='p-2 mt-3  text-[15px] text-gray-900 dark:text-stone-100 md:text-2xl'
                            ></div>
                        </div>
                    )}
                </div>
                <div
                    className={`${
                        tabShow === 2 ? "block" : "hidden"
                    }   w-screen `}
                >
                    {isLoading ? (
                        <div className='h-[280px] flex items-center justify-center'>
                            <PuffLoader color='#3f6ff5' />
                        </div>
                    ) : (
                        <>
                            <h2 className='text-2xl font-bold my-3 md:text-4xl'>
                                {` ${topicContent.title} Question and answers `.trim()}
                            </h2>
                            <p className='text-[15px] md:text-2xl text-gray-900 p-2 dark:text-stone-100'>
                                Not Available
                            </p>
                        </>
                    )}
                </div>
                <div
                    className={`${
                        tabShow === 3 ? "block" : "hidden"
                    }  h-screen overflow-scroll w-screen `}
                >
                    {isLoading ? (
                        <div className='h-[280px] flex items-center justify-center'>
                            <PuffLoader color='#3f6ff5' />
                        </div>
                    ) : (
                        <>
                            <h2 className='text-2xl my-3 font-bold md:text-4xl '>
                                {` ${topicContent.title} Downloads`.trim()}
                            </h2>
                            <ol className='ps-3 text-xl mt-3 space-y-1 list-decimal list-inside dark:text-stone-100'>
                                <li className='space-x-3 my-6 md:text-2xl'>
                                    <span className=''> Notes om </span>
                                    <button className='text-[15px] p-1 px-2 rounded bg-indigo-500 text-white'>
                                        Download
                                    </button>
                                </li>
                            </ol>
                        </>
                    )}
                </div>
                <div
                    className={`${
                        tabShow === 4 ? "block" : "hidden"
                    } h-screen   overflow-scroll w-screen `}
                >
                    {isLoading ? (
                        <div className='h-[280px] flex items-center justify-center'>
                            <PuffLoader color='#3f6ff5' />
                        </div>
                    ) : (
                        <>
                            <h2 className='text-2xl my-3 font-bold md:text-4xl'>
                                {` ${topicContent.title} Announcements`.trim()}
                            </h2>
                            <p className='te md:text-2xlxt-xl text-gray-900 p-2 dark:text-stone-100'>
                                No Announcements as of now!
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CourseTabs;
