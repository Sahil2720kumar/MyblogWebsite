import react from "react";
import CardContainer from "@/components/CardContainer";
import Accordion from "@/components/Accordion";
import CourseTabs from "@/components/CourseTabs";
import { getCourseByChapterName } from "@/services/cmsServices";
import Image from "next/image";


export default async function CourseName({ params, searchParams }) {
    const { slug } = params;
    const data = await getCourseByChapterName(slug);
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
