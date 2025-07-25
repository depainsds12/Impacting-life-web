import React from "react";
import CourseCard from "../UI/CourseCard";

const BrowseCourse = () => {
    return <section className="bg-[#F0F4F8] px-8">
        <div className="section_padding">
            <div className="h1_title">Browse All Courses</div>
            <p className="mt-3 mb-5">Explore Our Full Course Library</p>
            <div className="flex flex-wrap gap-6">
            {
                ["Popular", "Beginner-Friendly", "Career Changing"].map((a, i) => <div key={i} ><Course text={a} /></div>)
            }
            </div>
            <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-14">
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </div>
    </section>;
};

export default BrowseCourse;

const Course = ({ text }) => {
    return <div className="flex items-center text-[#1A1A1A] justify-center text-center rounded-lg bg-white border border-transparent cursor-pointer hover:border-[#767676CC] text-[16px] font-medium py-2 px-3">
        {text}
    </div>
}