import React, { useState } from "react";
import AlcoholCard from "./AlcoholCard";
import axios from "axios";

interface mediumImageUrls {
    imageUrl: string;
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

let allDatas: Array<Object> = [];

const url =
    "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&genreId=510915&shopCode=kuranosuke&maxPrice=500&sort=%2BupdateTimestamp";

const affiliateId = process.env.REACT_APP_AFFILIAT_ID;
const applicationId = process.env.REACT_APP_API_KEY;

let counter = 1;
let itemCount = 0;

const timer = setInterval(async function () {
    let last = 0;
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
            if (counter == 1) {
                itemCount = res.data.count;
                console.log(itemCount);
            }
            last = res.data.last;
            const items = res.data.Items;
            allDatas.push(...items);
            console.log(allDatas);
            console.log("OK");
        })
        .catch((error) => {
            console.log("失敗");
            console.log(error.status);
        });
    if (last === itemCount) {
        /* if (counter === 15) { */
        clearInterval(timer);
    }
    console.log(allDatas.length);
    counter++;
    console.log(counter);
}, 600);

const GetRequest = (props: any) => {
    const [essentialDatas, setEssentialData] = useState(Array<essentialData>);
    //const allDatas = props.allDatas;
    const company = props.company;
    const type = props.type;
    function getJSON() {
        const list = allDatas.filter((v: any) => {
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
        let essentialData = list.map((v: any) => {
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
            type: string;
            richFlg: number;
            refreshingFlg: number;
            bitterFlg: number;
            sourFlg: number;
            sweetFlg: number;
            dryFlg: number;
            fruityFlg: number;
            fruitType: string;
            alcoholContent: number;
            itemCode: string;
            itemName: string;
        }
        let testList = essentialData.map((v: any) => {
            let obj: testData = {
                company: company,
                name: "",
                type: type,
                richFlg: 0,
                refreshingFlg: 0,
                bitterFlg: 0,
                sourFlg: 0,
                sweetFlg: 0,
                dryFlg: 0,
                fruityFlg: 0,
                fruitType: "",
                alcoholContent: 0,
                itemCode: v.Item.itemCode,
                itemName: v.Item.itemName,
            };
            return obj;
        });

        console.log(list);
        console.log(JSON.stringify(testList, null, "\t"));
    }
    return (
        <div>
            <div className="bg-[#fff] w-fit m-auto">
                <button onClick={() => getJSON()} className="bg-[#fff] p-2">
                    JSON取得
                </button>
            </div>
            <div className="flex m-auto w-[90vw] flex-wrap">
                {essentialDatas.map((value, key) => {
                    return (
                        <div key={key}>
                            <AlcoholCard
                                key={key}
                                imageUrl={
                                    value.Item.mediumImageUrls[0].imageUrl
                                }
                                itemName={value.Item.itemName}
                                affiliateUrl={value.Item.affiliateUrl}
                            />
                            <p className="text-[#fff]">{key + 1}</p>
                            {(key + 1) % 10 == 0 && (
                                <p className="text-[#fff]">save</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default GetRequest;
