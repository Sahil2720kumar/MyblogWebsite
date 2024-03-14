"use client";
import react, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import ToggleThemeButton from "./ToggleThemeButton";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Navbar() {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [mobileMenu, setMobileMenu] = useState(false);
    const [profileShow, setProfileShow] = useState(false);
    const [searchButton, setSearchButton] = useState(false);
    const { theme, setTheme } = useContext(ThemeContext);
    const [searchValue, setSearchValue] = useState("");

    const menuOperation = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    };
    const searchHandle = async e => {
        e.preventDefault();
        console.log(searchValue);
        router.push(`/search?query=${searchValue}`);
    };

    return (
        <div className='z-50 sticky top-0 relative '>
            <nav className='shadow drop-shadow-md bg-indigo-100 relative bg-white dark:bg-gray-900 dark:text-white  flex items-center justify-between flex-col p-1 px-8 md:py-2 '>
                <div className=' border-b dark:border-b-gray-800 w-screen flex items-center justify-between p-2 md:px-8'>
                    {/* Logo starting from here */}
                    <div className='dark:text-white font-bold text-indigo-600 text-2xl md:text-3xl'>
                        <Link href='/'>
                            <span className='font-bold'><h2>DailyLearn</h2></span>
                        </Link>
                    </div>
                    {/* Logo ending here */}

                    {/* Change theme from  here */}
                    <ToggleThemeButton />
                    {/* Ending  Change theme */}

                    {/* profile from  here */}
                    <button
                        type='button'
                        className={`${
                            status === "authenticated" ? "block" : "hidden"
                        } flex text-sm bg-indigo-800 rounded-full md:me-0 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-600`}
                        id='user-menu-button'
                        onClick={() => setProfileShow(!profileShow)}
                    >
                        <span className='sr-only'>Open user menu</span>
                        <img
                            className=' rounded-full bg-indigo-700'
                            src={`${
                                session?.user?.avatar
                                    ? session.user?.avatar
                                    : session?.user?.role === "User"
                                    ? "/userProfile.svg"
                                    : session?.user?.role === "Author"
                                    ? "/author.svg"
                                    : ""
                            }
                            `}
                            width={39}
                            height={39}
                            alt='Picture of the user'
                        />
                    </button>
                    {/* user dropdown menu */}
                    <div
                        className={`${
                            profileShow ? "block" : "hidden"
                        } items-center  justify-between absolute right-10 md:right-1/3 lg:right-[60%]  top-1/2 z-50 text-base list-none bg-stone-50 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
                    >
                        <div className='px-4 py-3  '>
                            <span className='block text-sm text-gray-900 dark:text-white'>
                                {session?.user?.name}
                            </span>
                            <span className='block text-sm  text-gray-500 truncate dark:text-gray-400'>
                                {session?.user?.email}
                            </span>
                        </div>
                        <ul className='py-2'>
                            <li>
                                <Link
                                    href='/dashboard/'
                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                                >
                                    Dashboard
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href='#'
                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                                    onClick={() =>
                                        signOut({
                                            callbackUrl:
                                                session?.user?.role === "Author"
                                                    ? "/author/signin"
                                                    : "/signin",
                                            redirect: true
                                        })
                                    }
                                >
                                    Sign out
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Ending  profile */}

                    {/* Desktop menu */}
                    <div className='hidden lg:block'>
                        <ul className='flex flex-col items-center text-[18px] font-medium p-4 md:p-0 mt-1 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-700'>
                            <li>
                                <Link
                                    href='/'
                                    className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-blue-500'
                                    aria-current='page'
                                    onClick={() => setMobileMenu(!mobileMenu)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/course/'
                                    onClick={() => setMobileMenu(!mobileMenu)}
                                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                >
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={() => setMobileMenu(!mobileMenu)}
                                    href='/blog/'
                                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                >
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={() => setMobileMenu(!mobileMenu)}
                                    href='/contact/'
                                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/hire/'
                                    onClick={() => setMobileMenu(!mobileMenu)}
                                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                >
                                    Work With Us
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <Link
                                    href='/signin/'
                                    onClick={() => setMobileMenu(!mobileMenu)}
                                    className=' bg-indigo-500  text-white p-2 text-gray-900 rounded  md:hover:bg-indigo-600 hover:text-white dark:text-white md:dark:hover:text-white dark:hover:text-white dark:border-gray-700 transition-colors duration-300 transform  rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50'
                                >
                                    Sign in
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/signup/'
                                    onClick={() => setMobileMenu(!mobileMenu)}
                                    className=' bg-indigo-500  text-white p-2 text-gray-900 rounded  md:hover:bg-indigo-600 md:hover:text-white hover:outline dark:text-white hover:text-white dark:hover:text-white dark:border-gray-700 transition-colors duration-300 transform  rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50'
                                >
                                    Sign up
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* End Desktop Menu*/}

                    {/* Mobile start from  Navigation */}
                    <div
                        onClick={menuOperation}
                        className=' flex items-center sm:block lg:hidden '
                    >
                        {/*<!-- Mobile menu button-->*/}
                        <button
                            type='button'
                            className='sm:block lg:hidden border border-black relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                            aria-controls='mobile-menu'
                        >
                            <span className='absolute -inset-0.5'></span>
                            <span className='sr-only'>Open main menu</span>
                            {mobileMenu ? (
                                <svg
                                    className='h-6 w-6 dark:text-white text-black'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className='dark:text-white text-black block h-6 w-6'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    {/*!-- Mobile menu, show/hide based on menu state. -->*/}
                    <div
                        className={`${
                            mobileMenu ? "block" : "hidden"
                        } md:my-5 lg:hidden items-center  justify-between w-full  md:w-11/12  absolute top-full `}
                        id='navbar-language'
                    >
                        <ul className='flex flex-col font-medium p-4 md:p-0 mt-1 border border-gray-100 rounded-lg bg-gray-50  dark:bg-gray-900  dark:border-gray-700'>
                            <li>
                                <Link
                                    href='/'
                                    className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded  '
                                    aria-current='page'
                                    onClick={() => setMobileMenu(!mobileMenu)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/course/'
                                    onClick={() => setMobileMenu(!mobileMenu)}
                                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100  dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700'
                                >
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={() => setMobileMenu(!mobileMenu)}
                                    href='/blog/'
                                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100  dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700'
                                >
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={() => setMobileMenu(!mobileMenu)}
                                    href='/contact/'
                                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700'
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/hire/'
                                    onClick={() => setMobileMenu(!mobileMenu)}
                                    className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100  dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700'
                                >
                                    Work With Us
                                </Link>
                            </li>
                            <hr />
                            <div className=''>
                                <li>
                                    <Link
                                        href='/signin/'
                                        onClick={() =>
                                            setMobileMenu(!mobileMenu)
                                        }
                                        className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100  dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700'
                                    >
                                        Sign in
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/signup/'
                                        onClick={() =>
                                            setMobileMenu(!mobileMenu)
                                        }
                                        className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100  dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700'
                                    >
                                        Sign up
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                {/* Moblie Navigation end heres */}
                <div className=' md:px-8 md:py-2 w-screen flex items-center justify-between p-2.5 min-h-[15px]'>
                    <div>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-6 h-6 text-indigo-600 dark:text-white'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                            />
                        </svg>
                    </div>
                    <div className='w-auto flex items-center justify-between'>
                        <div className={`${searchButton ? "block" : "hidden"}`}>
                            <form method='get' onSubmit={searchHandle}>
                                <input
                                    onChange={e =>
                                        setSearchValue(e.target.value)
                                    }
                                    className='dark:text-gray-800 border border-indigo-700 outline-indigo-700 p-0.5 px-2 rounded rounded-xl'
                                    placeholder='search here...'
                                    type='text'
                                />
                            </form>
                        </div>
                        <div
                            onClick={() => {
                                searchButton
                                    ? setSearchButton(false)
                                    : setSearchButton(true);
                            }}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='w-6 h-6 text-indigo-600 dark:text-white'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
