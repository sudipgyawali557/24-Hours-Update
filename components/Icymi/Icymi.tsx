import React from "react";
const Icymi = () => {
    return (
        <>
            <p className="bg-sky-900 text-white inline-block text-xs font-bold px-3 py-1 rounded mt-12">
                ICYMI
            </p>
            <div className="xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-5 gap-2 pb-12">
                <div className="w-full h-[350px] relative overflow-hidden">
                    <div className="w-full h-full">
                        <img
                            src="/images/ronaldo.webp"
                            className="w-full h-full absolute"
                        />
                    </div>
                    <div className="overlay">
                        <div className="text-center absolute bottom-0 px-4 pb-4">
                            <h2 className="bg-yellow-400 font-bold text-xs px-2 py-1 mb-2 inline-block uppercase">
                                Football
                            </h2>
                            <h3 className="text-white font-bold leading-5 text-sm tracking-tight multi_line">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit.sit amet consectetur
                                adipisicing elit.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[350px] relative overflow-hidden">
                    <div className="w-full h-full">
                        <img
                            src="/images/election.jpg"
                            className="w-full h-full absolute"
                        />
                    </div>
                    <div className="overlay">
                        <div className="text-center absolute bottom-0 px-4 pb-4">
                            <h2 className="bg-yellow-400 font-bold text-xs px-2 py-1 mb-2 inline-block uppercase">
                                News
                            </h2>
                            <h3 className="text-white font-bold leading-5 text-sm tracking-tight multi_line">
                                ?????????????????? ????????????????????? ????????????????????????????????? ???????????? ?????????????????? ???????????????????????????
                                ?????????????????? ??????????????? ???????????? ?? ?????????????????? ..
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[350px] relative overflow-hidden">
                    <div className="w-full h-full">
                        <img
                            src="/images/latestnews.jpg"
                            className="w-full h-full absolute"
                        />
                    </div>
                    <div className="overlay">
                        <div className="text-center absolute bottom-0 px-4 pb-4">
                            <h2 className="bg-yellow-400 font-bold text-xs px-2 py-1 mb-2 inline-block uppercase">
                                Balen Sah
                            </h2>
                            <h3 className="text-white font-bold leading-5 text-sm tracking-tight multi_line">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit.sit amet consectetur
                                adipisicing elit.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[350px] relative overflow-hidden">
                    <div className="w-full h-full">
                        <img
                            src="/images/oli1.jpg"
                            className="w-full h-full absolute"
                        />
                    </div>
                    <div className="overlay">
                        <div className="text-center absolute bottom-0 px-4 pb-4">
                            <h2 className="bg-yellow-400 font-bold text-xs px-2 py-1 mb-2 inline-block uppercase">
                                Inside News
                            </h2>
                            <h3 className="text-white font-bold leading-5 text-sm tracking-tight multi_line">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit.sit amet consectetur
                                adipisicing elit.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[350px] relative overflow-hidden">
                    <div className="w-full h-full">
                        <img
                            src="/images/oli.jpg"
                            className="w-full h-full absolute"
                        />
                    </div>
                    <div className="overlay">
                        <div className="text-center absolute bottom-0 px-4 pb-4">
                            <h2 className="bg-yellow-400 font-bold text-xs px-2 py-1 mb-2 inline-block uppercase">
                                Election
                            </h2>
                            <h3 className="text-white font-bold leading-5 text-sm tracking-tight multi_line">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit.sit amet consectetur
                                adipisicing elit.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Icymi;
