import React from "react";

const amazonRankUrl = process.env.REACT_APP_AMAZON_RANK_URL;

const AmazonBanner = () => {
    return (
        <div className="w-full max-md:w-[] max-sm:w-[] bg-[#000] px-4">
            <div className="m-auto w-[80%]">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={amazonRankUrl}
                >
                    <h2 className="neon amazon_banner my-8 w-auto text-center bg-[#d2691e]">
                        amazonランキング
                    </h2>
                </a>
            </div>
        </div>
    );
};

export default AmazonBanner;
