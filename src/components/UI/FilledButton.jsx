import React from "react";

const FilledButton = ({ onClickFun, text }) => {
    return <div
        onClick={onClickFun}
        style={{
            boxShadow: 'inset 0px 0px 0.3px #FB923C, 0px 16px 24px 0px #FF8C0052',
        }}
        className="text-[#1A1A1A] text-center border-b-4 border-accent2 cursor-pointer shadow-md bg-accent font-medium text-xl rounded-lg py-3 px-3 xl:px-5"
    >
        <div></div>
        {text}
    </div>;
};

export default FilledButton;