export const metadata = {
    title: "Terms",
    description:
        "Explore a world of knowledge with DailyLearn – your go-to destination for insightful articles, tutorials, and resources. Elevate your learning journey today!"
};

export default function Terms() {
    return (
        <div className="min-h-screen p-3 bg-gray-50 dark:bg-gray-800 dark:text-white w-screen flex items-center flex-col">
            <h2 className="text-indigo-500 text-4xl font-bold mb-4">
                Terms of Service
            </h2>
            <p className="text-gray-700 dark:text-stone-100 mb-8">
                Welcome to DailyLearn! By accessing or using our website, you
                agree to comply with and be bound by the following terms and
                conditions.
            </p>
            <h3 className="text-indigo-500 text-2xl font-bold mb-4">
                Use of Our Service
            </h3>
            <p className="text-gray-700 dark:text-stone-100 mb-8">
                DailyLearn provides educational content for personal use. You
                agree not to reproduce, duplicate, copy, sell, resell, or
                exploit any portion of the service without explicit written
                permission from us.
            </p>
            <h3 className="text-indigo-500 text-2xl font-bold mb-4">
                User Account
            </h3>
            <p className="text-gray-700 dark:text-stone-100 mb-8">
                To access certain features of our service, you may be required
                to create an account. You are responsible for maintaining the
                confidentiality of your account information and agree to notify
                us immediately of any unauthorized use.
            </p>
            <h3 className="text-indigo-500 text-2xl font-bold mb-4">Content</h3>
            <p className="text-gray-700 dark:text-stone-100 mb-8">
                The content on DailyLearn is for informational purposes only. We
                do not guarantee the accuracy or completeness of any
                information. Your use of the content is at your own risk.
            </p>
            <h3 className="text-indigo-500 text-2xl font-bold mb-4">
                Termination
            </h3>
            <p className="text-gray-700 dark:text-stone-100 mb-8">
                We reserve the right to terminate or suspend your account at any
                time without prior notice for any violation of these terms.
            </p>
            <h3 className="text-indigo-500 text-2xl font-bold mb-4">
                Changes to Terms
            </h3>
            <p className="text-gray-700 dark:text-stone-100 ">
                DailyLearn reserves the right to update or modify these terms at
                any time. We will notify you of any changes by posting the new
                terms on this page.
            </p>
        </div>
    );
}
