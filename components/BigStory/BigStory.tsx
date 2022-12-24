import React from "react";
const BigStory = () => {
    return (
        <>
            <div className="bg-white rounded-sm shadow-md">
                <p className="font-extrabold text-gray-900 text-lg p-2">
                    Big Story
                </p>
                <div className="relative">
                    <div className="h-[200px] w-[100%]">
                        <img
                            src={"/images/news1.jpg"}
                            className="h-[100%] w-[100%] blur-sm object-cover "
                        />
                    </div>
                    <div className="absolute top-0 bottom-0 left-0 right-0">
                        <img
                            src={"/images/news1.jpg"}
                            className="h-[100%] w-[100%] object-contain border border-brown-100"
                        />
                    </div>
                </div>
                <p className="text-sm font-bold p-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </div>
        </>
    );
};
export default BigStory;
