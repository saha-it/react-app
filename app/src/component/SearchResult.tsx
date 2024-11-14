import React, { useState, useEffect } from "react";
import axios from "axios";

import SelectType from "./SelectType";
import SelectAlcoholContent from "./SelectAlcoholContent";
import SelectCompany from "./SelectCompany";
import SelectFlavor from "./SelectFlavor";
import SelectFruit from "./SelectFruit";

import AlcoholCard from "./AlcoholCard";

import GetRequest from "./GetRequest";

import Untitled from "../data/Untitled.json";

import imgCatHead from "../images/cat_head.png";

interface Item {
    itemName: string;
    itemCode: string;
    mediumImageUrls: Array<mediumImageUrls>;
    affiliateUrl: string;
}

interface mediumImageUrls {
    imageUrl: string;
}

interface Object {
    Item: Object;
    itemName: string;
    itemCode: string;
    mediumImageUrls: Array<mediumImageUrls>;
    affiliateUrl: string;
}

interface Items {
    Item: Item;
    itemName: string;
    itemCode: string;
}

interface showData {
    Item: {
        company: string;
        itemName: string;
        alcoholContetnt: number;
        mediumImageUrls: Array<mediumImageUrls>;
        affiliateUrl: string;
    };
}

//API叩いて対象商品を全件取得
let allDatas: Array<Object> = [];
//"https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&genreId=408186&shopCode=kuranosuke&maxPrice=500&page=2&applicationId=1075902594404183588"

const url =
    "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&genreId=408186&shopCode=kuranosuke&maxPrice=500&";

const affiliateId = process.env.REACT_APP_AFFILIAT_ID;
const applicationId = process.env.REACT_APP_API_KEY;

let counter = 1;
const timer = setInterval(async function () {
    await axios
        .get(
            url +
                "&page=" +
                counter +
                "&affiliateId=" +
                affiliateId +
                "&applicationId=" +
                applicationId
        )
        .then((res) => {
            const items = res.data.Items;
            allDatas.push(...items);
            console.log(allDatas);
            console.log("OK");
        })
        .catch((error) => {
            console.log("失敗");
            console.log(error.status);
        });
    if (counter === 1) {
        clearInterval(timer);
    }
    counter++;
    console.log(counter);
}, 500);

