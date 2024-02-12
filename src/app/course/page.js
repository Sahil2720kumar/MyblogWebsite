import react from "react";
import CardContainer from "@/components/CardContainer";
import Card from "@/components/Card";
import { getAllCourses } from "@/services/cmsServices";


export const metadata = {
    title: "Courses",
    description:"Embark on a journey of knowledge with DailyLearn's curated list of courses. Explore diverse subjects, expertly crafted content, and enrich your learning experience. Unlock new skills and possibilities on our comprehensive course page."
};

export const revalidate = 120; // revalidate the data at most every 2 min

export default async function Course() {
    const blog = false;
    const courses = await getAllCourses();
    //console.log(courses);
    return (
        <div className="bg-gray-50 dark:text-white dark:bg-gray-800">
            <div className="py-5">
                <h1 className="dark:text-white font-semibold text-center text-indigo-600 text-4xl md:text-5xl">
                    Free Courses
                </h1>
                <div className="md:flex md:items-center md:flex-col md:justify-center">
                    <div className=" my-4 flex items-center justify-center md:flex-row  md:flex-wrap flex-col space-y-5 p-3 px-6 space-y-2 md:space-y-0 md:gap-8">
                        {courses.map((course, index) => (
                            <Card
                                key={index}
                                cardContent={course}
                                buttonContent={
                                    blog ? "Read More" : "Start Course"
                                }
                                blog={blog}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
