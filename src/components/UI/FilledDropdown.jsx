import React, { useState, useRef, useEffect } from "react";

const FilledDropdown = ({ text, options = [], onSelect, classForDropdown }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(prev => !prev);

    const handleSelect = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className={`relative inline-block ${classForDropdown}`}>
            <div
                onClick={toggleDropdown}
                style={{
                    boxShadow: 'inset 0px 0px 0.3px #FB923C, 0px 16px 24px 0px #FF8C0052',
                }}
                className="flex justify-between items-center text-[#1A1A1A] border-b-4 border-accent2 cursor-pointer shadow-md bg-accent font-medium text-xl rounded-lg py-3 px-3 xl:px-5"
            >
                {text}
                <span className="ml-2">{isOpen ? <img src="/icons/arrow.svg" alt="downArrow" /> : <img src="/icons/arrow.svg" alt="downArrow" className="rotate-[-90deg]" />}</span>
            </div>

            {isOpen && (
                <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-10 overflow-hidden">
                    {options.map((option, idx) => (
                        <div
                            key={idx}
                            onClick={() => handleSelect(option)}
                            className="px-4 py-2 text-base text-black cursor-pointer hover:bg-accent"
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilledDropdown;
