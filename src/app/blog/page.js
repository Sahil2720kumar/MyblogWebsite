import react from "react";
import CardContainer from "@/components/CardContainer";

export const metadata = {
    title: "Blogs",
    description:
        "Explore a diverse collection of insightful blogs on DailyLearn's curated list. Discover engaging content covering a wide range of topics to enhance your knowledge and feed your curiosity. Dive into a world of valuable information with our handpicked blog selection."
};

export default function Blog() {
    return (
        <div className="bg-gray-50 dark:text-white dark:bg-gray-800">
            <div className="py-5">
                <h1 className="dark:text-white  md:text-5xl font-semibold text-center text-indigo-600 text-4xl">
                    Our Blogs
                </h1>
                <CardContainer blog={true} />
            </div>
        </div>
    );
}
