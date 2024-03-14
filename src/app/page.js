import Card from "@/components/Card";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { getFeaturedCourse } from "@/services/cmsServices";
import Link from "next/link";

export const revalidate = 120; // revalidate the data at most every 10 min

export default async function Home() {
    const blog = false;
    const session = await getServerSession(authOptions);
    const featuredCourses = await getFeaturedCourse();
    //console.log(posts)
    return (
        <div className='bg-gray-50 dark:bg-gray-800 dark:text-white w-screen flex items-center justify-center flex-col '>
            {/* Hero section starts here   */}
            <div className=' text-center my-14 md:mx-10 px-10 space-y-3'>
                <div className=' font-bold text-3xl md:text-[40px]'>
                    Welcome to{" "}
                    <span className='text-indigo-500'>
                        <h1 className='inline'>DailyLearn</h1>
                    </span>{" "}
                    <br />
                    <h2 className='inline'>Learn Courses</h2> |
                </div>
                {/*JSON.stringify(session)*/}
                <p className='text-center text-gray-500 md:text-[19px]'>
                    Confused on which course to take? I have got you covered.
                    Browse courses and find out the best course for you. Its
                    free! Learning Hub is my attempt to teach basics and those
                    course to people in short time which took me ages to learn.
                </p>
                <div className='pt-5 dark:text-white my-5 flex items-center justify-center space-x-1.5'>
                    <button className='font-semibold text-base bg-black text-white rounded px-3 py-2'>
                        <Link href='/course/'>Free Courses</Link>
                    </button>
                    <button className='font-semibold text-base bg-gray-400 text-black rounded px-3 py-2'>
                        <Link href='/blog/'>Explore Blogs</Link>
                    </button>
                </div>
            </div>
            {/* Hero section Ends here   */}

            {/* Recommended Courses starts here   */}
            <div className='w-screen my-3 mx-10 flex items-center justify-between flex-col'>
                <h2 className='text-center w-screen font-bold text-3xl'>
                    Recommended Courses
                </h2>
                <div className='my-4 flex items-center justify-center md:flex-row  md:flex-wrap flex-col space-y-5 p-3 px-8 space-y-2 md:space-y-0 md:gap-8'>
                    {/* course cards starts from here */}
                    {featuredCourses.map((course, index) => (
                        <Card
                            key={index}
                            cardContent={course}
                            buttonContent={blog ? "Read More" : "Start Course"}
                            blog={blog}
                        />
                    ))}
                </div>
            </div>
            {/* Recommended Courses Ends here   */}
        </div>
    );
}
