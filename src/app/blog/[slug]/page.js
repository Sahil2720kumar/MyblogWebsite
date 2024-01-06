import Image from "next/image";
import { getParticularPost, getAllPostsSlug } from "@/services/cmsServices";
import moment from "moment";



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
    const data = (await getParticularPost(slug))[0].node;
    //console.log("ParticularBlog", data);
    return (
        <div className=" p-5  bg-gray-50 dark:text-white dark:bg-gray-800">
            <div className=" py-4 px-6 rounded-md shadow-md bg-white dark:bg-gray-700">
                <h1 className="text-center text-gray-800 text-2xl font-bold my-3 ">
                    {data.title}
                </h1>
                <div className="flex items-center justify-center">
                    <span>
                        <span className="mr-2  rounded-full">
                            <Image
                                src={data.author.photo.url}
                                width={30}
                                height={30}
                                className="inline  rounded-full bg-indigo-300 "
                                alt="Picture of the author"
                            ></Image>
                        </span>
                        {data.author.name}
                    </span>
                    <span className="text-[15px] px-3 dark:text-gray-300 text-gray-600">
                        {moment(data.createdAt).format("LL")}
                    </span>
                </div>
                {/* start blog content */}
                <div
                    className="mt-4 text-gray-900 dark:text-stone-100"
                    dangerouslySetInnerHTML={{ __html: data.content.html }}
                >
                    {/* blog content */}
                </div>
                {/* end blog content */}
            </div>
        </div>
    );
}
