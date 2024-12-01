import React from "react";
import imgBar from "../images/bar.png";
import imgRankBoad from "../images/rank_boad.png";
import cat from "../images/cat4.png";

const amazonRankUrl = process.env.REACT_APP_AMAZON_RANK_URL;

function Top() {
    return (
        <div id="top" className="bg-[#000]">
            <div className="text-[#fff] w-fit m-auto text-center my-4 font-serif">
                <h1 className="font-bold my-4">
                    あなたの好きな缶チューハイがきっと見つかる
                </h1>
                <p>いらっしゃいませ</p>
                <p>
                    当店ではお客様の好みをお伺いし、<br></br>
                    その条件にあった缶チューハイをおすすめします。<br></br>
                </p>
            </div>

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
