import React from "react";

const Wrapper = ({ children }) => {
    return (
        <div className="max-w-[1920px] px-5 md:px-10 mx-auto pt-[1px] mt-[-1px]">
            {children}
        </div>
    );
};

export default Wrapper;
