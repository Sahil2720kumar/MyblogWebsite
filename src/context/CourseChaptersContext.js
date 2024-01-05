"use client";
import react, { useState, createContext, useEffect } from "react";

export const CourseChaptersContext = createContext([]);

export default function CourseChaptersContextProvider() {
    const [courseChapters, setCourseChapters] = useState([]);

    return (
        <CourseChaptersContext.Provider
            value={{ courseChapters, setCourseChapters }}
        >
            {children}
        </CourseChaptersContext.Provider>
    );
}
