import React from "react";

const OutlineButton = ({ onClickFun, text }) => {
    return <div onClick={() => onClickFun()} className="text-[#1A1A1A] text-center border cursor-pointer border-[#767676] font-medium text-xl rounded-lg py-3 px-4">{text}</div>;
};

export default OutlineButton;
