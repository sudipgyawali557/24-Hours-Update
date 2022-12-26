import React from "react";
import Link from "next/link";

const Features = () => {
    const data = [
        {
            img: "/images/category.png",
            title: "Category",
            link: "category",
        },
        {
            img: "/images/subcategory.png",
            title: "Sub-Category",
            link: "subcategory",
        },
        {
            img: "/images/post.png",
            title: "Post",
            link: "post",
        },
    ];
    return (
        <>
            <div className="xs:grid xs:grid-cols-1 gap-6 lg:grid lg:grid-cols-3 sm:grid-cols-3 md:grid-cols-2 lg:px-10 lg:py-10 xs:px-4 py-10">
                {data.map((item) => (
                    <div key={item.title}>
                        <Link
                            href={{
                                pathname: "/" + item.link,
                            }}
                        >
                            <div>
                                <div className="border border-sky-800 bg-white rounded-xl h-36 shadow-xl hover:cursor-pointer transition-all hover:scale-110 delay-100 hover:border-2 hover:border-yellow-400 hover:bg-sky-100 text-center flex items-center justify-center ">
                                    <img src={item.img} className="h-32" />
                                </div>
                                <p className="text-center pt-4 text-white font-bold text-black-700 capitalize text-sm">
                                    {item.title}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};
export default Features;
