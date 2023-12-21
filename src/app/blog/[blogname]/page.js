import Image from 'next/image'

export default function CourseName({ params, searchParams }) {
    const { blogname } = params;
    return (
        <div className=" p-5  bg-gray-50 dark:text-white dark:bg-gray-800">
            <div className=" py-4 px-6 rounded-md shadow-md bg-white dark:bg-gray-700">
                <h1 className="text-center text-2xl font-bold my-3 ">
                    {blogname} Introduction to JavaScript + Setup | JavaScript
                    Tutorial in Hindi #1
                </h1>
                <div className="flex items-center justify-center">
                    <span>
                        <span className="mr-0.5  rounded-full min-h-[10px] bg-indigo-300">
                            <Image
                                src="/vercel.svg"
                                width={20}
                                height={20}
                                className="inline px-0.5 "
                                alt="Picture of the author"
                            ></Image>
                        </span>
                        sahil kumar sah
                    </span>
                    <span className="text-[15px] px-3 dark:text-gray-300 text-gray-600">
                         November 20, 2023
                    </span>
                </div>
                {/* start blog content */}
                  <p className="mt-4 text-gray-900 dark:text-stone-100" >
                    Computer is Dumb!
                    When was the last time you ordered some cereal and got DVDs of Serial?
                    Programming is the act of constructing a program, a set of precise instructions telling a computer what to do.
                    What is EcmaScript?
                    ECMAScript is a standard on which JavaScript is based!
                    It was created to ensure that different documents on JavaScript are actually talking about the same language.
                    JavaScript and ECMAScript can almost always be used interchangeably. JavaScript is very literal in what it allows.
                    How to execute JavaScript?
                    JavaScript can be executed right inside one's browser. You can open the JavaScript console and start writing JavaScript there.
                    Another way to execute JavaScript is a runtime like Node.js which can be installed and used to run JavaScript code.
                    Yet another way to execute JavaScript is by inserting it inside
                    Yet another way to execute JavaScript is by inserting it inside
                    Yet another way to execute JavaScript is by inserting it inside
                    Yet another way to execute JavaScript is by inserting it inside
                    Yet another way to execute JavaScript is by inserting it inside
                    Yet another way to execute JavaScript is by inserting it inside
                    Yet another way to execute JavaScript is by inserting it inside
                    Yet another way to execute JavaScript is by inserting it inside
                    Yet another way to execute JavaScript is by inserting it inside
                    Yet another way to execute JavaScript is by inserting it inside
                    Yet another way to execute JavaScript is by inserting it inside
                  </p>
                {/* end blog content */}
            </div>
        </div>
    );
}
