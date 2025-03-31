import react from "react";
import CardContainer from "@/components/CardContainer";
import Accordion from "@/components/Accordion";
import CourseTabs from "@/components/CourseTabs";
import { notFound } from "next/navigation";
import {
    getCourseByChapterName,
    getAllChaptersSlug
} from "@/services/cmsServices";
import Image from "next/image";

export async function generateMetadata({ params }) {
    const { slug } = params;
    const data = await getCourseByChapterName(slug);
    if (data) {
        const chapters = data.chapters;
        const chapter = chapters.filter(element => {
            return element.slug === slug;
        });
        const chapterdata = { ...chapter[0] };
        return {
            title: chapterdata.title,
            description: chapterdata.excerpt,
            openGraph: {
                images: [{ url: chapterdata.image.url }],
                title: chapterdata.title,
                description: chapterdata.excerpt,
                siteName: "DailyLearn",
                locale: "en_US",
                type: "website"
            }
        };
    }
    return {
        title: "Not found",
        description:
            "Oops! It seems you've reached an unexpected destination on DailyLearn. Our apologies for the detour. Navigate back to discover a world of knowledge or explore our homepage for a fresh start."
    };
}

export const revalidate = 60; // revalidate the data at most every 1 min

export async function generateStaticParams() {
    const allSlugsQueryData = await getAllChaptersSlug();
    // console.log("allSlugsQueryData", allSlugsQueryData);
    const allSlugs = allSlugsQueryData.flatMap(course =>
        course.chapters.map(chapter => {
            //console.log(chapter.slug);
            return chapter.slug;
        })
    );
    //console.log(allSlugs);
    return allSlugs.map(slug => ({
        slug: slug
    }));
}

export default async function CourseChapter({ params, searchParams }) {
    const { slug } = params;
    const data = await getCourseByChapterName(slug);
    if (!data) {
        console.log("not found");
        notFound();
    }

    const chapters = data.chapters;
    const chapter = chapters.filter(element => {
        return element.slug === slug;
    });
    const chapterdata = { ...chapter[0] };

    //console.log("chapterdata",chapterdata)
    return (
        <div className='min-h-screen dark:text-white dark:bg-gray-800'>
            <div className='max-w-screen-lg mx-auto px-4 py-6'>
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold mb-4'>{chapterdata.title}</h1>
                    <p className='text-gray-600 dark:text-gray-300 mb-6'>{chapterdata.excerpt}</p>
                </div>
                
                <div className='rounded-lg overflow-hidden shadow-lg mb-8'>
                    <Image
                        src={chapterdata.image.url}
                        width={0}
                        height={0}
                        sizes='100vw'
                        className='w-full h-[300px] md:h-[400px] object-cover'
                        alt={`Cover image for ${chapterdata.title}`}
                        priority
                    />
                </div>

                <div className='space-y-8'>
                    <Accordion chapters={chapters} />
                    <CourseTabs topicContent={chapterdata} topicTitle={slug} />
                </div>
            </div>
        </div>
    );
}
