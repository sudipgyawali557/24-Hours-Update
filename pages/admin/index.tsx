import React from "react";
import AdminFooter from "../../components/AdminFooter/AdminFooter";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import AdminTopBanner from "../../components/AdminTopBanner/AdminTopBanner";
import Features from "../../components/Features/Features";
import LatestPost from "../../components/LatestPost/LatestPost";
import TotalCount from "../../components/TotalCount/TotalCount";
const Index = () => {
    return (
        <>
            <AdminTopBanner />
            <TotalCount />
            <div className="lg:grid md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 xs:px-2 lg:px-10 py-10">
                <div className="md:col-span-1 lg:col-span-2">
                    <div className="bg-sky-800 rounded-lg xs:px-0">
                        <div className="pt-4">
                            <p className="text-center font-bold text-white text-2xl tracking-wide underline ">
                                Total Features
                            </p>
                        </div>
                        <Features />
                    </div>
                </div>
                <div className="bg-yellow-200 shadow-md p-4">
                    <LatestPost />
                </div>
            </div>
        </>
    );
};
export default Index;
