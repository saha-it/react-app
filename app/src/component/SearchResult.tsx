import React, { useState, useEffect } from "react";
import commodity from "../data/commodity.json";
import axios from "axios";

interface AppProps {
    props: string;
}

interface Object {
    itemName: string;
}

//let arr = [];
type Fetch = {
    id: number;
    title: string;
    itemName: string;
};

let arr: Array<Object> = [];

const setDatas = (itemCode: string) => {
    //test = [];
    axios
        .get(
            "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&itemCode=" +
                itemCode +
                "&applicationId=1075902594404183588"
        )
        .then((res) => {
            arr = [];
            arr.push(res.data.Items[0].Item);
            console.log(arr);
        })
        .catch((error) => {
            console.log("失敗");
            console.log(error.status);
        });
};

const SearchResult = ({ props }: AppProps) => {
    const [datas, setData] = useState<Fetch[]>([]);
    const list = commodity.commodity.filter((value) => value.alcohol == props);

    //let a = [];
    const getAllInfo = async () => {
        //list.forEach((v) => await setDatas());
        //list.forEach((v) => setDatas(v.itemCode));
        //await setDatas();
    };
    //setDatas();
    list.forEach((v) => setDatas(v.itemCode));
    //getAllInfo();

    console.log("中身:" + arr);

    return (
        <div className="mt-8">
            {arr.map((v, key) => {
                return <p key={key}> {v.itemName}</p>;
            })}
            <p>{props}</p>
        </div>
    );
};

export default SearchResult;
