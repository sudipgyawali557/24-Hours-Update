import React from "react";
import Loader from "../../../../components/Loader";
export default function Create(props: any) {
    return (
        <div className="card m-3">
            <div className="card-body">
                <form onSubmit={props.handleSubmit(props.onSubmit)}>
                    <div className="font-medium w-full rounded text-md shadow-md border-2 border-gray-200 mb-2">
                        <h3 className="py-2 text-center">Sub-Category</h3>
                    </div>
                    <div className="text-gray-700 pt-2 ">
                        <label
                            className="mb-1"
                            htmlFor="forms-validationInputCode_success"
                        >
                            Name:{" "}
                        </label>
                        <input
                            {...props.register("name")}
                            className={`w-full h-8 px-3 text-base focus:outline-none placeholder-gray-600 border border-gray-300 rounded-sm focus:shadow-outline ${
                                props.errors.name ? "is-invalid" : ""
                            }`}
                            type="text"
                            id="forms-validationInputCode_success"
                        />
                        <div className="invalid-feedback">
                            {props.errors.name?.message}
                        </div>
                    </div>
                    <div className="text-gray-700 pt-2 ">
                        <label
                            className="mb-1"
                            htmlFor="forms-validationInputCode_success"
                        >
                            Category:{" "}
                        </label>
                        <input
                            {...props.register("category")}
                            className={`w-full h-8 px-3 text-base focus:outline-none placeholder-gray-600 border border-gray-300 rounded-sm focus:shadow-outline ${
                                props.errors.category ? "is-invalid" : ""
                            }`}
                            type="text"
                            id="forms-validationInputCode_success"
                        />
                        <div className="invalid-feedback">
                            {props.errors.category?.message}
                        </div>
                    </div>

                    <div className=" text-white py-1 pt-6 text-lg flex justify-end ">
                        <button
                            type="submit"
                            disabled={props.loading}
                            className="bg-green-700 px-8 py-4 rounded-lg hover:bg-green-900 hover:text-white text-white h-4 w-full  flex items-center justify-center text-sm"
                        >
                            {props.edit ? "Update" : "Create"}
                            {""}
                            {props.loading && <Loader />}
                        </button>
                    </div>
                    <div className=" text-white py-1 pt-2 text-lg flex justify-end ">
                        <button
                            className="bg-red-700 px-8 py-4 rounded-lg hover:bg-red-900 hover:text-white text-white h-4 w-full  flex items-center justify-center text-sm"
                            onClick={() => props.reset()}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
