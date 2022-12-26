import React from "react";

const Pagination = (props) => {
    // debugger;
    return (
        <div className="flex justify-end space-x-1 bg-white py-4 px-2">
            <div className="ml-10">
                <select
                    onChange={(e) => {
                        props?.pagination?.setPagination((prev: any) => ({
                            ...prev,
                            SKIP: 0,
                            TAKE: 10,
                            sort: e.target.value,
                        }));
                    }}
                    className="flex items-center px-4 py-2 text-white bg-sky-600 focus:outline-none"
                >
                    <option value={"DESC"}>Descending</option>
                    <option value={"ASC"}>Ascending</option>
                </select>
            </div>
            <button
                onClick={() => {
                    props?.pagination?.setPagination((prev: any) => ({
                        ...prev,
                        SKIP: prev.SKIP - prev.TAKE,
                    }));
                }}
                disabled={Number(props?.pagination?.pagination.SKIP) == 0}
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white border border-gray-300"
            >
                Previous
            </button>
            <div className="ml-10">
                <select
                    onChange={(e) => {
                        props?.pagination?.setPagination((prev: any) => ({
                            ...prev,
                            SKIP: 0,
                            TAKE: Number(e.target.value),
                        }));
                    }}
                    className="flex items-center px-4 py-2 text-white font-semibold bg-sky-400 focus:outline-none border-none"
                >
                    <option value={10}>10</option>
                    <option value={30}>30</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </div>
            {/* {Array.from(Array(props.pagination.SKIP).keys()).map((page) => (
                    <button
                        href="#"
                        className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
                    >
                        1
                    </button>
                ))} */}
            <button
                onClick={() => {
                    props?.pagination?.setPagination((prev: any) => ({
                        ...prev,
                        SKIP: prev.SKIP + prev.TAKE,
                    }));
                }}
                className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white  border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
