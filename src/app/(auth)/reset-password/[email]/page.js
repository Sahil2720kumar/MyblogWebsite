import ResetpasswordForm from "@/components/ResetpasswordForm";
import Link from "next/link";

export default function ResetPasswordForm({params,searchParams}) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center container px-6 py-12 mx-auto">
                <div className="p-4 py-6 max-w-[600px]  rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
                    <h1 className="uppercase text-gray-800 dark:text-stone-100 text-center text-2xl md:text-[36px] font-bold my-3 ">
                        Reset Password
                    </h1>
                    <p className="flex mb-5 flex-col items-center text-gray-800 dark:text-stone-100 justify-center mt-3 text-center">
                        
                        <Link
                            href="/signin"
                            className="underline md:text-[18px]  text-gray-800 dark:text-stone-100 "
                        >
                            Go back to login
                        </Link>
                    </p>
                    <ResetpasswordForm params={params} searchParams={searchParams} />
                </div>
            </div>
        </section>
    );
}
