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
        description: data.description,

        openGraph: {
            images: [{ url: data.banner.url }],
            title: data.title,
            description: data.description,
            siteName: "DailyLearn",
            locale: "en_US",
            type: "website"
        }
    };
}

export const revalidate = 60; // revalidate the data at most every 1 min

export default async function CourseName({ params }) {
    const { coursename } = params;
    const data = await GetParticularCourseChapters(coursename);
    const chapters = data.chapters;

    return (
        <main className='min-h-screen dark:text-white dark:bg-gray-800'>
            <div className='max-w-4xl mx-auto p-4 space-y-8'>
                {/* Banner Image */}
                <div className='relative aspect-video w-full overflow-hidden rounded-lg shadow-lg'>
                    <Image
                        src={data.banner.url}
                        fill
                        priority
                        className='object-cover'
                        alt={`${data.title} course banner`}
                    />
                </div>

                {/* Course Content */}
                <div className='space-y-6'>
                    <h1 className='text-3xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400'>
                        {data.title}
                    </h1>
                    
                    {data.description && (
                        <p className='text-gray-600 dark:text-gray-300 text-lg'>
                            {data.description}
                        </p>
                    )}

                    <div className='space-y-4'>
                        <h2 className='text-2xl font-semibold'>Course Chapters</h2>
                        <ul className='grid gap-4'>
                            {chapters.map((chapter, index) => (
                                <li
                                    key={chapter.slug}
                                    className='group transition-all duration-200'
                                >
                                    <Link
                                        href={`${coursename}/${chapter.slug}/`}
                                        className='block p-4 rounded-lg bg-white dark:bg-gray-700 
                                                 shadow-sm hover:shadow-md dark:shadow-gray-900 
                                                 transform hover:-translate-y-1 transition-all duration-200'
                                    >
                                        <div className='flex items-center space-x-3'>
                                            <span className='text-indigo-500 font-medium'>
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <h3 className='text-xl font-medium group-hover:text-indigo-500'>
                                                {chapter.title}
                                            </h3>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
