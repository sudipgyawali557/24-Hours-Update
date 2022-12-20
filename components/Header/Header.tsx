import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <>
            <div className="lg:grid xs:grid-cols-1 lg:grid-cols-3 gap-2 xs:px-6 lg:px-20 pb-6">
                <div className="">
                    <img src="/images/logopng.png" className="w-[50%]" />
                    <div className="border-b border-gray-500 w-[100%]"></div>
                    <div className="flex items-center justify-between pt-2">
                        <p className="text-xs text-sky-800 font-semibold">
                            13th December 2022,Tuesday
                        </p>
                        <div className="flex items-center justify-between">
                            <i className="bx bxl-facebook text-sky-600 cursor-pointer" />
                            <i className="bx bxl-youtube text-red-700 px-4 cursor-pointer" />
                            <i className="bx bxl-twitter text-sky-500 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="col-span-2 ..."></div>
            </div>
            <header>
                <div className="nav-area">
                    <Navbar />
                </div>
            </header>
        </>
    );
};

export default Header;