const TestParent: React.FC = () => {
    const [alcoholContent, setAlcohol] = useState("");
    const [type, setType] = useState("");
    const [company, setCompany] = useState("");
    const [flavor, setFlavor] = useState("");
    const [fruit, setFruit] = useState("");
    const [condition, setCondition] = useState(Object);
    const [datas, setDatas] = useState(Array<showData>);
    const changeAlcoholContent = (newValue: string) => {
        setAlcohol(newValue);
    };
    const changeType = (newValue: string) => {
        setType(newValue);
    };
    const changeCompany = (newValue: string) => {
        setCompany(newValue);
    };
    const changeFlavor = (newValue: string) => {
        setFlavor(newValue);
    };
    const changeFruit = (newValue: string) => {
        setFruit(newValue);
    };

    async function handleClick() {
        //最初に配列を空にする
        let arr: Array<showData> = [];
        const list = Untitled.filter((v) => {
            //アルコール度数のレベルを3段階に分ける
            let alcoholLevel = "";
            if (v.alcoholContent < 4) {
                alcoholLevel = "low";
            } else if (v.alcoholContent >= 4 && v.alcoholContent < 8) {
                alcoholLevel = "middle";
            } else if (v.alcoholContent >= 8) {
                alcoholLevel = "high";
            }
            //条件が指定されており、かつ一致しなければ中断
            if (alcoholContent !== "" && alcoholLevel != alcoholContent) {
                return;
            }
            if (type !== "" && v.type != type) {
                return;
            }
            if (company !== "" && v.company != company) {
                return;
            }
            if (fruit !== "" && v.fruitType != fruit) {
                return;
            }
            //flavorはフラグが0の時falseとなる
            if (flavor !== "") {
                switch (flavor) {
                    case "rich":
                        if (v.richFlg == 0) {
                            return;
                        }
                        break;
                    case "refreshing":
                        if (v.refreshingFlg == 0) {
                            return;
                        }
                        break;
                    case "bitter":
                        if (v.bitterFlg == 0) {
                            return;
                        }
                        break;
                    case "sour":
                        if (v.sourFlg == 0) {
                            return;
                        }
                        break;
                    case "sweet":
                        if (v.sweetFlg == 0) {
                            return;
                        }
                        break;
                    case "dry":
                        if (v.dryFlg == 0) {
                            return;
                        }
                        break;
                    case "fruity":
                        if (v.fruityFlg == 0) {
                            return;
                        }
                        break;
                }
            }
            //指定の条件に一致したデータのみ返す
            return v;
        });

        for await (const value of list) {
            //データがなければ処理の中断
            if (value.name == "") {
                continue;
            }
            let drink: any = allDatas.filter((drink, index) => {
                if (value.itemCode == drink.Item.itemCode) {
                    console.log(index);
                }

                return value.itemCode == drink.Item.itemCode;
            });
            //データがなければ処理の中断
            if (drink.length == 0) {
                continue;
            }
            console.log(value.company);
            //表示用にデータを整形
            const data: showData = {
                Item: {
                    company: value.company,
                    itemName: value.name,
                    alcoholContetnt: value.alcoholContent,
                    mediumImageUrls: drink[0].Item.mediumImageUrls,
                    affiliateUrl: drink[0].Item.affiliateUrl,
                },
            };
            arr.push(data);
        }
        setDatas(arr);

        //検索条件の保存
        setCondition({
            ...condition,
            alcoholContent: alcoholContent,
            type: type,
            company: company,
            flavor: flavor,
            fruitType: fruit,
        });
    }

    return (
        <div id="search" className="mt-8">
            <div className="flex w-fit m-auto">
                <img
                    className="w-6 h-6 text-[#fff] color-[#fff]"
                    src={imgCatHead}
                />
                <p className="text-[#fff] w-fit font-serif font-semibold mb-16">
                    お客様の好みをお聞かせください
                </p>
                <img
                    className="w-6 h-6 text-[#fff] color-[#fff]"
                    src={imgCatHead}
                />
            </div>
            <SelectType changeType={changeType} />
            <SelectAlcoholContent changeAlcoholContent={changeAlcoholContent} />
            <SelectFlavor onChangeFlavor={changeFlavor} />
            <SelectFruit changeFruit={changeFruit} />
            <SelectCompany changeCompany={changeCompany} />
            <div className="w-fit m-auto mb-16">
                <button
                    onClick={() => handleClick()}
                    className="font-serif font-semibold text-[#fff] p-2 border-white rounded-lg border-l-2 border-t-2 border-b-[6px] border-r-[6px] hover:bg-sky-700"
                >
                    商品を探す
                </button>
            </div>

            <div className="text-[#fff] font-serif font-semibold w-fit m-auto">
                <p>お酒の種類:{condition.type}</p>
                <p>アルコールレベル:{condition.alcoholContent}</p>
                <p>メーカー:{condition.company}</p>
                <p>味わい:{condition.flavor}</p>
                <p>フルーツ:{condition.fruit}</p>
            </div>

            {/*requestを取得するだけのコンポーネント */}
            {/* <GetRequest company={company} type={type} /> */}

            <div className="flex m-auto w-[90vw] flex-wrap max-sm:block max-md:w-[80vw] justify-around ">
                {datas.map((value, key) => {
                    return (
                        <AlcoholCard
                            key={key}
                            company={value.Item.company}
                            itemName={value.Item.itemName}
                            imageUrl={value.Item.mediumImageUrls[0].imageUrl}
                            affiliateUrl={value.Item.affiliateUrl}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default TestParent;
