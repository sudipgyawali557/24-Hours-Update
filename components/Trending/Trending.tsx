import React from "react";
const Trending = () => {
    return (
        <>
            <p className="bg-sky-900 text-white inline-block text-xs font-bold px-3 py-1 rounded uppercase">
                Trending
            </p>
            <div className="xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-3 md:grid md:grid-cols-4 lg:grid lg:grid-cols-6 gap-2 pb-12">
                <div className="bg-white rounded shadow-md">
                    <div className="relative">
                        <div className="h-[130px] w-[100%]">
                            <img
                                src={"/images/news.jpg"}
                                className="h-[100%] w-[100%] blur-sm object-cover "
                            />
                        </div>
                        <div className="absolute top-0 bottom-0 left-0 right-0">
                            <img
                                src={"/images/news.jpg"}
                                className="h-[100%] w-[100%] object-contain border border-gray-100 rounded"
                            />
                        </div>
                    </div>
                    <p className="text-sm font-bold p-4 text-gray-600">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                    </p>
                </div>
                <div className="bg-white rounded shadow-md">
                    <div className="relative">
                        <div className="h-[130px] w-[100%]">
                            <img
                                src={"/images/news1.jpg"}
                                className="h-[100%] w-[100%] blur-sm object-cover "
                            />
                        </div>
                        <div className="absolute top-0 bottom-0 left-0 right-0">
                            <img
                                src={"/images/news1.jpg"}
                                className="h-[100%] w-[100%] object-contain border border-gray-100 rounded"
                            />
                        </div>
                    </div>
                    <p className="text-sm font-bold p-4 text-gray-600">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                    </p>
                </div>{" "}
                <div className="bg-white rounded shadow-md">
                    <div className="relative">
                        <div className="h-[130px] w-[100%]">
                            <img
                                src={"/images/news.jpg"}
                                className="h-[100%] w-[100%] blur-sm object-cover "
                            />
                        </div>
                        <div className="absolute top-0 bottom-0 left-0 right-0">
                            <img
                                src={"/images/news.jpg"}
                                className="h-[100%] w-[100%] object-contain border border-gray-100 rounded"
                            />
                        </div>
                    </div>
                    <p className="text-sm font-bold p-4 text-gray-600">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                    </p>
                </div>{" "}
                <div className="bg-white rounded shadow-md">
                    <div className="relative">
                        <div className="h-[130px] w-[100%]">
                            <img
                                src={"/images/news1.jpg"}
                                className="h-[100%] w-[100%] blur-sm object-cover "
                            />
                        </div>
                        <div className="absolute top-0 bottom-0 left-0 right-0">
                            <img
                                src={"/images/news1.jpg"}
                                className="h-[100%] w-[100%] object-contain border border-gray-100 rounded"
                            />
                        </div>
                    </div>
                    <p className="text-sm font-bold p-4 text-gray-600">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                    </p>
                </div>{" "}
                <div className="bg-white rounded shadow-md">
                    <div className="relative">
                        <div className="h-[130px] w-[100%]">
                            <img
                                src={"/images/news.jpg"}
                                className="h-[100%] w-[100%] blur-sm object-cover "
                            />
                        </div>
                        <div className="absolute top-0 bottom-0 left-0 right-0">
                            <img
                                src={"/images/news.jpg"}
                                className="h-[100%] w-[100%] object-contain border border-gray-100 rounded"
                            />
                        </div>
                    </div>
                    <p className="text-sm font-bold p-4 text-gray-600">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                    </p>
                </div>{" "}
                <div className="bg-white rounded shadow-md">
                    <div className="relative">
                        <div className="h-[130px] w-[100%]">
                            <img
                                src={"/images/news1.jpg"}
                                className="h-[100%] w-[100%] blur-sm object-cover "
                            />
                        </div>
                        <div className="absolute top-0 bottom-0 left-0 right-0">
                            <img
                                src={"/images/news1.jpg"}
                                className="h-[100%] w-[100%] object-contain border border-gray-100 rounded"
                            />
                        </div>
                    </div>
                    <p className="text-sm font-bold p-4 text-gray-600">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                    </p>
                </div>
            </div>
        </>
    );
};
export default Trending;
