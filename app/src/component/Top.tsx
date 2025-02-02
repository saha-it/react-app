import React from "react";
/* import imgBar from "../images/bar.png"; */
import imgBar from "../images/top/bar2.png";
import imgRankBoad from "../images/rank_boad.png";
import cat from "../images/cat4.png";

import AmazonBanner from "./common/AmazonBanner";
import RakutenBanner from "./common/RakutenBanner";

const amazonRankUrl = process.env.REACT_APP_AMAZON_RANK_URL;

function Top() {
    return (
        <div id="top" className="bg-[#000]">
            <div>
                <div className="relative">
                    <img className="opacity-60" src={imgBar}></img>
                    {/* <a href="#search">
                        <img
                            className="h-[50vw] absolute top-0 left-0 bottom-0 right-0 m-auto hover:h-[55vw]"
                            src={cat}
                        ></img>
                    </a> */}
                    {/* <div className="w-[20vw] max-sm:w-[40vw] absolute top-1/4 left-[200px] max-md:left-[100px]  bottom-0">
                        <div className="speechBubble">
                            <p className="max-sm:text-[0.5rem]">
                                お客様にぴったりの<br></br>
                                缶チューハイを探します！
                            </p>
                        </div>
                    </div> */}
                    {/* <a
                        href={amazonRankUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="h-[15vw] absolute top-0 bottom-0 right-0 m-auto hover:h-[18vw]"
                            src={imgRankBoad}
                        ></img>
                    </a> */}
                    <div
                        className="text-[#fff] w-fit h-[14vw] text-center font-serif 
                    absolute top-0 left-0 bottom-0 right-0 m-auto"
                    >
                        <h2 className="font-bold my-4">
                            あなたの好きな缶チューハイがきっと見つかる
                        </h2>
                        <p>いらっしゃいませ</p>
                        <p>
                            当店ではお客様の好みをお伺いし<br></br>
                            その条件にあった缶チューハイをおすすめします
                            <br></br>
                        </p>
                    </div>
                </div>
            </div>

            <AmazonBanner />
            {/* <RakutenBanner /> */}
        </div>
    );
}

export default Top;
