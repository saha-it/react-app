import React, { useState, useEffect } from "react";
import commodity from "../data/commodity.json";
import axios from "axios";

import AlcoholCard from "./AlcoholCard";

import SelectType from "./SelectType";
import SelectAlcoholContent from "./SelectAlcoholContent";
import SelectCompany from "./SelectCompany";
import SelectFlavor from "./SelectFlavor";

interface Item {
    itemName: string;
    itemCode: string;
}

interface Object {
    Item: Object;
    itemName: string;
    itemCode: string;
}

interface Items {
    Item: Item;
    itemName: string;
    itemCode: string;
}

//API叩いて対象商品を全件取得
let allDatas: Array<Object> = [];
//"https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&genreId=408186&shopCode=kuranosuke&maxPrice=500&page=2&applicationId=1075902594404183588"

const url =
    "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&genreId=408186&applicationId=1075902594404183588";

const affiliateId = "41388598.82f92f73.41388599.896fa6e2";
const applicationId = "1075902594404183588";

let counter = 1;
const timer = setInterval(async function () {
    await axios
        .get(
            "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&genreId=408186&shopCode=kuranosuke&maxPrice=500&page=" +
                counter +
                "&applicationId=1075902594404183588"
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
    const [alcohol, setAlcohol] = useState("");
    const [type, setType] = useState("");
    const [datas, setDatas] = useState(Array<Object>);
    const changeAlcoholContent = (newValue: string) => {
        setAlcohol(newValue);
    };
    const changeType = (newValue: string) => {
        setType(newValue);
    };
    const changeCompany = (newValue: string) => {
        setType(newValue);
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
                (alcohol !== ""
                    ? v.alcoholContent == alcohol
                    : v.alcoholContent !== undefined) &&
                (type !== "" ? v.type == type : v.type !== undefined)
        );

        /* let list = commodity.commodity.filter(function (value) {
            console.log(alcohol);
            if (alcohol !== "") {
                return value.alcohol == alcohol;
            }
            return value;
        });
        list = list.filter(function (value) {
            if (type !== "") {
                return value.type == type;
            }
            return value;
        }); */

        for await (const value of list) {
            /* await axios
                .get(
                    "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&itemCode=" +
                        value.itemCode +
                        "&applicationId=1075902594404183588"
                )
                .then((res) => {
                    
                    let data = res.data.Items[0].Item;
                    arr.push(data);
                })
                .catch((error) => {
                    console.log("失敗");
                    console.log(error.status);
                }); */
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
        /*
            TODO
            undifinedの削除処理と原因究明
        */
    }

    return (
        <div className="mt-8">
            <AlcoholCard />
            <p className="text-[#fff] w-fit m-auto font-serif font-semibold">
                お客様の好みを教えてください
            </p>
            <SelectType changeType={changeType} />
            <SelectAlcoholContent changeAlcoholContent={changeAlcoholContent} />
            <SelectCompany changeCompany={changeCompany} />
            <SelectFlavor onChangeFlavor={changeFlavor} />
            <div className="bg-[#fff] w-fit m-auto">
                <button onClick={() => handleClick()} className="bg-[#fff]">
                    Click me
                </button>
            </div>

            {datas.map((value, key) => {
                return (
                    <p key={key} className="bg-[#fff]">
                        {value.Item.itemName}
                    </p>
                );
            })}
        </div>
    );
};

export default TestParent;
