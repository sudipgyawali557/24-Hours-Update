import React from "react";
import LatestPost from "../../components/LatestPost/LatestPost";
const Index = () => {
    return (
        <>
            <div className="xs:px-6 lg:px-20 py-4">
                <div className="flex justify-center">
                    <img src="/images/ads1.jpg" />
                </div>
                <div className="pt-2">
                    <nav
                        className="flex py-3 text-gray-700"
                        aria-label="Breadcrumb"
                    >
                        <ol className="inline-flex items-center space-x-1 md:space-x-3 flex-wrap">
                            <span className="text-sm uppercase">
                                You are at:
                            </span>
                            <li>
                                <div className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-gray-600"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <a
                                        href="#"
                                        className="ml-1 text-sm font-medium text-sky-700 hover:text-sky-900 md:ml-2"
                                    >
                                        Latest News
                                    </a>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="ml-1 text-sm font-medium text-gray-800 md:ml-2">
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="border-b border-gray-200">
                    <h1 className="text-lg font-bold">
                        {" "}
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                    </h1>
                    <p className="py-2 text-gray-600 text-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicingLorem
                        ipsum dolor, sit amet consectetur adipisicing Lorem
                        ipsum dolor, sit amet consectetur adipisicing Lorem
                        ipsum dolor, sit amet consectetur adipisicing Lorem
                        ipsum dolor, sit amet consectetur adipisicing Lorem
                        ipsum dolor, sit amet consectetur adipisicing
                    </p>
                    <div className="flex items-center justify-between pb-2 xs:w-full lg:w-9/12 flex-wrap xs:gap-4 lg:gap-0">
                        <div className="flex items-center flex-wrap">
                            <div className="rounded-full w-20 h-20 bg-yellow-300 flex items-center justify-center shadow-md">
                                <img src="/images/logopng.png" />
                            </div>
                            <div className="text-sm pl-3">
                                <span>Created By:</span>
                                <span className="text-sky-700 pl-1">
                                    Rahul Sah
                                </span>
                                <p>Kathmandu</p>
                                <span className="text-gray-700">
                                    Published on:
                                </span>
                                <span className="text-gray-700">
                                    August 1, 2023
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-[#023e84] rounded-sm px-4 pt-1 hover:bg-sky-900 cursor-pointer mr-1">
                                <i className="bx bxl-facebook text-white text-2xl" />
                            </div>
                            <div className="bg-[#2687b9] rounded-sm px-4 pt-1 hover:bg-sky-500 cursor-pointer mr-1">
                                <i className="bx bxl-linkedin text-white text-2xl" />
                            </div>
                            <div className="bg-[#1d9e10] rounded-sm px-4 pt-1 hover:bg-green-700 cursor-pointer mr-1">
                                <i className="bx bxl-whatsapp text-white text-2xl" />
                            </div>
                            <div className="bg-[#42bcf1] rounded-sm px-4 pt-1 hover:bg-sky-600 cursor-pointer">
                                <i className="bx bxl-twitter text-white text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between py-4 flex-wrap xs:gap-2 lg:gap-0">
                    <div className=" lg:w-[15%] px-4">
                        <img
                            src="/images/ads2.jpg"
                            className="sticky top-0 w-auto"
                        />
                    </div>
                    <div className=" lg:w-[60%]">
                        <div className="rounded-sm border-b border-gray-200">
                            <img
                                src="/images/news.jpg"
                                className="h-auto w-[100%] object-cover object-top rounded-md"
                            />
                            <p className="text-md italic text-gray-600 py-2">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Lorem ipsum dolor,
                                sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="py-4 text-md text-gray-800">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Lorem ipsum dolor,
                                sit amet consectetur adipisicing elit. Lorem
                                ipsum dolor, sit amet consectetur adipisicing
                                elit. Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Lorem ips Lorem
                                ipsum dolor, sit amet consectetur adipisicing
                                elit. Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit.um dolor, sit amet
                                consectetur adipisicing elit. Lorem ipsum dolor,
                                sit amet consectetur adipisicing elit. Lorem
                                ipsum dolor, sit amet consectetur adipisicing
                                elit.
                            </p>
                            <br />
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Lorem ipsum dolor,
                                sit amet consectetur adipisicing elit. Lorem
                                ipsum dolor, sit amet consectetur adipisicing
                                elit. Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Lorem ips Lorem
                                ipsum dolor, sit amet consectetur adipisicing
                                elit. Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit.um dolor, sit amet
                                consectetur adipisicing elit. Lorem ipsum dolor,
                                sit amet consectetur adipisicing elit. Lorem
                                ipsum dolor, sit amet consectetur adipisicing
                                elit.
                            </p>
                            <br />

                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Lorem ipsum dolor,
                                sit amet consectetur adipisicing elit. Lorem
                                ipsum dolor, sit amet consectetur adipisicing
                                elit. Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Lorem ips Lorem
                                ipsum dolor, sit amet consectetur adipisicing
                                elit. Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit.um dolor, sit amet
                                consectetur adipisicing elit. Lorem ipsum dolor,
                                sit amet consectetur adipisicing elit. Lorem
                                ipsum dolor, sit amet consectetur adipisicing
                                elit.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-[25%] px-4">
                        <LatestPost />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Index;
