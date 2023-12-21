"use client";
import react, { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
    const [isPasswordVisible,setIsPasswordVisible]= useState(false)
    const [loading, setLoading] = useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const [isGithubLoading, setIsGithubLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [authData, setAuthData] = useState({
        email: "",
        password: ""
    });
    
    const togglePasswordVisibility=()=>{
      setIsPasswordVisible(!isPasswordVisible)
    }
    
    const inputEvent = event => {
        const { name, value } = event.target;
        setAuthData(preValue => {
            return {
                ...preValue,
                [name]: value
            };
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        console.log(authData);
    };
    const githubSignIn = async e => {
        e.preventDefault();
        setIsGithubLoading(true);
        console.log("github login");
        //setIsGithubLoading(false)
    };

    const googleSignIn = async e => {
        e.preventDefault();
        setIsGoogleLoading(true);
        console.log("google login");
        //setIsGithubLoading(false)
    };

    return (
        <form method="POST">
            <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                    <label
                        htmlFor="email"
                        className="block md:text-[16px]  mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                        Email
                    </label>
                    <input
                        onChange={inputEvent}
                        type="email"
                        id="email"
                        name="email"
                        value={authData.email}
                        placeholder="Email Here... "
                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>

                <div className="relative flex-1 px-2 mt-4 md:mt-0">
                    <label
                        htmlFor="password"
                        className="inline mb-2 md:text-[16px] text-sm text-gray-600 dark:text-gray-200"
                    >
                        Password
                    </label>
                    <Link
                        href={"/forgot-password"}
                        className="inline mt-1 md:text-[16px] float-right text-sm text-indigo-600 hover:underline focus:text-indigo-800"
                    >
                        Forgot Password ?
                    </Link>

                    <input
                        onChange={inputEvent}
                        name="password"
                        id="password"
                        type={`${isPasswordVisible?"text":"password"}`}
                        value={authData.password}
                        placeholder="••••••••"
                        className=" block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <button
                        className="absolute outline-none  top-11 right-5 flex items-center text-gray-600"
                        onClick={togglePasswordVisibility}
                    >
                        {isPasswordVisible ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            <button
                type="submit"
                disabled={loading ? true : false}
                onClick={handleSubmit}
                className={`${
                    loading ? "bg-indigo-600 " : "bg-indigo-500 "
                } w-full px-6 py-3 mt-4 md:text-[16px] text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50`}
            >
                {loading ? "processing..." : "Log In"}
            </button>
            {/* JSON.stringify(authData) */}
            <div className="mt-5 flex flex-col space-y-5">
                <span className="flex items-center justify-center space-x-2">
                    <span className="h-px bg-gray-400 w-14"></span>
                    <span className="font-normal text-gray-500">
                        or login with
                    </span>
                    <span className="h-px bg-gray-400 w-14"></span>
                </span>
                <div className="flex flex-col space-y-4">
                    <button
                        onClick={githubSignIn}
                        disabled={isGithubLoading ? true : false}
                        className="dark:text-stone-100 flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-indigo-500 rounded-md group  hover:bg-indigo-500 focus:outline-none md:text-[16px] "
                    >
                        <span>
                            <svg
                                className="dark:text-stone-100 w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                                viewBox="0 0 16 16"
                                version="1.1"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                ></path>
                            </svg>
                        </span>
                        <span className="dark:text-stone-100 text-sm font-medium text-gray-800 group-hover:text-white">
                            {isGithubLoading
                                ? "Github processing..."
                                : "Github"}
                        </span>
                    </button>
                    <button
                        onClick={googleSignIn}
                        disabled={isGoogleLoading ? true : false}
                        className="flex md:text-[16px] items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-indigo-500 text-white rounded-md group hover:bg-indigo-500 focus:outline-none"
                    >
                        <span>
                            <svg
                                className="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                                width="20"
                                height="20"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="xMidYMid"
                                viewBox="0 0 256 262"
                                id="google"
                            >
                                <path
                                    fill="#4285F4"
                                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                                ></path>
                                <path
                                    fill="#34A853"
                                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                                ></path>
                                <path
                                    fill="#FBBC05"
                                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                                ></path>
                                <path
                                    fill="#EB4335"
                                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                                ></path>
                            </svg>
                        </span>
                        <span className="dark:text-stone-100 text-sm font-medium text-black group-hover:text-white">
                            {isGoogleLoading
                                ? "Google processing..."
                                : "Google"}
                        </span>
                    </button>
                    <Link
                        href={"/magic-link"}
                        className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-indigo-500 text-white rounded-md group hover:bg-indigo-500 focus:outline-none"
                    >
                        <span className="dark:text-stone-100 text-sm text-center font-medium text-black group-hover:text-white">
                            Log in with Magic Link
                        </span>
                    </Link>
                </div>
            </div>
        </form>
    );
}
