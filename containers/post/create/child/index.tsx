import { isString } from "lodash";
import React, { useEffect, useState } from "react";
import BackButton from "../../../../components/BackButton/BackButton";
import Loader from "../../../../components/Loader";

export default function Create(props: any) {
    // // to update the state after create
    // function updateOnCreate(data: News) {
    //     let newsData: Array<News> = [...news];
    //     newsData.push(data);
    //     setNews(newsData);
    // }

    // // to update the state after Edit
    // function updateOnEdit(data: any) {
    //     let newsData = [...news];
    //     let index = news.findIndex((item: News) => item.id === data.id);
    //     newsData[index] = data;
    //     setNews(newsData);
    // }
    // // to handle edit
    // function handleEdit(data: any) {
    //     const editProps = {
    //         // Component: Create,
    //         updateOnEdit,
    //         updateOnCreate,
    //         data,
    //     };
    //     // openSlidePane(editProps);
    // }
    return (
        <>
            <BackButton />
            <div className="w-[70vw] m-auto shadow-lg py-10 px-6 mb-4 bg-white">
                <p className="font-semibold text-xl py-2">
                    {props.edit ? "Edit News" : "Create Post"}
                </p>
                <form onSubmit={props.handleSubmit(props.onSubmit)}>
                    <div className="text-gray-700 pt-2 mb-2">
                        <label
                            className="mb-1"
                            htmlFor="forms-validationInputCode_success"
                        >
                            Title:{" "}
                        </label>
                        <input
                            {...props.register("title")}
                            className="w-full focus:outline-none h-10 px-3 text-base placeholder-gray-600 border border-gray-300 rounded-lg focus:shadow-outline"
                            type="text"
                            id="forms-validationInputCode_success"
                        />
                        <div className="invalid-feedback">
                            {props.errors.title?.message}
                        </div>
                    </div>
                    <p>Description:</p>
                    <div className="mb-4 w-full bg-gray-50 rounded border border-gray-200">
                        {/* <div className="flex justify-between items-center py-2 px-3 border-b"> */}
                        {/* <div className="flex flex-wrap p-4 items-center divide-gray-200 sm:divide-x"></div> */}
                        {/* </div> */}
                        <div className="py-2 px-4 bg-white rounded-b-lg">
                            <label htmlFor="editor" className="sr-only">
                                Create News
                            </label>
                            <textarea
                                {...props.register("description")}
                                id="editor"
                                rows={10}
                                className="block px-0 w-full text-sm text-gray-800 bg-white border-0 focus:outline-none"
                                placeholder="Create a post..."
                                required
                            ></textarea>
                            <div className="invalid-feedback">
                                {props.errors.description?.message}
                            </div>
                        </div>
                    </div>
                    <div className="space-x-1 sm:pr-4">
                        {/* <button
                                        {...props.register("attachment")}
                                        type="button"
                                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                    <div className="invalid-feedback">
                                        {props.errors.attachment?.message}
                                    </div> */}
                        <div className="text-gray-700 pt-1">
                            <label
                                className=" mb-1"
                                htmlFor="forms-validationInputCode_success"
                            >
                                Thumbnail
                            </label>
                            <input
                                {...props.register("thumbnail")}
                                className={`w-full h-8 px-3 text-base placeholder-gray-600 border border-gray-300 rounded-lg focus:shadow-outline ${
                                    props.errors.thumbnail ? "is-invalid" : ""
                                }`}
                                type="file"
                                id="forms-validationInputCode_success"
                            />
                            <div className="invalid-feedback">
                                {props.errors.thumbnail?.message}
                            </div>
                        </div>

                        <div className="text-gray-700 pt-1">
                            <label
                                className=" mb-1"
                                htmlFor="forms-validationInputCode_success"
                            >
                                Cover Image
                            </label>
                            <input
                                {...props.register("coverImage")}
                                className={`w-full h-8 px-3 text-base placeholder-gray-600 border border-gray-300 rounded-lg focus:shadow-outline ${
                                    props.errors.coverImage ? "is-invalid" : ""
                                }`}
                                type="file"
                                id="forms-validationInputCode_success"
                            />
                            <div className="invalid-feedback">
                                {props.errors.coverImage?.message}
                            </div>
                            {props.coverImage &&
                                props.coverImage.length !== 0 && (
                                    <div className="m-2">
                                        <img
                                            src={
                                                isString(props.coverImage)
                                                    ? props.coverImage
                                                    : URL.createObjectURL(
                                                          props.coverImage[0]
                                                      )
                                            }
                                            alt={props.coverImage[0]}
                                            className="h-40 w-40 object-top object-cover"
                                        />
                                    </div>
                                )}
                        </div>
                    </div>
                    <div className="flex items-center pt-4 justify-end">
                        <button
                            type="submit"
                            disabled={props.loading}
                            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-green-900"
                        >
                            {props.edit ? "Update" : "Create"}
                            {""}
                            {props.loading && <Loader />}
                        </button>
                        <button
                            className="bg-red-700 px-5 py-2.5 rounded-lg hover:bg-red-900 hover:text-white text-white font-medium text-sm ml-2"
                            onClick={() => props.reset()}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
