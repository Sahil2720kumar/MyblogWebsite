"use client";
import React, { useState, useEffect } from "react";
import Card from "@/components/Card";
import PuffLoader from "react-spinners/PuffLoader";
import { getPosts } from "@/services/cmsServices";

export default function CardContainer({ blog }) {
    const [posts, setPosts] = useState([]);
    const [totalPosts, setTotalPosts] = useState(1);
    const [skip, setSkip] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [extraLoading, setExtraLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInfiniteScroll = () => {
        const cardsContainer = document.getElementById("cards_container");
        if (!cardsContainer) return;
        
        const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
        const containerBottom = cardsContainer.offsetHeight;
        
        if (scrollPosition + 1 >= containerBottom) {
            setSkip(prev => prev + 2);
            setExtraLoading(true);
        }
    };

    const getBlogs = async () => {
        try {
            const res = await getPosts(2, skip);
            const data = res.postsConnection.edges;
            setTotalPosts(res.postsConnection.aggregate.count);
            setPosts(prev => [...prev, ...data]);
        } catch (error) {
            setError(error.message);
            console.error("Failed to fetch posts:", error);
        } finally {
            setIsLoading(false);
            setExtraLoading(false);
        }
    };

    useEffect(() => {
        if (totalPosts <= skip) return;
        getBlogs();
    }, [skip, totalPosts]);

    useEffect(() => {
        const scrollHandler = () => {
            if (!extraLoading) handleInfiniteScroll();
        };
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [extraLoading]);

    if (error) {
        return (
            <div className="min-h-[200px] flex items-center justify-center text-red-600">
                <p>Error loading posts: {error}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center">
            <div
                id="cards_container"
                className="w-full max-w-7xl my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6"
            >
                {isLoading ? (
                    <div className="col-span-full h-[280px] flex items-center justify-center">
                        <PuffLoader color="#3f6ff5" />
                    </div>
                ) : posts.length === 0 ? (
                    <div className="col-span-full h-[200px] flex items-center justify-center text-gray-500">
                        No posts available
                    </div>
                ) : (
                    posts.map((currentVal, index) => (
                        <Card
                            key={`${currentVal.node.id || index}`}
                            cardContent={currentVal.node}
                            buttonContent={blog ? "Read More" : "Start Course"}
                            blog={blog}
                        />
                    ))
                )}
            </div>
            {extraLoading && (
                <div className="py-4 flex items-center justify-center">
                    <PuffLoader color="#3f6ff5" size={40} />
                </div>
            )}
        </div>
    );
}
