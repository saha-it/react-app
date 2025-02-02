import React from "react";

const amazonRankUrl = process.env.REACT_APP_AMAZON_RANK_URL;

const Header = () => {
    return (
        <div className="w-full max-md:w-[] max-sm:w-[] border-4 bg-[#000] px-4">
            tets
            <div className="flex items-center justify-between">
                <h1 className="neon header_title max-sm:text-[0.8em] text-center">
                    缶チューハイ<br></br>コレクション
                </h1>

                <nav className="h-fit">
                    <ol className="flex max-sm:block text-[#fff] text-[1rem] font-serif *:w-fit *:ml-8">
                        <li>
                            <a href={amazonRankUrl}>amazonランキング</a>
                        </li>
                        {/* <li>
                            <a href="#">楽天ランキング</a>
                        </li> */}
                        <li>
                            <a href="#search">缶チューハイを探す</a>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    );
};

export default Header;
