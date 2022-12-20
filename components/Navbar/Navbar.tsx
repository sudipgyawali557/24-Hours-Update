import React, { useState, useEffect } from "react";
import { menuItems } from "../MenuItems/MenuItems";
import MenuItem from "./MenuItem";

export default function Navbar() {
    const [stickyClass, setStickyClass] = useState("");
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const depthLevel = 0;

    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);
        return () => window.removeEventListener("scroll", stickNavbar);
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 200
                ? setStickyClass("sticky-nav")
                : setStickyClass("");
        }
    };

    return (
        <div className={`navbar ${stickyClass} xs:px-6 lg:px-20`}>
            <nav
                className={`w-full ${
                    navbar ? "bg-transparent" : "bg-transparent"
                } z-50`}
            >
                <div
                    className={`justify-between mx-auto md:items-center lg:flex ${
                        navbar ? "h-auto" : "h-auto"
                    }`}
                >
                    <div className="lg:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-white"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 lg:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        {/* <ul className=" md:flex md:flex-col lg:flex items-center space-y-4 md:space-y-0 w-full"> */}
                        <ul className="items-center justify-center lg:space-y-0 space-y-4 lg:flex w-full">
                            {menuItems.map((menu, index) => {
                                const depthLevel = 0;
                                return (
                                    <MenuItem
                                        items={menu}
                                        key={index}
                                        depthLevel={depthLevel}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
