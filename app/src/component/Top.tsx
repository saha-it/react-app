import React from "react";
import barCounter from "../images/bar-counter.jpeg";
import cat from "../images/cat.png";

function Top() {
    return (
        <div className="bg-[#000]">
            <div>
                <div className="relative	">
                    <img
                        className="rounded-[600px] opacity-75"
                        src={barCounter}
                    ></img>
                    <img className="absolute top-20 left-80" src={cat}></img>
                </div>
            </div>
        </div>
    );
}

export default Top;
