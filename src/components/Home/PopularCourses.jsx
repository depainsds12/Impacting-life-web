import React from "react";
import CourseCard from "../UI/CourseCard";
import FilledButton from "../UI/FilledButton";

const PopularCourses = () => {
    return <section className="bg-[#F8F8F8] px-8">
        <div className="section_padding">
            <div className="flex gap-4">
                <div className="w-full lg:w-[40%]">
                    <CourseCard />
                </div>
                <div className="w-full lg:w-[60%]">
                    <div className="h1_title">Most Popular Courses</div>
                    <p className="mb-3 mt-2">Our Learners Love These Courses</p>
                    <p className="mb-3">Lorem Ipsum is simply dummy text of the printing and lorem typesetting industry. Lorem Ipsum has been the industry's and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p className="mb-3">
                        Lorem Ipsum is simply dummy text of the printing and lorem typesetting industry.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-14">
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>

            <FilledButton onClickFun={() => {}} text="See Full Course List" />
        </div>
    </section>;
};

export default PopularCourses;
