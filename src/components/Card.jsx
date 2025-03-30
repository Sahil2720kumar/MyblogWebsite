import Image from "next/image";
import react from "react";
import moment from "moment";
import Link from "next/link";

export default function Card({ cardContent, buttonContent, blog }) {
    return (
        <Link
            href={blog ? `/blog/${cardContent.slug}/` : `/course/${cardContent.slug}/`}
            className='group block bg-white dark:bg-gray-700 max-w-[355px] min-h-[420px] 
                      shadow-md rounded-xl overflow-hidden transition-transform hover:scale-[1.02]'
        >
            <div className='h-[170px] w-full'>
                <Image
                    src={blog ? cardContent?.featuredImage?.url : cardContent?.banner.url}
                    width={357}
                    height={170}
                    className='w-full h-full object-cover'
                    alt={`Featured image for ${cardContent?.title}`}
                />
            </div>
            
            <div className='p-6'>
                {blog ? (
                    <div className='flex items-center gap-2 mb-4'>
                        <div className='w-6 h-6 rounded-full overflow-hidden'>
                            <Image
                                src={cardContent.author.photo.url}
                                width={24}
                                height={24}
                                className='w-full h-full object-cover'
                                alt={`Avatar of ${cardContent.author.name}`}
                            />
                        </div>
                        <span className='text-sm font-medium'>{cardContent.author.name}</span>
                        <span className='text-sm text-gray-600 dark:text-gray-300'>
                            • {moment(cardContent.createdAt).format("LL")}
                        </span>
                    </div>
                ) : (
                    <span className='inline-block px-3 py-1 mb-4 text-xs font-semibold text-indigo-600 
                                   bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-200 rounded-full'>
                        FREE COURSE
                    </span>
                )}

                <h2 className='text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2'>
                    {cardContent?.title}
                </h2>
                
                <p className='mb-4 text-base text-gray-600 dark:text-gray-300 line-clamp-3'>
                    {blog ? cardContent.excerpt : cardContent.describtion}
                </p>

                <span className='inline-flex items-center text-base font-semibold text-indigo-600 
                                dark:text-indigo-400 group-hover:text-indigo-700'>
                    {buttonContent}
                    <svg className='w-4 h-4 ml-2 transition-transform group-hover:translate-x-1' 
                         viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M9 5l7 7-7 7" />
                    </svg>
                </span>
            </div>
        </Link>
    );
}
