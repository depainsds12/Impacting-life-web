import React from "react";
import FilledButton from "../UI/FilledButton";

const CTA = () => {
    return <section className="bg-primary px-8">
        <div className="section_padding">
            <div className="flex flex-col lg:flex-row">
                <div className="space-y-6 ">
                    <div className="h1_title" style={{ color: 'white' }}>Kickstart Your Career Today</div>
                    <p style={{ color: 'white' }}>Take our free career assessment to discover your ideal path — then start building in-demand skills with courses from just £19.99.</p>
                    <div className="flex gap-4 flex-col lg:flex-row">
                        <FilledButton onClickFun={() => { }} text={"Take Free Career Assessment"} classForBtn={"w-full lg:w-fit"} />
                        <div onClick={() => { }} className="text-white w-full lg:w-fit text-center border cursor-pointer border-white font-medium text-xl rounded-lg py-3 px-4 bg-primary">Browse Courses</div>
                    </div>
                </div>
                <img src="/img/ctaImage.svg" alt="user" className="h-[300px] mt-4 lg:mt-0" />
            </div>
        </div>
    </section>;
};

export default CTA;
