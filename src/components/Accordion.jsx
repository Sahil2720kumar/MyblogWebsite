"use client";
import react, { useState, useEffect } from "react";
import Link from "next/link";

export default function Accordion({ chapters }) {
    const [collapse, setCollapse] = useState(false);
    return (
        <div>
            <h2 id="accordion-collapse-heading-1">
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-2 font-medium rtl:text-right text-gray-700  focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-2"
                    onClick={() =>
                        collapse ? setCollapse(false) : setCollapse(true)
                    }
                >
                    <span className="">
                        {collapse ? "Hide" : "Show"} Course Contents
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        />
                    </svg>
                </button>
            </h2>
            {collapse && (
                <div className="">
                    <ul className="blue_scrollbar h-[250px]  pl-2 overflow-y-scroll  pt-2 space-y-2 dark:bg-gray-900">
                        {chapters.map((chapter, index) => (
                            <li
                                key={index}
                                className="p-2 max-h-[50px] rounded shadow-md shadow-gray-300 dark:shadow-gray-700"
                            >
                                <Link href={`${chapter.slug}/`}>
                                    {" "}
                                    {chapter.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
