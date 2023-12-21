"use client";
import react, { useState } from "react";

export default function Form() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        fname: "",
        lname: "",
        email: "",
        message: ""
    });

    const inputEvent = event => {
        const { name, value } = event.target;
        setData(preValue => {
            return {
                ...preValue,
                [name]: value
            };
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(data)
    };

    return (
        <form>
            <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                    <label htmlFor="fname" className="block mb-2 text-sm md:text-[16px]  text-gray-600 dark:text-gray-200">
                        First Name
                    </label>
                    <input
                        onChange={inputEvent}
                        type="text"
                        id="fname"
                        name="fname"
                        value={data.fname}
                        placeholder="John "
                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label htmlFor="lname" className="block md:text-[16px]  mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Last Name
                    </label>
                    <input
                        onChange={inputEvent}
                        name="lname"
                        id="lname"
                        type="text"
                        value={data.lname}
                        placeholder="Doe"
                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
            </div>

            <div className="mt-4">
                <label htmlFor="email" className="block md:text-[16px]  mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                </label>
                <input
                    name="email"
                    id="email"
                    onChange={inputEvent}
                    type="email"
                    value={data.email}
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>

            <div className="w-full mt-4">
                <label htmlFor="message" className="block md:text-[16px]  mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    value={data.message}
                    onChange={inputEvent}
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={loading ? true : false}
                onClick={handleSubmit}
                className={`${loading?"bg-indigo-600 ":"bg-indigo-500 "} w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50`}
            >
                {loading ? "processing..." : "Send message"}
            </button>
            {/* JSON.stringify(data) */}
        </form>
    );
}
