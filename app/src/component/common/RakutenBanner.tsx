import React from "react";

const amazonRankUrl = process.env.REACT_APP_AMAZON_RANK_URL;

const RakutenBanner = () => {
    return (
        <div className="w-full max-md:w-[] max-sm:w-[] bg-[#000] px-4">
            <div className="m-auto w-[80%]">
                <a href={amazonRankUrl}>
                    <h2 className="neon mb-8 w-auto text-center bg-[#800000]">
                        楽天ランキング
                    </h2>
                </a>
            </div>
        </div>
    );
};

export default RakutenBanner;
