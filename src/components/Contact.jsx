import React from "react";

import Wrapper from "./Wrapper";
import Form from "./Form";
import Div from "./Div";

const Contact = () => {
    return (
        <div
            id="contact"
            className="w-full py-[50px] md:py-[100px] bg-[#F2F2F2] relative overflow-hidden"
        >
            <Wrapper>
                {/* SECTION HEADING START */}
                <Div className="mb-10 relative">
                    <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-2 text-[#111111]">
                        Let’s Talk
                    </div>
                    <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center max-w-[1000px] mx-auto">
                        If you have an idea or project you want to discuss, feel free to contact me.
                    </div>
                </Div>
                {/* SECTION HEADING END */}

                <Form />
            </Wrapper><br /><br /><br />
            <div className="text-[#111111] flex items-center space-x-8 items-center mt-20 justify-center">
                <a href="https://github.com/ankitsharma32">
                    <img src="src\assets\github-logo.png" alt="" />
                </a>
                <a href="https://www.linkedin.com/in/ankitsharma32">
                    <img src="src\assets\linkedin-logo.png" />
                </a>
            </div>
        </div>
    );
};

export default Contact;
