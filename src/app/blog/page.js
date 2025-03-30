import react from "react";
import CardContainer from "@/components/CardContainer";

export const metadata = {
    title: "Blogs",
    description:
        "Explore a diverse collection of insightful blogs on DailyLearn's curated list. Discover engaging content covering a wide range of topics to enhance your knowledge and feed your curiosity. Dive into a world of valuable information with our handpicked blog selection."
};

export default function Blog() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 dark:text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-8">
                        Our Blog Posts
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-12 text-lg">
                        Discover insightful articles and stay updated with the latest knowledge
                    </p>
                    <CardContainer blog={true} />
                </div>
            </div>
        </div>
    );
}
