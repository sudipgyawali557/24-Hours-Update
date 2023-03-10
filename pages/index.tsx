import Head from "next/head";
import Link from "next/link";
import React from "react";
import Ads from "../components/Ads/Ads";
import BigStory from "../components/BigStory/BigStory";
import Icymi from "../components/Icymi/Icymi";
import LatestPost from "../components/LatestPost/LatestPost";
import TopStory from "../components/TopStory/TopStory";
import Trending from "../components/Trending/Trending";
export default function Home() {
    return (
        <>
            <Head>
                <title>24hourupdate</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Ads />
            <div className="xs:px-6 lg:px-20 py-10">
                <div className="lg:grid md:grid md:grid-cols-12 lg:grid-cols-12 xs:grid xs:gap-6 md:gap-6 lg:gap-6 h-auto ">
                    <div className="md:col-span-3 lg:col-span-3">
                        <BigStory />
                        <TopStory />
                    </div>
                    <div className=" lg:col-span-6 md:col-span-6">
                        <div className="bg-white shadow-md rounded-sm">
                            <Link href={"/singlepage"}>
                                <div className="relative">
                                    <div className="h-[380px] w-[100%]">
                                        <img
                                            src={"/images/oli1.jpg"}
                                            className="h-[100%] w-[100%] blur-sm object-cover rounded-md"
                                        />
                                    </div>
                                    <div className="absolute top-0 bottom-0 left-0 right-0">
                                        <img
                                            src={"/images/oli1.jpg"}
                                            className="h-[100%] w-[100%] object-contain border border-gray-100 rounded-md"
                                        />
                                    </div>
                                </div>
                            </Link>
                            <Link href={"/singlepage"}>
                                <p className="text-lg font-bold text-center py-2">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit.
                                </p>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="bg-white rounded shadow-md h-fit w-full">
                                <div className="relative">
                                    <div className="h-[160px] w-[100%]">
                                        <img
                                            src={"/images/news.webp"}
                                            className="h-[100%] w-[100%] blur-sm object-cover "
                                        />
                                    </div>
                                    <div className="absolute top-0 bottom-0 left-0 right-0">
                                        <img
                                            src={"/images/news.webp"}
                                            className="h-[100%] w-[100%] object-contain border border-gray-100 rounded"
                                        />
                                    </div>
                                </div>
                                <p className="text-sm font-bold p-4 text-gray-600">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                            <div className="bg-white rounded shadow-md">
                                <div className="relative">
                                    <div className="h-[160px] w-[100%]">
                                        <img
                                            src={"/images/election.jpg"}
                                            className="h-[100%] w-[100%] blur-sm object-cover "
                                        />
                                    </div>
                                    <div className="absolute top-0 bottom-0 left-0 right-0">
                                        <img
                                            src={"/images/election.jpg"}
                                            className="h-[100%] w-[100%] object-contain border border-gray-100 rounded"
                                        />
                                    </div>
                                </div>
                                <p className="text-sm font-bold p-4 text-gray-600">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" lg:col-span-3 md:col-span-3 rounded-sm shadow-md p-2 bg-white h-fit">
                        <LatestPost />
                    </div>
                </div>
                <Icymi />
                <Trending />
            </div>
        </>
    );
}
