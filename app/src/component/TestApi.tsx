import React, { useState, useEffect } from "react";
import axios from "axios"; //<-- インポート

interface Item {
    itemName: string;
}

type Fetch = {
    //<-- 型を指定
    id: number;
    title: string;
    Item: Item;
    itemName: string;
};

const TestApi = () => {
    const [posts, setPosts] = useState<Fetch[]>([]);

    useEffect(() => {
        axios
            //<-- 取得する100個のjsonオブジェクトのURL
            //.get("https://jsonplaceholder.typicode.com/posts")
            .get(
                "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&keyword=%E6%A5%BD%E5%A4%A9&genreId=555086&applicationId=1075902594404183588"
            )
            .then((res) => {
                setPosts(res.data.Items);
                console.log(res.data.Items);
            });
    }, []); //<--最初の１回だけjsonオブジェクトを取得できればいいので、,[]を記述しておく

    return (
        <div>
            <ul>
                {
                    posts.map((post, key) => (
                        <li key={key}>・{post.Item.itemName}</li>
                    )) //<-- ブラウザにtitleをリスト表示させる
                }
            </ul>
        </div>
    );
};

export default TestApi;
