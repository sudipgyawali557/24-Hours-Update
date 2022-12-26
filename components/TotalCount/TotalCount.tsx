import React, { useState, useEffect } from "react";

const bgcolor = [
    "bg-purple-500",
    "bg-yellow-400",
    "bg-pink-400",
    "bg-red-500",
    "bg-green-400",
];
const iconcolor = [
    "text-purple-500",
    "text-yellow-400",
    "text-pink-740",
    "text-red-500",
    "text-green-400",
];
const img: any = {
    "Total Post": "/images/post.png",
    "Total Category": "/images/category.png",
    "Total Trending Post": "/images/trending.png",
    "Total Latest Post": "/images/latest.png",
    "Total Ads": "/images/ads.png",
};
const TotalCount = (props: any) => {
    const [count, setCount] = useState({
        "Total Post": 10,
        "Total Category": 4,
        "Total Trending Post": 0,
        "Total Latest Post": 4,
        "Total Ads": 2,
    });

    return (
        <>
            <div className="xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-2 gap-4 lg:grid-cols-5 pt-14 pb-10 md:grid-cols-4 xs:px-2 lg:pb-8 lg:px-10">
                {count &&
                    Object.entries(count)?.map(([key, value], i): any => {
                        return (
                            <div
                                className="w-full h-28 bg-white flex items-center
                                justify-between rounded-md relative shadow-md"
                                key={key}
                            >
                                <div
                                    className={`absolute xs:-top-[10%] lg:-top-[25%] left-8 w-12 h-12 border-2 border-gray-200 rounded-lg flex items-center justify-center ${iconcolor[i]}`}
                                >
                                    <img src={img[key]} />
                                </div>
                                <div className="text-sm font-semibold flex-1 ml-4 capitalize">
                                    {key.replace(/([A-Z])/g, " $1")}
                                </div>
                                <div
                                    className={` ${bgcolor[i]} h-full w-[35%] flex items-center justify-center text-white shadow-md rounded-tr-md rounded-br-md font-bold`}
                                >
                                    {value}
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default TotalCount;
