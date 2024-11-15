import React from "react";
import imgBar from "../images/bar.png";
import imgRankBoad from "../images/rank_boad.png";
import cat from "../images/cat4.png";

const amazonRankUrl = process.env.REACT_APP_AMAZON_RANK_URL;

function Top() {
    return (
        <div id="top" className="bg-[#000]">
            <div>
                <div className="relative">
                    <img
                        className="rounded-[600px] opacity-55"
                        src={imgBar}
                    ></img>
                    <a href="#search">
                        <img
                            className="h-[50vw] absolute top-0 left-0 bottom-0 right-0 m-auto hover:h-[55vw]"
                            src={cat}
                        ></img>
                    </a>
                    <a
                        href={amazonRankUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="h-[15vw] absolute top-0 bottom-0 right-0 m-auto hover:h-[18vw]"
                            src={imgRankBoad}
                        ></img>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Top;
