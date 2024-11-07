import React from "react";

interface Item {
    itemPriceMax: number;
    itemName: string;
    mediumImageUrls: Array<mediumImageUrls>;
    company: string;
    itemCode: string;
    affiliateUrl: string;
}

interface mediumImageUrls {
    imageUrl: string;
}

const AlcoholCard = () => {
    const model: Array<Item> = [
        {
            itemPriceMax: 179,
            itemName: "麒麟特製 レモンサワー",
            mediumImageUrls: [
                {
                    imageUrl:
                        "https://thumbnail.image.rakuten.co.jp/@0_mall/kuranosuke/cabinet/16/23916_1.jpg?_ex=128x128",
                },
                {
                    imageUrl:
                        "https://thumbnail.image.rakuten.co.jp/@0_mall/kuranosuke/cabinet/meyasu0502.jpg?_ex=128x128",
                },
            ],
            company: "キリン",
            itemCode: "kuranosuke:10008786",
            affiliateUrl:
                "https://hb.afl.rakuten.co.jp/hgc/g00ptqoi.3h02g765.g00ptqoi.3h02h4c2/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkuranosuke%2F23916-24%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Fkuranosuke%2Fi%2F10008786%2F&rafcid=wsc_i_is_1075902594404183588",
        },
    ];

    /* const image = model[0].mediumImageUrls[0].imageUrl; */

    return (
        <div className="bg-[#fff] ">
            <div className="m-auto w-80 border-4 border-red-500 bg-[#F2E5BF]">
                <div>
                    <img
                        className="m-auto w-fit"
                        src={model[0].mediumImageUrls[0].imageUrl}
                    ></img>
                </div>
                <div className="text-[#803D3B] font-serif font-semibold text-center">
                    <p>{model[0].company}</p>
                    <p>{model[0].itemName}</p>
                </div>
                <div className="w-fit m-auto bg-[#800000] p-2 rounded-xl">
                    <a
                        href={model[0].affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#fff]"
                    >
                        楽天市場で商品を見る
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AlcoholCard;
