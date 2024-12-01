import React, { useState, useEffect } from "react";
import axios from "axios";

interface ImageUrl {
    imageUrl: string;
}

interface Item {
    itemName: string;
    mediumImageUrls: Array<ImageUrl>;
}

type Fetch = {
    id: number;
    title: string;
    Item: Item;
    itemName: string;
};
//https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20220601?format=json&period=realtime&genreId=565949&applicationId=
const apiURL = process.env.REACT_APP_API_KEY;
const requestURL: string =
    "https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20220601?format=json";
const period: string = "&period=realtime";
const genreId: string = "&genreId=565949";
/* "https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20220601?format=json&period=realtime&genreId=565949&applicationId=" +
                    apiURL */
/* requestURL + period + genreId + "&applicationId=" + apiURL */

const TestApi = () => {
    const [posts, setPosts] = useState<Fetch[]>([]);

    /* useEffect(() => {
        axios
            .get(
                "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&shopCode=kuranosuke&applicationId=1075902594404183588"
            )
            .then((res) => {
                setPosts(res.data.Items);
                console.log(res.data.Items);
            })
            .catch((error) => {
                console.log("失敗");
                console.log(error.status);
            });
    }, []); */

    return (
        <div>
            <ul>
                {/* {posts.map((post, key) => (
                    <li key={key}>
                        ・{post.Item.itemName}
                        <img src={post.Item.mediumImageUrls[0].imageUrl} />
                    </li>
                ))} */}
            </ul>
        </div>
    );
};

export default TestApi;
