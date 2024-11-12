import React, { useRef, useState } from "react";
import RadioButton from "./RadioButton";

import { faFaceGrinWide } from "@fortawesome/free-solid-svg-icons";

/** ラジオボタン設定 */
interface Radio {
    name: string;
    icon: any;
    label: string;
    value: string;
}

interface ChildProps {
    // 親コンポートから渡されたコールバック関数
    changeFruit: (value: string) => void;
}

const SelectFruit: React.FC<ChildProps> = ({ changeFruit }) => {
    /** 選択中のラジオボタンvalue */
    const [fruit, setFruit] = useState("");
    /** ラジオボタン切り替えイベント */
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const t = event.target.value;
        setFruit(event.target.value);
        changeFruit(t);
    };
    /** ラジオボタン */
    const fruitList: Radio[] = [
        {
            name: "イチゴ",
            icon: faFaceGrinWide,
            label: "strawberry",
            value: "イチゴ",
        },
        {
            name: "レモン",
            icon: faFaceGrinWide,
            label: "lemon",
            value: "レモン",
        },
        {
            name: "グレープ",
            icon: faFaceGrinWide,
            label: "grape",
            value: "グレープ",
        },
        {
            name: "メロン",
            icon: faFaceGrinWide,
            label: "melon",
            value: "メロン",
        },
        {
            name: "パイン",
            icon: faFaceGrinWide,
            label: "pineapple",
            value: "パイン",
        },
        {
            name: "モモ",
            icon: faFaceGrinWide,
            label: "peach",
            value: "モモ",
        },
        {
            name: "スイカ",
            icon: faFaceGrinWide,
            label: "watermelon",
            value: "スイカ",
        },
        {
            name: "ゆず",
            icon: faFaceGrinWide,
            label: "yuzu",
            value: "ゆず",
        },
        {
            name: "うめ",
            icon: faFaceGrinWide,
            label: "ume",
            value: "うめ",
        },
        {
            name: "リンゴ",
            icon: faFaceGrinWide,
            label: "apple",
            value: "リンゴ",
        },
        {
            name: "アロエ",
            icon: faFaceGrinWide,
            label: "aloe",
            value: "アロエ",
        },
        {
            name: "みかん",
            icon: faFaceGrinWide,
            label: "mandarin",
            value: "みかん",
        },
        {
            name: "オレンジ",
            icon: faFaceGrinWide,
            label: "orange",
            value: "オレンジ",
        },
        {
            name: "マスカット",
            icon: faFaceGrinWide,
            label: "muscat",
            value: "マスカット",
        },
        {
            name: "キウイ",
            icon: faFaceGrinWide,
            label: "kiwi",
            value: "キウイ",
        },
        {
            name: "カシス",
            icon: faFaceGrinWide,
            label: "cassis",
            value: "カシス",
        },
        {
            name: "グレープフルーツ",
            icon: faFaceGrinWide,
            label: "grapefruit",
            value: "グレープフルーツ",
        },
        {
            name: "指定しない",
            icon: faFaceGrinWide,
            label: "指定しない",
            value: "",
        },
    ];
    return (
        <div>
            <RadioButton
                object={fruitList}
                method={changeValue}
                state={fruit}
                radioType={"fruit"}
                title={"フルーツ"}
            />
        </div>
    );
};

export default SelectFruit;
