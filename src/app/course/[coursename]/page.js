import react from "react";
import CardContainer from "@/components/CardContainer";
import Accordion from "@/components/Accordion";
import CourseTabs from "@/components/CourseTabs";
import Link from "next/link";
import { GetParticularCourseChapters } from "@/services/cmsServices";
import Image from "next/image";

// or Dynamic metadata
export async function generateMetadata({ params }) {
    const { coursename } = params;
    const data = await GetParticularCourseChapters(coursename);

    return {
        title: data.title,
        describtion: data.describtion,
        openGraph: {
            images: [{ url: data.banner.url }]
        }
    };
}

export default async function CourseName({ params, searchParams }) {
    const { coursename } = params;
    const data = await GetParticularCourseChapters(coursename);
    const chapters = data.chapters;
    console.log(chapters);
    return (
        <div className='min-h-screen  dark:text-white dark:bg-gray-800 max-w-screen-lg mx-auto'>
            <div className='p-3 '>
                <div className='flex items-center justify-center overflow-hidden  max-h-[200px] md:max-h-[400px]'>
                    <Image
                        src={data.banner.url}
                        width={0}
                        height={0}
                        sizes='100vw'
                        className='inline px-0.5 w-full overflow-hidden  h-full object-contain'
                        alt='Picture of the course'
                    />
                </div>
                <div className=' '>
                    <h1 className='dark:text-white mt-5 md:text-5xl font-semibold  text-indigo-600 text-2xl'>
                        Chapters List
                    </h1>
                    <div>
                        <ul className=' pl-2 pt-2 space-y-2'>
                            {chapters.map((chapter, index) => (
                                <li
                                    key={index}
                                    className='p-2 rounded shadow-sm shadow-gray-300 dark:shadow-gray-700'
                                >
                                    <Link
                                        href={`${coursename}/${chapter.slug}/`}
                                    >
                                        {" "}
                                        {chapter.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
