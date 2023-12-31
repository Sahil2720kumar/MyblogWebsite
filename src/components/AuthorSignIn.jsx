"use client";
import react, { useState, useEffect } from "react";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { SIGNIN_AUTHOR } from "@/utils/mutations";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function AuthorSignIn() {
    const router = useRouter();
    const params = useSearchParams();

    useEffect(() => {
        toast.warning(params?.get("message"), {
            position: "top-center"
        });
    }, []);

    const [authData, setAuthData] = useState({
        email: "",
        password: ""
    });

    const [logInAuthor, { data, loading, error }] = useMutation(SIGNIN_AUTHOR);
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

        try {
            const { data } = await logInAuthor({
                variables: {
                    data: authData
                }
            });

            // Check if the mutation was successful
            if (data && data.user) {
                toast.success("Login successful!", {
                    position: "top-center"
                });
                await signIn("credentials", {
                    email: authData.email,
                    password: authData.password,
                    callbackUrl: "/",
                    redirect: true
                });
                router.push("/");
                // Perform any additional actions after successful login
            } else {
                toast.error("Invalid credentials. Please try again.", {
                    position: "top-center"
                });
            }
        } catch (e) {
            console.error("Error during login:");
            toast.error("An error occurred during login.", {
                position: "top-center"
            });
        }
    };

    return (
        <div className="dark:bg-gray-900 w-full flex flex-col justify-center ">
            <div className="relative rounded w-full  py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-indigo-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative  rounded px-4 py-10 bg-white dark:bg-gray-800 dark:text-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">
                                Login Form For Authors
                            </h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <form
                                method="POST"
                                className="py-8 text-base dark:text-white leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                            >
                                <div className="relative ">
                                    <input
                                        autoComplete="off"
                                        onChange={inputEvent}
                                        value={authData.email}
                                        id="email"
                                        name="email"
                                        type="text"
                                        className="peer placeholder-transparent dark:bg-transparent h-10 w-full border-b-2 border-gray-300 dark:text-white text-gray-900 focus:outline-none focus:border-rose-600"
                                        placeholder="Email address"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-0 dark:text-white -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                    >
                                        Email Address
                                    </label>
                                    <span className="text-[14px] text-red-600 font-bold">
                                        {
                                            error?.networkError?.result
                                                .errors[0]?.extensions?.errors
                                                ?.email
                                        }
                                    </span>
                                    <span className="text-[14px] block text-red-600 font-bold">
                                        {
                                            error?.networkError?.result
                                                .errors[0]?.message
                                        }
                                    </span>
                                </div>
                                <div className="relative top-3">
                                    <input
                                        autoComplete="off"
                                        onChange={inputEvent}
                                        value={authData.password}
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="peer dark:text-white placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 dark:bg-transparent"
                                        placeholder="Password"
                                    />
                                    <label
                                        htmlFor="password"
                                        className="absolute left-0 -top-3.5 text-gray-600 dark:text-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                    >
                                        Password
                                    </label>
                                    <span className="text-[14px] text-red-600 font-bold">
                                        {
                                            error?.networkError?.result
                                                .errors[0]?.extensions?.errors
                                                ?.password
                                        }
                                    </span>
                                </div>
                                <div className="relative">
                                    <button
                                        disabled={loading ? true : false}
                                        onClick={handleSubmit}
                                        className={`${
                                            loading
                                                ? "bg-indigo-600 "
                                                : "bg-indigo-500 "
                                        } my-5  text-white rounded-md px-3 py-2 capitalize transition-colors duration-300 transform  rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50`}
                                    >
                                        {loading
                                            ? "processing..."
                                            : "Log In author"}
                                    </button>
                                </div>
                                {/*JSON.stringify(authData)*/}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
