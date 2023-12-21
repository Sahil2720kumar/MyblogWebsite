import LoginForm from "@/components/LoginForm";
import Link from "next/link"

export default function SignIn() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center container px-6 py-12 mx-auto">
                <div className="max-w-[600px] p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
                    <h1 className="uppercase text-gray-800 dark:text-stone-100 text-center text-3xl md:text-[38px] font-bold my-3 ">
                        Log In Form{" "}
                    </h1>
                    <p className="flex mb-5 flex-col items-center text-gray-800 dark:text-stone-100 justify-center mt-3 text-center">
                        <span className="md:text-xl ">Don't have an account?</span>
                        <Link href="/signup" className="underline md:text-xl text-gray-800 dark:text-stone-100 ">
                            Get Started!
                        </Link>
                    </p>
                    <LoginForm />
                </div>
            </div>
        </section>
    );
}
