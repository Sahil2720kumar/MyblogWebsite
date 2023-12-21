import SignupForm from "@/components/SignupForm";
import Link from "next/link";

export default function SignIn() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center container px-6 py-12 mx-auto">
                <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8 max-w-[600px]">
                    <h1 className="uppercase text-gray-800 dark:text-stone-100 text-center text-3xl md:text-[36px] font-bold my-3 ">
                        Sign Up Form{" "}
                    </h1>
                    <p className="flex text-gray-800 dark:text-stone-100 flex-col items-center justify-center mt-3 mb-5 text-center">
                        <span className="md:text-xl">You already have an account?</span>
                        <Link href="/signin" className="underline md:text-xl ">
                            Get Started!
                        </Link>
                    </p>
                    <SignupForm />
                </div>
            </div>
        </section>
    );
}
