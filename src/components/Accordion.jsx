"use client";
import react, { useState, useEffect } from "react";
import Link from "next/link";

export default function Accordion({ chapters }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded-lg shadow-sm">
            <button
                type="button"
                aria-expanded={isOpen}
                aria-controls="course-contents"
                className="flex items-center justify-between w-full p-4 font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-xl md:text-2xl font-semibold">
                    {isOpen ? "Hide" : "Show"} Course Contents
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-6 h-6 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </button>
            
            {isOpen && (
                <div 
                    id="course-contents"
                    className="border-t"
                >
                    <ul className="blue_scrollbar max-h-[400px] overflow-y-auto p-4 space-y-3 dark:bg-gray-900">
                        {chapters.map((chapter, index) => (
                            <li
                                key={index}
                                className="transition-all duration-200 hover:translate-x-1"
                            >
                                <Link 
                                    href={`${chapter.slug}/`}
                                    className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
                                >
                                    <h2 className="text-lg md:text-xl font-medium">
                                        {chapter.title}
                                    </h2>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
