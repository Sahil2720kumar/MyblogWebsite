import Form from "@/components/Form"

export const metadata = {
    title: "Contact",
    description:
        "Explore a world of knowledge with DailyLearn – your go-to destination for insightful articles, tutorials, and resources. Elevate your learning journey today!"
};


export default function Contact() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <div>
                    <p className="font-medium text-indigo-500 dark:text-indigo-400 md:text-2xl">
                        Contact us
                    </p>

                    <h1 className="mt-2 text-2xl md:text-[40px] font-semibold text-gray-800 md:text-3xl dark:text-white">
                        Chat to our friendly team
                    </h1>

                    <p className="mt-3 text-gray-500 dark:text-gray-400 md:text-xl">
                        We’d love to hear from you. Please fill out this form or
                        shoot us an email.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        <div>
                            <span className=" inline-block p-3 text-indigo-500 rounded-full bg-indigo-100/80 dark:bg-gray-800">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className=""
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                    />
                                </svg>
                            </span>

                            <h2 className="mt-4 text-base md:text-xl font-medium text-gray-800 dark:text-white">
                                Email
                            </h2>
                            <p className="mt-2 text-sm md:text-[16px] text-gray-500 dark:text-gray-400">
                                Our friendly team is here to help.
                            </p>
                            <p className="mt-2 text-sm md:text-[16px] text-indigo-500 dark:text-indigo-400">
                                sahilkr2909@gmail.com
                            </p>
                        </div>

                        <div>
                            <span className="inline-block p-3 text-indigo-500 rounded-full bg-indigo-100/80 dark:bg-gray-800">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                </svg>
                            </span>

                            <h2 className="mt-4 md:text-xl text-base font-medium text-gray-800 dark:text-white">
                                Office
                            </h2>
                            <p className="mt-2 text-sm md:text-[16px]  text-gray-500 dark:text-gray-400">
                                Come say hello at our office HQ.
                            </p>
                            <p className="mt-2 text-sm md:text-[16px]  text-indigo-500 dark:text-indigo-400">
                                Kalibari Rd, Dibrugarh, Assam 786001
                            </p>
                        </div>

                        <div>
                            <span className="inline-block p-3 text-indigo-500 rounded-full bg-indigo-100/80 dark:bg-gray-800">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                    />
                                </svg>
                            </span>

                            <h2 className="mt-4 text-xl text-base font-medium text-gray-800 dark:text-white">
                                Phone
                            </h2>
                            <p className="mt-2 md:text-[16px]  text-sm text-gray-500 dark:text-gray-400">
                                Mon-Fri from 8am to 5pm.
                            </p>
                            <p className="mt-2 md:text-[16px]  text-sm text-indigo-500 dark:text-indigo-400">
                               +91 6026622188
                            </p>
                        </div>
                    </div>

                    <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
                       <Form/>
                    </div>
                </div>
            </div>
        </section>
    );
}
