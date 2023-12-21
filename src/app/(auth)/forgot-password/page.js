import ForgotpasswordForm from "@/components/ForgotpasswordForm";
import Link from "next/link";

export default function ForgotPasswordForm() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center container px-6 py-12 mx-auto">
                <div className="p-4 max-w-[600px]  py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
                    <h1 className="uppercase text-gray-800 dark:text-stone-100 text-center text-2xl md:text-[35px] font-bold my-3 ">
                        Forgot Password
                    </h1>
                    <p className="text-gray-800 dark:text-stone-100 text-center md:text-[18px]  my-3">
                        Don't worry we reset your password, just enter your
                        email below and we will send verfication link to your
                        email address
                    </p>
                    <p className="flex mb-5 flex-col items-center text-gray-800 dark:text-stone-100 justify-center mt-3 text-center">
                        <Link
                            href="/signin"
                            className="underline md:text-[16px]  text-gray-800 dark:text-stone-100 "
                        >
                            Go back to login
                        </Link>
                    </p>
                    <ForgotpasswordForm />
                </div>
            </div>
        </section>
    );
}
