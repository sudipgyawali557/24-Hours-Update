import React from "react";

const AdminTopBanner = () => {
    return (
        <>
            <div className="lg:grid lg:grid-cols-3 gap-4 shadow-md px-10 bg-white -mt-3">
                <div className="">
                    <img src="/images/admin.jpg" />
                </div>
                <div className="col-span-2  flex flex-col justify-center mx-auto lg:px-4">
                    <p className="font-bold text-4xl text-gray-800 pb-4 capitalize">
                        Welcome to admin dashboard
                    </p>
                    <p className="text-gray-700">
                        Administration is backbone of an organization. An
                        effective administrator is an asset to an organization.
                        He or she is the link between an organization&apos;s
                        various departments and ensures the smooth flow of
                        information from one part to the other. Thus without an
                        effective administration, an organization would not run
                        professionally and smoothly.
                    </p>
                    <br />
                    <p className="text-gray-700">
                        The duty of an administrator depends on the company that
                        the administrator works for. The main job responsibility
                        of an administrator is to ensure the efficient
                        performance of all departments in an organization. They
                        act as a connecting link between the senior management
                        and the employees. They provide motivation to the work
                        force and make them realize the goals of the
                        organization.
                    </p>
                </div>
            </div>
        </>
    );
};
export default AdminTopBanner;
