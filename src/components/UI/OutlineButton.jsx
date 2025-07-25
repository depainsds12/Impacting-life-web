import React from "react";

const OutlineButton = ({ onClickFun, text }) => {
    return <div
        onClick={() => onClickFun()}
        className="text-[#1A1A1A] text-center border cursor-pointer border-[#767676] font-medium text-xl rounded-lg py-3 px-4 transition-all duration-300 ease-in-out hover:text-accent hover:border-accent hover:scale-[1.02] active:scale-95"
    >
        {text}
    </div>;
};

export default OutlineButton;
