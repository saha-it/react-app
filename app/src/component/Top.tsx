import React from "react";
import imgBar from "../images/bar.png";
import cat from "../images/cat4.png";

function Top() {
    return (
        <div id="top" className="bg-[#000]">
            <div>
                <div className="relative">
                    <img
                        className="rounded-[600px] opacity-75"
                        src={imgBar}
                    ></img>
                    <a href="#search">
                        <img
                            className="h-[50vw] absolute top-0 left-0 bottom-0 right-0 m-auto hover:h-[55vw]"
                            src={cat}
                        ></img>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Top;
