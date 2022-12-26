import React from "react";
import { useRouter } from "next/router";

const BackButton = () => {
    const router = useRouter();
    function goBack() {
        router.back();
    }
    return (
        <>
            <div
                className=" sm:px-2 lg:px-10 xs:px-2 pt-10 flex items-center cursor-pointer font-semibold"
                onClick={goBack}
            >
                <i className="bx bx-arrow-back text-lg" />
                <button className="px-2 py-1">Go back</button>
            </div>
        </>
    );
};
export default BackButton;
