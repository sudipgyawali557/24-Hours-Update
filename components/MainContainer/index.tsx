import React from "react";
import Link from "next/link";
import { openSlidePane } from "../../helpers/openSlidePane";
import BackButton from "../BackButton/BackButton";

type MainContainerProps = {
    breadcrumb: Array<String>; // breadcrumb key
    children: React.ReactNode;
    component: any; // Create Form
    updateOnEdit: Function; // Create Form
    updateOnCreate: Function; // Create Form
    roles?: any;
};

export default function Index(props: MainContainerProps) {
    let createProps = {
        Component: props.component,
        updateOnCreate: props.updateOnCreate,
        updateOnEdit: props.updateOnEdit,
        data: {},
        roles: props.roles,
    };

    function openModal() {
        openSlidePane(createProps);
    }
    return (
        <>
            <BackButton />
            <div className="col-span-2 border-1 bg-white xs:mx-2 lg:mx-10 mt-10  border-blue-900 rounded-lg p-10 lg:px-16 xs:px-0 py-10">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <Link href="/admin">
                                <div className="inline-flex items-center text-xl font-medium text-gray-700 hover:text-gray-900 cursor-pointer">
                                    <i className="bx bxs-home text-gray-600" />
                                </div>
                            </Link>
                        </li>
                        {props.breadcrumb.map((item: any, index) => (
                            <li key={item}>
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
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className="ml-1 text-sm font-medium text-gray-900 md:ml-2">
                                        {item}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </nav>
                {props.component && (
                    <div className="py-1 text-sm flex justify-end  ">
                        <button
                            className="cursor-pointer flex items-center justify-center bg-green-700 px-4 py-1"
                            onClick={openModal}
                        >
                            <span className="text-sm text-white cursor-pointer font-medium">
                                Add
                            </span>
                        </button>
                    </div>
                )}
                {props.children}
            </div>
        </>
    );
}
