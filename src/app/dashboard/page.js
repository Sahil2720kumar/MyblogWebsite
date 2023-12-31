import { getServerSession } from "next-auth";
import { authOptions } from "./../api/auth/[...nextauth]/options";
import Image from "next/image";
import Link from "next/link";

export default async function ProfilePage() {
    const session = await getServerSession(authOptions);
    
    const convertTime = timestamp => {
        const date = new Date(timestamp);
        // Extract day, month, and year
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
        // Months array
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        // Format the date as "DD Month YYYY"
        const formattedDate = `${day} ${months[monthIndex]} ${year}`;
        return formattedDate;
    };

    function separateNames(fullName) {
        // Split the full name into an array of words
        const nameArray = fullName.split(" ");

        // Extract the first name and surname
        const firstName = nameArray[0];
        const surname = nameArray.slice(1).join(" "); // Join the remaining words as the surname

        // Return an object with first name and surname
        return {
            firstName: firstName,
            surname: surname
        };
    }
    //separatedNames
    const separatedNames = separateNames(session?.user?.name);
    // Unix timestamp: 1703688358
    const createdAt = convertTime(Number(session?.user?.createdAt));
    const updatedAt = convertTime(Number(session?.user?.updatedAt));

    return (
        <div className="bg-gray-50 dark:text-white dark:bg-gray-800 container mx-auto py-5 p-5">
            <div className="md:flex no-wrap md:-mx-2">
                {/* Left Side */}
                <div className="w-full md:w-3/12 md:mx-2">
                    {/* Profile Card */}
                    <div className="bg-white dark:bg-gray-800 dark:text-stone-100 p-3 border-t-4 border-green-400">
                        <div className="image overflow-hidden dark:text-stone-100 ">
                            <Image
                                className=" rounded-full bg-indigo-700"
                                src={`${
                                    session?.user?.avatar
                                    ? session.user.avatar
                                    : session?.user.role === "User"
                                    ? "/userProfile.png"
                                    : "/author.png"
                                }`}
                                width={44}
                                height={44}
                                alt="Picture of the user"
                            />
                        </div>
                        <h1 className="text-gray-900 dark:text-stone-100  font-bold text-xl leading-8 my-1">
                            {session.user.name}
                        </h1>

                        <h3 className="text-gray-600 dark:text-stone-100  font-lg text-semibold leading-6">
                            {session?.user?.role}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-stone-100  hover:text-gray-600 leading-6">
                            {session?.user?.describtion}
                        </p>
                        <ul className="bg-gray-100 text-gray-600 bg-gray-50 dark:text-stone-100 dark:bg-gray-900 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                            <li className="flex items-center py-3">
                                <span>Status</span>
                                <span className="ml-auto">
                                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                                        Active
                                    </span>
                                </span>
                            </li>
                            <li className="flex items-center py-3">
                                <span>Member since</span>
                                <span className="ml-auto">{createdAt}</span>
                            </li>
                            <li className="flex items-center py-3">
                                <span>Updated At</span>
                                <span className="ml-auto">{updatedAt}</span>
                            </li>
                        </ul>
                    </div>
                    {/* End of profile card */}
                    <div className="my-4"></div>
                </div>
                {/* Right Side */}
                <div className="w-full md:w-9/12  ">
                    {/* Profile tab */}
                    {/* About Section */}
                    <div className="dark:bg-gray-800 dark:text-stone-100 bg-white p-3 shadow-sm dark:shadow-gray-700 rounded-sm">
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span className="text-green-500">
                                <svg
                                    className="h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </span>
                            <span className="tracking-wide dark:text-stone-100 ">
                                About
                            </span>
                        </div>
                        <div className="dark:text-stone-100 text-gray-700">
                            <div className="grid md:grid-cols-2 text-sm">
                                <div className="dark:text-white grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        First Name
                                    </div>
                                    <div className="px-4 py-2">
                                        {separatedNames.firstName}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Last Name
                                    </div>
                                    <div className="px-4 py-2">
                                        {separatedNames.surname}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Gender
                                    </div>
                                    <div className="px-4 py-2">
                                        {session?.user?.gender
                                            ? session?.user?.gender
                                            : "Not Provided"}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Contact No.
                                    </div>
                                    <div className="px-4 py-2">
                                        {session?.user?.contact_no
                                            ? session?.user?.contact_no
                                            : "Not Provided"}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Current Address
                                    </div>
                                    <div className="px-4 py-2">
                                        {session?.user?.current_address
                                            ? session?.user?.current_address
                                            : "Not Provided"}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Permanant Address
                                    </div>
                                    <div className="px-4 py-2">
                                        {session?.user?.permanant_address
                                            ? session?.user?.permanant_address
                                            : "Not Provided"}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Email.
                                    </div>
                                    <div className="px-4 py-2">
                                        <a
                                            className="text-blue-800 dark:text-stone-100 "
                                            href="mailto:jane@example.com"
                                        >
                                            {session?.user?.email
                                                ? session?.user?.email
                                                : "Not Provided"}
                                        </a>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                        Birthday
                                    </div>
                                    <div className="px-4 py-2">
                                        {session?.user?.birthday
                                            ? session?.user?.birthday
                                            : "Not Provided"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of about section */}
                    <div className="dark:bg-gray-800 dark:text-stone-100 mt-3 bg-white p-3 shadow-sm dark:shadow-gray-700 rounded-sm">
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span className="text-green-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 fill-green-500 "
                                    viewBox="0 0 64 64"
                                >
                                    <path d="M22 51c-1-1-4-1-4-1l-.425-1.274c-.362-1.086-1.215-1.939-2.301-2.301L14 46c0 0 .5-2.5-1-4l25-25 8 10L22 51zM52 21l-9-9 4.68-4.68c0 0 3.5-1.5 7 2s2 7 2 7L52 21zM9 50l-1.843 4.476c-.614 1.49.877 2.981 2.367 2.367L14 55 9 50z"></path>
                                </svg>
                            </span>
                            <span className="tracking-wide dark:text-stone-100 ">
                                Action
                            </span>
                        </div>
                        <div className="text-gray-700">
                            <div className="flex gap-5 my-8">
                                <button className="font-semibold text-base text-white rounded px-2.5 py-1.5 bg-indigo-500 transition-colors duration-300 transform  rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
                                    <Link href="/dashboard/update">
                                        Update Profile
                                    </Link>
                                </button>
                                <button className="font-semibold text-base text-white rounded px-2.5 py-1.5 bg-red-500 transition-colors duration-300 transform  rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* End of profile tab */}
                </div>
            </div>
        </div>
    );
}
