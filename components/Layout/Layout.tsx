import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = (props: any) => {
    return (
        <>
            <div className="flex min-h-screen flex-col justify-between">
                <Header />
                <main>{props.children}</main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
