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
                    <img
                        className="absolute top-0 left-0 bottom-0 right-0 m-auto"
                        src={cat}
                    ></img>
                </div>
            </div>
        </div>
    );
}

export default Top;
