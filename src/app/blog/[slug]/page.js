import Image from "next/image";
import { getParticularPost, getAllPostsSlug } from "@/services/cmsServices";
import moment from "moment";
import { notFound } from "next/navigation";

// or Dynamic metadata
export async function generateMetadata({ params }) {
    const { slug } = params;
    const data = (await getParticularPost(slug))[0]?.node;
    if (!data) {
        return {
            title: "Not found",
            description:
                "Oops! It seems you've reached an unexpected destination on DailyLearn. Our apologies for the detour. Navigate back to discover a world of knowledge or explore our homepage for a fresh start."
        };
    }
    return {
        title: data.title,
        description: data.excerpt,
        openGraph: {
            images: [{ url: data.featuredImage.url }],
            title: data.title,
            description: data.excerpt,
            siteName: "DailyLearn",
            locale: "en_US",
            type: "website"
        }
    };
}

export const revalidate = 120; // revalidate the data at most every 10 min

export async function generateStaticParams() {
    const allPosts = await getAllPostsSlug();
    //console.log(allPosts);
    return allPosts.map(post => ({
        slug: post.slug
    }));
}

export default async function ParticularBlog({ params, searchParams }) {
    const { slug } = params;
    const data = (await getParticularPost(slug))[0]?.node;
    if (!data) {
        console.log("not found");
        notFound();
    }
    console.log("ParticularBlog", data);
    return (
        <div className='min-h-screen p-5  bg-gray-50 dark:text-white dark:bg-gray-800 max-w-screen-lg mx-auto'>
            <div className=' py-4 px-6 rounded-md shadow-md bg-white dark:bg-gray-700'>
                <h1 className='dark:text-stone-100 text-center text-gray-800 text-2xl md:text-4xl font-bold my-3 '>
                    {data.title}
                </h1>
                <div className='flex items-center justify-center'>
                    <span className="md:text-2xl">
                        <span className='mr-2  rounded-full'>
                            <Image
                                src={data.author.photo.url}
                                width={30}
                                height={30}
                                className='inline  rounded-full bg-indigo-300 '
                                alt='Picture of the author'
                            ></Image>
                        </span>
                       <h2 className="inline" >{data.author.name}</h2>
                    </span>
                    <span className='text-[15px] md:text-2xl px-3 dark:text-gray-300 text-gray-600'>
                        {moment(data.createdAt).format("LL")}
                    </span>
                </div>
                {/* start blog content */}
                <div
                    className={`${
                        data.postPdfUrl ? "block" : "none hidden"
                    } mt-2 aspect-w-16 h-[500px] `}
                >
                    <iframe
                        src={`${data.postPdfUrl ? data.postPdfUrl : ""}`}
                        className='w-full h-full'
                        allowfullscreen
                    ></iframe>
                </div>

                <div
                    dangerouslySetInnerHTML={{ __html: data.content.html }}
                    className='mt-4 md:m-4 md:pt-10 text-gray-900 dark:text-stone-100 md:text-2xl'
                >
                    {/* blog content */}
                </div>
                {/* end blog content */}
            </div>
        </div>
    );
}
