import React, { useState, useEffect } from "react";
import commodity from "../data/commodity.json";
import axios from "axios";

import TestChild from "./TestChild";
import SelectType from "./SelectType";
interface Object {
    itemName: string;
}

let arr: Array<Object> = [];

//API叩いて対象商品を全件取得
let allDatas: Array<Object> = [];
//"https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&genreId=408186&shopCode=kuranosuke&maxPrice=500&page=2&applicationId=1075902594404183588"

const url =
    "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&genreId=408186&applicationId=1075902594404183588";

/* (async () => {
    console.log("start");
    await axios
        .get(url)
        .then((res) => {
            const items = res.data.Items;
            allDatas.push(...items);
            console.log(allDatas);
            console.log("OK");
        })
        .catch((error) => {
            console.log("失敗");
            console.log(url);
            console.log(error.status);
        });
})(); */

function getAll(page: number) {
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

let flg = true;
let page = 1;

/* while (flg) {
    axios
        .get(
            "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&genreId=408186&shopCode=kuranosuke&maxPrice=500&" +
                page +
                "applicationId=1075902594404183588"
        )
        .then((res) => {
            const items = res.data.Items;
            allDatas.push(...items);
            console.log(allDatas);
            console.log("OK");
            if (res.data.last !== res.data.count) {
                page++;
            } else {
                flg = false;
            }
        })
        .catch((error) => {
            console.log("失敗");
            console.log(error.status);
        });
} */
/* 
for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
        console.log("こんにちは！３秒経ちました");
    }, 3000);
    axios
        .get(
            "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&genreId=408186&shopCode=kuranosuke&maxPrice=500&page=" +
                i +
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

    setTimeout(function () {}, 5000);
} */

let counter = 1;
const timer = setInterval(function () {
    axios
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
    if (counter === 10) {
        clearInterval(timer); // 無効化するときはsetintervalのタイマーをclearIntervalに渡してあげるだけです。
    }
    counter++;
    console.log(counter);
}, 500);

const TestParent: React.FC = () => {
    const [alcohol, setAlcohol] = useState("");
    const [type, setType] = useState("");
    const [datas, setDatas] = useState([{ itemName: "" }]);
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
        for (const value of list) {
            await axios
                .get(
                    "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&itemCode=" +
                        value.itemCode +
                        "&applicationId=1075902594404183588"
                )
                .then((res) => {
                    /*
                        TODO 画面表示用にデータを整形
                        商品名、アルコール度数、値段、会社名、種類
                    */
                    let data = res.data.Items[0].Item;
                    arr.push(data);
                })
                .catch((error) => {
                    console.log("失敗");
                    console.log(error.status);
                });
        }
        setDatas(arr);
    }

    return (
        <div className="mt-8">
            <TestChild onValueChange={changeAlcohol} />
            <SelectType changeType={changeType} />
            <button onClick={() => handleClick()}>Click me</button>
            {datas.map((value, key) => {
                return <p key={key}> {value.itemName}</p>;
            })}
        </div>
    );
};

export default TestParent;
