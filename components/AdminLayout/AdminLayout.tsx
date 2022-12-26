import React from "react";
import AdminFooter from "../AdminFooter/AdminFooter";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const AdminLayout = (props: any) => {
    return (
        <>
            <div className="flex min-h-screen flex-col justify-between">
                <AdminNavbar />
                <main className="lg:pt-20 xs:pt-20 bg-gray-100">
                    {props.children}
                </main>
                <AdminFooter />
            </div>
        </>
    );
};

export default AdminLayout;
