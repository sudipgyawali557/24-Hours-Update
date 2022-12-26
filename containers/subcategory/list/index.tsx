import React from "react";
import Table from "../../../components/Table";

export default function List(props: any) {
    return (
        <>
            <div className="relative overflow-x-auto shadow-md">
                <Table {...props} />
            </div>
        </>
    );
}
