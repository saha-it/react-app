import React, { useState, useEffect } from "react";
import commodity from "../data/commodity.json";
import axios from "axios";

/* import SelectAlcohol from "./SelectAlcohol"; */
import SelectType from "./SelectType";
/* import SelectTest from "./SelectTest"; */

import SelectAlcohol from "./SelectAlcohol";

interface Item {
    itemName: string;
    itemCode: string;
}

interface Object {
    Item: Object;
    itemName: string;
    itemCode: string;
}

//API叩いて対象商品を全件取得
let allDatas: Array<Object> = [];
//"https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&genreId=408186&shopCode=kuranosuke&maxPrice=500&page=2&applicationId=1075902594404183588"

const url =
    "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&genreId=408186&applicationId=1075902594404183588";

/* function getAll(page: number) {
    axios
        .get(
            "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&genreId=408186&shopCode=kuranosuke&maxPrice=500&page=" +
                page +
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
}
*/

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
    const changeAlcohol = (newValue: string) => {
        setAlcohol(newValue);
    };
    const changeType = (newValue: string) => {
        setType(newValue);
    };

    async function handleClick() {
        //最初に配列を空にする
        let arr: Array<Object> = [];
        const list = commodity.commodity.filter(
            (value) => value.alcohol == alcohol && value.type == type
        );
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
        /*  async function add() {
            setDatas(arr);
            console.log(datas);
        }
        add(); */
        setDatas(arr);
        /*
            TODO
            undifinedの削除処理と原因究明
        */
        console.log(arr);
        console.log(list);
        //setDatas(arr);
        //setDatas(arr);
        //console.log(datas);
    }

    return (
        <div className="mt-8">
            <p className="text-[#fff] w-fit m-auto">
                お客様の好みを教えてください
            </p>
            {/* <SelectTest onValueChange={changeAlcohol} /> */}
            {/* <SelectAlcohol onValueChange={changeAlcohol} /> */}
            <SelectType changeType={changeType} />
            <SelectAlcohol onChangeAlcohol={changeAlcohol} />
            <div className="bg-[#fff] w-fit m-auto">
                <button onClick={() => handleClick()} className="bg-[#fff]">
                    Click me
                </button>
            </div>

            {datas.map((value, key) => {
                return (
                    <p key={key} className="bg-[#fff]">
                        {value.Item.itemName}
                        {key}
                    </p>
                );
            })}
        </div>
    );
};

export default TestParent;
