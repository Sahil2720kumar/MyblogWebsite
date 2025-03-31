import react from "react";
import CardContainer from "@/components/CardContainer";
import Card from "@/components/Card";
import { getAllCourses } from "@/services/cmsServices";


export const metadata = {
    title: "Courses",
    description:"Embark on a journey of knowledge with DailyLearn's curated list of courses. Explore diverse subjects, expertly crafted content, and enrich your learning experience. Unlock new skills and possibilities on our comprehensive course page."
};

export const revalidate = 60; // revalidate the data at most every 1 min

export default async function Course() {
    const blog = false;
    const courses = await getAllCourses();
    
    return (
        <div className="min-h-screen bg-gray-50 dark:text-white dark:bg-gray-800">
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-8">
                    DailyLearn Free Courses
                </h1>
                
                {courses.length === 0 ? (
                    <div className="text-center text-gray-600 dark:text-gray-300">
                        No courses available at the moment.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {courses.map((course, index) => (
                            <Card
                                key={course.id || index}
                                cardContent={course}
                                buttonContent="Start Course"
                                blog={false}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
