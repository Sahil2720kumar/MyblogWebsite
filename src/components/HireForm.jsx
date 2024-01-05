"use client";
import react, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { HIRE_SAVE } from "@/utils/mutations";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function HireForm() {
    const [hireSave, { data, loading, error }] = useMutation(HIRE_SAVE);
    const [hireData, setHireData] = useState({
        fullname: "",
        phnumber: "",
        email: "",
        website: ""
    });
    const [skills, setSkills] = useState([]);

    const inputEvent = event => {
        const { name, value } = event.target;
        setHireData(preValue => {
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
            const { data } = await hireSave({
                variables: {
                    data: {
                        ...hireData,
                        skills: skills
                    }
                }
            });

            // Check if the mutation was successful
            if (data && data.message) {
                toast.success(data?.message?.message, {
                    position: "top-center"
                });
            } else {
                toast.error("Error Occured Saving Contact.", {
                    position: "top-center"
                });
            }
        } catch (e) {
            console.log(e);
            toast.error("Error Occured Saving Contact.", {
                position: "top-center"
            });
        }
    };
    return (
        <form method="POST" className="pt-8">
            <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                    <label
                        htmlFor="fullname"
                        className="block mb-2 text-sm md:text-[16px]  text-gray-600 dark:text-gray-200"
                    >
                        First Name
                    </label>
                    <input
                        onChange={inputEvent}
                        type="text"
                        id="fullname"
                        name="fullname"
                        value={hireData.fullname}
                        placeholder="John deo "
                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <span className="text-[14px] text-red-600 font-bold">
                        {
                            error?.networkError?.result.errors[0]?.extensions
                                ?.errors?.fullname
                        }
                    </span>
                </div>
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
                    value={hireData.email}
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <span className="text-[14px] text-red-600 font-bold">
                    {
                        error?.networkError?.result.errors[0]?.extensions
                            ?.errors?.email
                    }
                </span>
            </div>

            <div className="mt-4">
                <label
                    htmlFor="phnumber"
                    className="block mb-2 text-sm md:text-[16px] text-gray-600 dark:text-gray-200"
                >
                    Phone Number
                </label>
                <input
                    name="phnumber"
                    id="phnumber"
                    onChange={inputEvent}
                    type="number"
                    value={hireData.phnumber}
                    placeholder="+91 1111111111"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <span className="text-[14px] text-red-600 font-bold">
                    {
                        error?.networkError?.result.errors[0]?.extensions
                            ?.errors?.phnumber
                    }
                </span>
                {/*<span className="text-[14px] block text-red-600 font-bold">
                    {error?.networkError?.result.errors[0]?.message}
                </span>*/}
            </div>

            <div className="w-full mt-4">
                <label
                    htmlFor="website"
                    className="block mb-2 text-sm md:text-[16px] text-gray-600 dark:text-gray-200"
                >
                    Link to your Resume || Website
                </label>
                <input
                    name="website"
                    id="website"
                    value={hireData.website}
                    onChange={inputEvent}
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="website"
                ></input>
                <span className="text-[14px] text-red-600 font-bold">
                    {
                        error?.networkError?.result.errors[0]?.extensions
                            ?.errors?.website
                    }
                </span>
            </div>

            <div className="w-full mt-4">
                <label className="block mb-2 text-sm md:text-[16px] text-gray-600 dark:text-gray-200">
                    Yours skills
                </label>
                <TagsInput
                    value={skills}
                    onChange={setSkills}
                    name="skills"
                    separators={["Enter", ","]}
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeHolder="Enter Skills"
                />
                <em className="text-gray-600 dark:text-gray-400">
                    press enter to add new skill
                </em>
                <span className="text-[14px] text-red-600 font-bold">
                    {
                        error?.networkError?.result.errors[0]?.extensions
                            ?.errors?.skills
                    }
                </span>
            </div>

            <button
                type="submit"
                disabled={loading ? true : false}
                onClick={handleSubmit}
                className={`${
                    loading ? "bg-indigo-600 " : "bg-indigo-500 "
                } w-full px-6 py-3 mt-4 text-sm md:text-[16px] font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50`}
            >
                {loading ? "processing..." : "Submit"}
            </button>
            {/* JSON.stringify(hireData) */}
        </form>
    );
}
