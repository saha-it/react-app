import React, { useState, useEffect } from "react";
import commodity from "../data/commodity.json";
import axios from "axios";

import SelectType from "./SelectType";
import SelectAlcoholContent from "./SelectAlcoholContent";
import SelectCompany from "./SelectCompany";
import SelectFlavor from "./SelectFlavor";

import AlcoholCard from "./AlcoholCard";

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

interface essentialData {
    Item: {
        company: string;
        name: string;
        alcoholContent: string;
        type: string;
        flavor: string;
        itemCode: string;
        itemName: string;
        mediumImageUrls: Array<mediumImageUrls>;
        affiliateUrl: string;
    };
}

//API叩いて対象商品を全件取得
let allDatas: Array<Object> = [];
//"https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&genreId=408186&shopCode=kuranosuke&maxPrice=500&page=2&applicationId=1075902594404183588"

const url =
    "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&genreId=408186&shopCode=kuranosuke&maxPrice=500&";

const affiliateId = "41388598.82f92f73.41388599.896fa6e2";
const applicationId = "1075902594404183588";

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
    const [datas, setDatas] = useState(Array<Object>);
    const [essentialDatas, setEssentialData] = useState(Array<essentialData>);
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
        setType(newValue);
    };

    async function handleClick() {
        //最初に配列を空にする
        let arr: Array<Object> = [];
        const list = commodity.commodity.filter(
            (v) =>
                //未選択のものは全て取得する処理
                (alcoholContent !== ""
                    ? v.alcoholContent == alcoholContent
                    : v.alcoholContent !== undefined) &&
                (type !== "" ? v.type == type : v.type !== undefined) /* && */
            /* (company != ""
                    ? v.company == company
                    : v.company != undefined) &&
                (flavor != "" ? v.flavor == flavor : v.flavor != undefined) */
        );

        for await (const value of list) {
            let drinkList: any = allDatas.filter(
                (drink) => value.itemCode == drink.Item.itemCode
            );
            //console.dir(drinkList[0]);
            /*
                TODO 画面表示用にデータを整形
                商品名、アルコール度数、値段、会社名、種類
            */
            if (drinkList[0] !== undefined) {
                arr.push(drinkList[0]);
            }
        }
        setDatas(arr);
    }

    function getJSON() {
        const list = allDatas.filter((v, index) => {
            let param = "";
            //itemNameの最初の部分だけを抜き出す処理
            for (let i = 0; i < v.Item.itemName.length; i++) {
                if (i != 0 && v.Item.itemName[i] == "【") {
                    break;
                } else {
                    param += v.Item.itemName[i];
                }
            }
            return (
                (company != ""
                    ? v.Item.itemName.includes(company)
                    : v.Item.itemName != undefined) &&
                (type !== ""
                    ? param.includes(type)
                    : v.Item.itemName != undefined)
            );
        });
        let arr: Array<essentialData> = [];
        let essentialData = list.map((v) => {
            let obj: essentialData = {
                Item: {
                    company: company,
                    name: "",
                    alcoholContent: "",
                    type: type,
                    flavor: "",
                    itemCode: v.Item.itemCode,
                    itemName: v.Item.itemName,
                    mediumImageUrls: v.Item.mediumImageUrls,
                    affiliateUrl: v.Item.affiliateUrl,
                },
            };
            arr.push(obj);
            return obj;
        });
        setEssentialData(arr);
        interface testData {
            company: string;
            name: string;
            alcoholContent: string;
            type: string;
            flavor: string;
            itemCode: string;
            itemName: string;
        }
        let testList = essentialData.map((v) => {
            let obj: testData = {
                company: company,
                name: "",
                alcoholContent: "",
                type: type,
                flavor: "",
                itemCode: v.Item.itemCode,
                itemName: v.Item.itemName,
            };
            return obj;
        });

        console.log(list);
        //console.log(JSON.stringify(essentialData, null, "\t"));
        console.log(JSON.stringify(testList, null, "\t"));
    }

    return (
        <div className="mt-8">
            <p className="text-[#fff] w-fit m-auto font-serif font-semibold">
                お客様の好みを教えてください
            </p>
            <SelectType changeType={changeType} />
            <SelectAlcoholContent changeAlcoholContent={changeAlcoholContent} />
            <SelectCompany changeCompany={changeCompany} />
            <SelectFlavor onChangeFlavor={changeFlavor} />
            <div className="bg-[#fff] w-fit m-auto">
                <button onClick={() => handleClick()} className="bg-[#fff] p-2">
                    商品を探す
                </button>
            </div>
            <div className="bg-[#fff] w-fit m-auto">
                <button onClick={() => getJSON()} className="bg-[#fff] p-2">
                    JSON取得
                </button>
            </div>

            <div className="flex m-auto w-fit">
                {datas.map((value, key) => {
                    return (
                        <AlcoholCard
                            key={key}
                            imageUrl={value.Item.mediumImageUrls[0].imageUrl}
                            /* company={value.Item.itemName} */
                            itemName={value.Item.itemName}
                            affiliateUrl={value.Item.affiliateUrl}
                        />
                    );
                })}
            </div>

            <div className="flex m-auto w-[90vw] flex-wrap">
                {essentialDatas.map((value, key) => {
                    return (
                        <AlcoholCard
                            key={key}
                            imageUrl={value.Item.mediumImageUrls[0].imageUrl}
                            /* company={value.Item.itemName} */
                            itemName={value.Item.itemName}
                            affiliateUrl={value.Item.affiliateUrl}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default TestParent;
