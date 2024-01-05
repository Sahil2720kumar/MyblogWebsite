"use client";
import react, { useState, useEffect } from "react";
import Card from "@/components/Card";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";
import { getPosts } from "@/services/cmsServices";

export default function CardContainer({ blog }) {
    const [posts, setPosts] = useState([]);
    const [totalPosts, setTotalPosts] = useState(1);
    const [skip, setSkip] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [extraLoading, setExtraLoading] = useState(false);

    const handleInfiniteScroll = () => {
        const cards_containerHeight =
            document.getElementById("cards_container");
        if (
            window?.innerHeight + document?.documentElement?.scrollTop + 1 >=
            cards_containerHeight?.offsetHeight
        ) {
            setSkip(prev => prev + 2);
            setExtraLoading(true);
        }
    };
    const getBlogs = async () => {
        try {
            const res = await getPosts(2, skip);
            const data=res.postsConnection.edges;
            setTotalPosts(res.postsConnection.aggregate.count)
            setIsLoading(false);
            setExtraLoading(false);
            setPosts(prev => [...prev, ...data]);
        } catch (error) {
            console.log("posts error", error);
        }
    };
    useEffect(() => {
        if (totalPosts <= skip) {
            console.log(totalPosts, skip);
            return;
        }
         getBlogs();
    }, [skip]);

    useEffect(() => {
        console.log("useEffect called..");
        window.addEventListener("scroll", handleInfiniteScroll);
        return () => window.removeEventListener("scroll", handleInfiniteScroll);
    }, []);

    return (
        <div className="md:flex md:items-center md:flex-col md:justify-center">
            <div
                id="cards_container"
                className=" my-4 flex items-center justify-center md:flex-row  md:flex-wrap flex-col space-y-5 p-3 px-6 space-y-2 md:space-y-0 md:gap-8"
            >
                {isLoading ? (
                    <div className="h-[280px] flex items-center justify-center">
                        <PuffLoader color="#3f6ff5" />
                    </div>
                ) : (
                    posts.map((currentVal, index) => {
                        return (
                            <Card
                                key={index}
                                cardContent={currentVal.node}
                                buttonContent={
                                    blog ? "Read More" : "Start Course"
                                }
                                blog={blog}
                            />
                        );
                    })
                )}
            </div>
            {extraLoading ? (
                <div className="my-4 md:block h-[280px] flex md:flex-col items-center justify-center">
                    <PuffLoader color="#3f6ff5" />
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
