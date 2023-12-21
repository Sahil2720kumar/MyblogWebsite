import Link from "next/link";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function VerifyMagicLink({ params, searchParams }) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center container px-6 py-12 mx-auto">
                <div className="max-w-[600px] p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
                    <h1 className="uppercase text-gray-800 dark:text-stone-100 text-center text-2xl md:text-[33px] font-bold my-3 ">
                        Magic Link Verification
                    </h1>
                    <p className="text-gray-800 md:text-xl dark:text-stone-100 text-center my-3">
                        We Verify your Link & please wait for a moment
                    </p>
                         <LoadingSpinner />
                    
                    <p className="flex mb-5 flex-col items-center text-gray-800 dark:text-stone-100 justify-center mt-3 text-center">
                        <Link
                            href="/signin"
                            className="underline md:text-[18px]  text-gray-800 dark:text-stone-100 "
                        >
                            Go back to login
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
