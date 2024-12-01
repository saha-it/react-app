import React from "react";
import imgDoor from "../images/door1.png";

const TopButton = () => {
    return (
        <div>
            <a
                className="fixed z-10 right-10 bottom-10 bg-[#fff] w-20 h-20 rounded-full text-center max-md:right-2 max-sm:w-12 max-sm:h-12"
                href="#top"
            >
                <img
                    className="w-16 m-auto px-4 pt-4 max-sm:pt-2"
                    src={imgDoor}
                ></img>
                <p className="text-[10px] font-serif font-semibold leading-none max-sm:text-[8px]">
                    トップに<br></br>もどる
                </p>
            </a>
        </div>
    );
};

export default TopButton;
