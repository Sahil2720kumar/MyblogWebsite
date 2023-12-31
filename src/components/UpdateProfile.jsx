"use client";
import react, { useState } from "react";
import { toast } from "react-toastify";

export default function UpdateProfile() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        name: "",
        describtion: "",
        contact_no: "",
        current_address: "",
        permanant_address: "",
        birthday: "",
        email: "",
        gender: "",
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
        console.log(data);
        setIsLoading(true);
        toast.warning("this feature is comming soon", {
            position: "top-center"
        });
    };
    return (
        <form method="POST" className="pt-8">
            <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm md:text-[16px]  text-gray-600 dark:text-gray-200"
                    >
                        First Name
                    </label>
                    <input
                        onChange={inputEvent}
                        type="text"
                        id="name"
                        name="name"
                        value={data.name}
                        placeholder="John deo "
                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
            </div>
            <div className="mt-4">
                <label
                    htmlFor="describtion"
                    className="block mb-2 text-sm md:text-[16px]  text-gray-600 dark:text-gray-200"
                >
                    Your bio
                </label>
                <textarea
                    id="describtion"
                    name="describtion"
                    value={data.describtion}
                    onChange={inputEvent}
                    rows="4"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Write your bio here..."
                ></textarea>
            </div>
            <div className="mt-4">
                <label
                    htmlFor="email"
                    className="block mb-2 md:text-[16px] text-sm text-gray-600 dark:text-gray-200"
                >
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
            <div className="mt-4">
                <label
                    htmlFor="gender"
                    className="block mb-2 md:text-[16px] text-sm text-gray-600 dark:text-gray-200"
                >
                    Gender
                </label>
                <input
                    name="gender"
                    id="gender"
                    onChange={inputEvent}
                    type="gender"
                    value={data.gender}
                    placeholder="Male"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>

            <div className="mt-4">
                <label
                    htmlFor="contact_no"
                    className="block mb-2 text-sm md:text-[16px] text-gray-600 dark:text-gray-200"
                >
                    Phone Number
                </label>
                <input
                    name="contact_no"
                    id="contact_no"
                    onChange={inputEvent}
                    type="number"
                    value={data.contact_no}
                    placeholder="+91 1111111111"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mt-4">
                <label
                    htmlFor="current_address"
                    className="block mb-2 md:text-[16px] text-sm text-gray-600 dark:text-gray-200"
                >
                    Current Address
                </label>
                <input
                    name="current_address"
                    id="current_address"
                    onChange={inputEvent}
                    type="text"
                    value={data.current_address}
                    placeholder="address here.."
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mt-4">
                <label
                    htmlFor="permanant_address"
                    className="block mb-2 md:text-[16px] text-sm text-gray-600 dark:text-gray-200"
                >
                    Permanant Address
                </label>
                <input
                    name="permanant_address"
                    id="permanant_address"
                    onChange={inputEvent}
                    type="text"
                    value={data.permanant_address}
                    placeholder="permanant address here.."
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div class="mt-4 relative max-w-sm">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        ariaHidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                </div>
                <input
                    type="date"
                    id="birthday"
                    name="birthday"
                    onChange={inputEvent}
                    value={data.birthday}
                    className="block w-full px-5 pl-8 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Select date"
                />
            </div>
            <button
                type="submit"
                disabled={isLoading ? true : false}
                onClick={handleSubmit}
                className={`${
                    isLoading ? "bg-indigo-600 " : "bg-indigo-500 "
                } w-full px-6 py-3 mt-4 text-sm md:text-[16px] font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50`}
            >
                {isLoading ? "processing..." : "Update Profile "}
            </button>
            
        </form>
    );
}
