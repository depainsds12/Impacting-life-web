import React from "react";
import FilledButton from "../UI/FilledButton";

const ExploreCourse = () => {
    return <section className="bg-[#F0F4F8] px-8">
        <div className="section_padding">
            <div className="h1_title">Explore Courses By Topic</div>
            <p className="mt-3 mb-6">Build skills in the areas employers are hiring for; choose from over 2,000 courses across high-demand fields.</p>
            <div className="flex flex-wrap gap-6">
            {
                ["Project Management", "Change Management", "Leadership", "Business Analysis", "Data Analytics", "Digital Marketing", "Customer Experience & Success Management", "AI Fundamentals & Automation Tools"].map((a, i) => <div key={i} className="flex-1"><Skills text={a} /></div>)
            }
            </div>
            <div className="pt-4 pb-3 font-semibold text-[20px]">Not sure where to start?</div>
            <FilledButton onClickFun={() => {}} text={"Take Free Career Assessment"} />
        </div>
    </section>;
};

export default ExploreCourse;

const Skills = ({ text }) => {
    return <div className="min-w-[200px] h-full flex items-center justify-center text-center rounded-lg lg:min-w-[390px] bg-white hover:bg-secondary text-[24px] font-medium border border-[#767676CC] py-2 px-3">
        {text}
    </div>
}
