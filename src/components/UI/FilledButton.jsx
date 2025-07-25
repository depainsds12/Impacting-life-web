import React from "react";

const FilledButton = ({ onClickFun, text, classForBtn }) => {
    return <div
        onClick={onClickFun}
        style={{
            boxShadow: 'inset 0px 0px 0.3px #FB923C, 0px 16px 24px 0px #FF8C0052',
        }}
        className={`text-[#1A1A1A] text-center w-fit border-b-4 border-accent2 cursor-pointer shadow-md bg-accent font-medium text-xl rounded-lg py-3 px-3 xl:px-5 transition-all duration-300 ease-in-out hover:bg-[#e67300] hover:scale-[1.02] active:scale-95 ${classForBtn}`}
    >
        {text}
    </div>;
};

export default FilledButton;