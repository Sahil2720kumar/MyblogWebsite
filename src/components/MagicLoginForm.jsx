"use client";
import react, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

export default function MagicLoginForm() {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [authData, setAuthData] = useState({
        email: ""
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
        setLoading(true);
        console.log(authData);
        toast.warning("this feature is not available NOW."),
            {
                position: "top-center"
            };
    };
    return (
        <form method="POST">
            <div className="-mx-2 ">
                <div className="flex-1 px-2">
                    <label
                        htmlFor="email"
                        className="block mb-2 md:text-[16px]  text-sm text-gray-600 dark:text-gray-200"
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
                <button
                    type="submit"
                    disabled={loading ? true : false}
                    onClick={handleSubmit}
                    className={`${
                        loading ? "bg-indigo-600 " : "bg-indigo-500 "
                    } w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50`}
                >
                    {loading ? "processing..." : "Log In"}
                </button>
                {/* JSON.stringify(authData) */}
            </div>
        </form>
    );
}
