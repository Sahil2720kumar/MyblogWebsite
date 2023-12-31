"use client";
import Link from "next/link";
import react, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { RESET_PASSWORD } from "@/utils/mutations";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ResetpasswordForm({ params, searchParams }) {
    const router = useRouter();
    console.log(params, searchParams);
    const [resetPassword, { data, loading, error }] =
        useMutation(RESET_PASSWORD);

    const [authData, setAuthData] = useState({
        password: "",
        password_confirmation: ""
    });
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
            console.log("try click");
            const { data } = await resetPassword({
                variables: {
                    data: {
                        ...authData,
                        email: params?.email,
                        signature: searchParams?.signature
                    }
                }
            });

            // Check if the mutation was successful
            if (data && data.message) {
                toast.success(data?.message?.message, {
                    position: "top-center"
                });
                router.push(`/signin/`)
            } else {
                toast.error("Error Occured Setting New Password.pleased try again later", {
                    position: "top-center"
                });
            }
        } catch (e) {
            if (
                error?.networkError?.result.errors[0]?.extensions?.code ===
                "UNAUTHENTICATED"
            ) {
                toast.error(error?.networkError?.result.errors[0]?.message, {
                    position: "top-center"
                });
            } else {
                toast.error("Error Occured Setting New Password And Try Again.", {
                    position: "top-center"
                });
            }
        }
    };
    return (
        <form method="POST">
            <div className="-mx-2 ">
                <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label
                        htmlFor="password"
                        className="block md:text-[16px] mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                        New Password
                    </label>
                    <input
                        onChange={inputEvent}
                        name="password"
                        id="password"
                        type="password"
                        value={authData.password}
                        placeholder="••••••••"
                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <span className="text-[14px] text-red-600 font-bold">
                        {
                            error?.networkError?.result.errors[0]?.extensions
                                ?.errors?.password
                        }
                    </span>
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label
                        htmlFor="password_confirmation"
                        className="block mb-2 md:text-[16px] text-sm text-gray-600 dark:text-gray-200"
                    >
                        Confirm New Password
                    </label>
                    <input
                        onChange={inputEvent}
                        name="password_confirmation"
                        id="password_confirmation"
                        type="password"
                        value={authData.password_confirmation}
                        placeholder="••••••••"
                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <span className="text-[14px] text-red-600 font-bold">
                        {
                            error?.networkError?.result.errors[0]?.extensions
                                ?.errors?.password_confirmation
                        }
                    </span>
                </div>

                <button
                    type="submit"
                    disabled={loading ? true : false}
                    onClick={handleSubmit}
                    className={`${
                        loading ? "bg-indigo-600 " : "bg-indigo-500 "
                    } w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50`}
                >
                    {loading ? "processing..." : "Reset Password"}
                </button>
                {/* JSON.stringify(authData) */}
            </div>
        </form>
    );
}
