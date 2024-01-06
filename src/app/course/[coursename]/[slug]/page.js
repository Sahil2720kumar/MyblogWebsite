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

export const revalidate = 120; // revalidate the data at most every 10 min

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
        notFound()
    }

    const chapters = data.chapters;
    const chapter = chapters.filter(element => {
        return element.slug === slug;
    });
    const chapterdata = { ...chapter[0] };

    //console.log("chapterdata",chapterdata)
    return (
        <div className="dark:text-white dark:bg-gray-800">
            <div className="p-3 ">
                <div className="flex items-center justify-center min-h-[200px]">
                    <Image
                        src={chapterdata.image.url}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="inline px-0.5 w-full h-[100%] overflow-hidden"
                        alt="Picture of the chapter"
                    />
                </div>
                <div className="">
                    {/* accordion-collapse  */}
                    <Accordion chapters={chapters} />
                    {/* End accordion-collapse  */}
                    {/* tabs  */}
                    <CourseTabs topicContent={chapterdata} topicTitle={slug} />
                    {/* End  tabs  */}
                </div>
            </div>
        </div>
    );
}
