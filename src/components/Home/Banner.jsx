import React from "react";
import FilledButton from "../UI/FilledButton";
import OutlineButton from "../UI/OutlineButton";

const Banner = () => {
    return <section className="relative bg-white px-8">
        <div className="flex flex-col lg:flex-row max-w-(--layout-width) mx-auto">

            <div className="my-8 w-full lg:w-[50%] space-y-4">
                <div className="h1_title">Kickstart Your Dream Career Today</div>
                <div className="text-secondary text-[24px] lg:text-[28px] font-bold">Discover Your Path in Minutes & Gain In-Demand Skills from £19.99!</div>
                <p>Start your journey with our free career assessment — designed by experts to match you with job-ready paths. Then upskill with powerful, affordable training that sets you up for success in the job market.</p>
                <div className="flex gap-2">
                    <FilledButton onClickFun={() => { }} text="Take Free Career Assessment" />
                    <OutlineButton onClickFun={() => { }} text={"Browse Courses"} />
                </div>
            </div>

            <div style={{ borderRadius: '0 0 0 100px' }} className="w-full hidden lg:block lg:w-[50%] lg:absolute right-0 max-w-[645px] overflow-hidden border-b-16 border-l-16 border-[#FFA500]">
                {/* Course count label */}
                <div className="relative">

                    <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 rounded shadow text-sm font-semibold z-10">
                        2000+ courses
                    </div>

                    {/* Background image */}
                    <img
                        src="/img/homepageVideo.svg"
                        alt="course preview"
                        className="w-full h-[400px] object-cover"
                    />

                    {/* Centered play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                            <img src="/icons/play.svg" alt="Play" className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
};

export default Banner;
