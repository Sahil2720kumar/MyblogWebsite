import Image from "next/image";
import react from "react";
import moment from "moment";
import Link from "next/link";

export default function Card({ cardContent, buttonContent, blog }) {
    //console.log(cardContent,buttonContent)
    return (
        <div
            id=''
            className='bg-white flex-auto max-w-[355px] dark:bg-gray-700 card min-h-[410px] max-h-[500px] pb-1 shadow shadow-md overflow-hidden rounded rounded-xl'
        >
            <div className='h-[170px] p-0 w-full flex items-center justify-center'>
                <Image
                    src={
                        blog
                            ? cardContent?.featuredImage?.url
                            : cardContent?.banner.url
                    }
                    width={357}
                    height={170}
                    className='inline px-0.5 w-full h-[100%] overflow-hidden'
                    alt='Picture of the post'
                ></Image>
            </div>
            <div className='py-1 pt-2 px-6 h-full'>
                {blog ? (
                    <>
                        <span>
                            <span className='mr-0.5  rounded-full min-h-[10px] bg-indigo-300'>
                                <Image
                                    src={cardContent.author.photo.url}
                                    width={20}
                                    height={20}
                                    className='inline px-0.5 '
                                    alt='Picture of the author'
                                ></Image>
                            </span>
                            {cardContent.author.name}
                        </span>
                        <span className='text-[15px] px-3 dark:text-gray-300 text-gray-600'>
                            • {moment(cardContent.createdAt).format("LL")}
                        </span>
                    </>
                ) : (
                    <span className='text-[13px] font-semibold block text-gray-600 dark:text-stone-300 '>
                        FREE COURSE
                    </span>
                )}

                <h2 className='text-xl my-2'>{cardContent?.title}</h2>
                <p className='min-h-[120px] overflow-hidden text-ellipsis mt-3 mb-2 text-[16px] md:text-[19px] dark:text-white text-gray-700'>
                    {blog ? cardContent.excerpt : cardContent.describtion}
                </p>
                <button className='text-[17px] font-semibold bg-indigo-600 transition hover:bg-indigo-700  text-white px-3 py-1 rounded rounded-full'>
                    {" "}
                    <Link
                        href={
                            blog
                                ? `/blog/${cardContent.slug}/`
                                : `/course/${cardContent.slug}/`
                        }
                    >
                        {" "}
                        {buttonContent}{" "}
                    </Link>
                </button>
            </div>
        </div>
    );
}
