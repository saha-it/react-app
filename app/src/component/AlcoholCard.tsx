import React from "react";

const AlcoholCard = (prop: any) => {
    return (
        <div className="w-[30vw] max-md:w-[40vw] max-sm:w-[80vw] border-4 border-red-500 bg-[#F2E5BF]">
            <div className="relative h-[16rem]">
                <div className="absolute w-[200px] h-[200px] m-auto top-0 left-0 right-0 bottom-0 border-4 bg-[#fff] rounded-full"></div>
                <img
                    className="absolute m-auto w-fit z-10 top-0 left-0 right-0 bottom-0"
                    src={prop.imageUrl}
                ></img>
            </div>
            <div className="text-[#803D3B] font-serif font-semibold text-center">
                <p>{prop.company}</p>
                <p>{prop.itemName}</p>
            </div>
            <div className="w-fit m-auto bg-[#800000] p-2 rounded-xl">
                <a
                    href={prop.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#fff] font-serif font-semibold"
                >
                    楽天市場で商品を見る
                </a>
            </div>
        </div>
    );
};

export default AlcoholCard;
