import React, { useState } from "react";
import { Link } from 'react-router-dom';
import OutlineButton from "./UI/OutlineButton";
import FilledButton from "./UI/FilledButton";
import FilledDropdown from "./UI/FilledDropdown";

const navLinks = [
    { to: '/', label: 'Earn a Professional Certificate' },
    { to: '/', label: 'Join a Virtual Bootcamp' },
    { to: '/', label: 'Bundle & Save' },
    { to: '/', label: 'Recommendation For You' },
    { to: '/', label: 'For Individuals' },
    { to: '/', label: 'For Business' },
    { to: '/', label: 'For Government' },
    { to: '/', label: 'Publishing' },
];

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            {/* Top banner */}
            <div className="w-full bg-[#1A1A1A] text-white text-center p-2">
                <span className="text-[16px]">Upskill for Less. Build job-ready skills from </span>
                <span className="font-medium">£ 19.99 | Only 2 days left!</span>
                <span className="font-medium text-lg text-accent ml-2">Start learning now.</span>
            </div>

            {/* Header */}
            <header className="bg-white shadow py-6 px-8 flex justify-center relative z-10">
                <div className='w-full max-w-(--layout-width) flex flex-col md:flex-row md:items-center md:justify-between'>
                    <img src="/img/logo.svg" alt="Impacting Life Logo" className="w-[186px] lg:w-[18%] xl:w-auto" />

                    {/* Hamburger Icon */}
                    <div className="block lg:hidden">
                        <img
                            src="/icons/nav.svg"
                            alt="menu"
                            className="cursor-pointer"
                            onClick={() => setIsSidebarOpen(true)}
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="gap-4 hidden lg:flex">
                        <div className="border flex xl:min-w-[300px] rounded-lg border-[#767676] p-2">
                            <input
                                type="text"
                                placeholder="What do you want to learn?"
                                className="flex-grow outline-none border-none placeholder-gray-500 text-base"
                            />
                            <div className="bg-[#FF8C00] p-2 ml-2 rounded-md">
                                <img src="/icons/search.svg" alt="search" />
                            </div>
                        </div>
                        <FilledButton onClickFun={() => { }} text={"Take Free Career Assessment"} />
                        <OutlineButton onClickFun={() => { }} text={"Log In"} />
                        <OutlineButton onClickFun={() => { }} text={"Sign Up"} />
                    </div>
                </div>
            </header>
            <nav className="bg-primary text-white w-full px-8 hidden lg:block">
                <div className="max-w-(--layout-width) mx-auto flex justify-between items-center py-3">
                    <div className="flex space-x-8 text-xl font-medium">
                        <Link to="/" className="hover:underline">For Individuals</Link>
                        <Link to="/" className="hover:underline">For Business</Link>
                        <Link to="/" className="hover:underline">For Government</Link>
                        <Link to="/" className="hover:underline">Publishing</Link>
                    </div>
                    <FilledDropdown
                        text="Courses"
                        options={[
                            { label: "Courses", value: "courses" },
                            { label: "Bootcamp", value: "bootcamp" },
                            { label: "Webinars", value: "webinars" },
                        ]}
                        onSelect={(option) => console.log("Selected:", option)}
                    />
                </div>
            </nav>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/45 bg-opacity-30 z-40" onClick={() => setIsSidebarOpen(false)}></div>
            )}

            {/* Slide-in Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Header with logo and close button */}
                <div className="flex justify-between items-center p-4 border-b border-gray-300">
                    <img src="/img/logo.svg" alt="Impacting Life Logo" className="w-[150px]" />
                    <div onClick={() => setIsSidebarOpen(false)} className="bg-secondary pb-1 cursor-pointer px-2 rounded-md text-xl">
                        ×
                    </div>
                </div>

                {/* Scrollable content */}
                <div className="p-4 overflow-y-auto max-h-[calc(100vh-64px)]">
                    <div className="flex border border-[#76767633] rounded-lg px-4 py-2 mb-4">
                        <input
                            type="text"
                            placeholder="What do you want to learn?"
                            className="flex-grow outline-none border-none placeholder-gray-500 text-base"
                        />
                        <div className="bg-[#FF8C00] p-2 ml-2 rounded-md">
                            <img src="/icons/search.svg" alt="search" />
                        </div>
                    </div>

                    <FilledDropdown
                        text="Courses"
                        options={[
                            { label: "Courses", value: "courses" },
                            { label: "Bootcamp", value: "bootcamp" },
                            { label: "Webinars", value: "webinars" },
                        ]}
                        onSelect={(option) => console.log("Selected:", option)}
                        classForDropdown='w-full'
                    />

                    <div className="mt-3">
                        {navLinks.map(link => (
                            <Link key={link.to} to={link.to} className="block py-2 text-xl font-medium border-b border-[#76767633] text-[#1A1A1A]">
                                {link.label}
                            </Link>
                        ))}
                    </div>


                    <div className="mt-4 space-y-5">
                        <p className="text-xl font-semibold">Not sure where to start?</p>
                        <FilledButton onClickFun={() => { }} text={"Take Free Career Assessment"} />
                        <div className="">
                            <OutlineButton onClickFun={() => { }} text={"Log In"} />
                        </div>
                        <div className="">
                            <OutlineButton onClickFun={() => { }} text={"Sign Up"} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Header;
