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

export default async function ParticularBlog({ params }) {
    const { slug } = params;
    const data = (await getParticularPost(slug))[0]?.node;
    
    if (!data) {
        notFound();
    }

    return (
        <main className='min-h-screen p-4 md:p-8 bg-gray-50 dark:text-white dark:bg-gray-800'>
            <article className='max-w-4xl mx-auto py-6 px-4 md:px-8 rounded-lg shadow-lg bg-white dark:bg-gray-700'>
                {/* Header Section */}
                <header className='mb-8'>
                    <h1 className='dark:text-stone-100 text-center text-gray-800 text-3xl md:text-5xl font-bold mb-6 leading-tight'>
                        {data.title}
                    </h1>
                    
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600 dark:text-gray-300'>
                        <div className='flex items-center gap-2'>
                            <Image
                                src={data.author.photo.url}
                                width={40}
                                height={40}
                                className='rounded-full bg-indigo-300'
                                alt={`Profile picture of ${data.author.name}`}
                                priority
                            />
                            <h2 className='text-lg md:text-xl font-medium'>{data.author.name}</h2>
                        </div>
                        <time 
                            dateTime={data.createdAt}
                            className='text-lg md:text-xl'
                        >
                            {moment(data.createdAt).format("LL")}
                        </time>
                    </div>
                </header>

                {/* PDF Viewer */}
                {data.postPdfUrl && (
                    <div className='my-8 aspect-[16/9] max-h-[600px] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600'>
                        <iframe
                            src={data.postPdfUrl}
                            className='w-full h-full'
                            title='PDF Document Viewer'
                            allowFullScreen
                        />
                    </div>
                )}

                {/* Article Content */}
                <div
                    dangerouslySetInnerHTML={{ __html: data.content.html }}
                    className='prose prose-lg md:prose-xl dark:prose-invert max-w-none'
                />
            </article>
        </main>
    );
}
