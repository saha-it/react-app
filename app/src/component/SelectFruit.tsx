import React, { useRef, useState } from "react";
import RadioButton from "./RadioButton";

import { faFaceGrinWide } from "@fortawesome/free-solid-svg-icons";

import imgStrawberry from "../images/fruit/strawberry.svg";
import imgLemon from "../images/fruit/lemon.svg";
import imgGrape from "../images/fruit/grape.svg";
import imgMelon from "../images/fruit/melon.svg";
import imgPineapple from "../images/fruit/pineapple.svg";
import imgPeach from "../images/fruit/peach.svg";
import imgWatermelon from "../images/fruit/watermelon.svg";
import imgYuzu from "../images/fruit/yuzu.svg";
import imgUme from "../images/fruit/ume.svg";
import imgApple from "../images/fruit/apple.svg";
import imgJapanesepear from "../images/fruit/japanesepear.svg";
import imgAloe from "../images/fruit/aloe.svg";
import imgMandarin from "../images/fruit/mandarin.svg";
import imgOrange from "../images/fruit/orange.svg";
import imgMuscat from "../images/fruit/muscat.svg";
import imgKiwi from "../images/fruit/kiwi.svg";
import imgCassis from "../images/fruit/cassis.svg";
import imgGrapefruit from "../images/fruit/grapefruit.svg";

/** ラジオボタン設定 */
interface Radio {
    name: string;
    iconType: string;
    iconColor: string;
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
            iconType: "img",
            iconColor: "red",
            icon: imgStrawberry,
            label: "strawberry",
            value: "イチゴ",
        },
        {
            name: "レモン",
            iconType: "img",
            iconColor: "yellow",
            icon: imgLemon,
            label: "lemon",
            value: "レモン",
        },
        {
            name: "グレープ",
            iconType: "img",
            iconColor: "purple",
            icon: imgGrape,
            label: "grape",
            value: "グレープ",
        },
        {
            name: "メロン",
            iconType: "img",
            iconColor: "palegreen",
            icon: imgMelon,
            label: "melon",
            value: "メロン",
        },
        {
            name: "パイン",
            iconType: "img",
            iconColor: "yellow",
            icon: imgPineapple,
            label: "pineapple",
            value: "パイン",
        },
        {
            name: "モモ",
            iconType: "img",
            iconColor: "pink",
            icon: imgPeach,
            label: "peach",
            value: "モモ",
        },
        {
            name: "スイカ",
            iconType: "img",
            iconColor: "green",
            icon: imgWatermelon,
            label: "watermelon",
            value: "スイカ",
        },
        {
            name: "ゆず",
            iconType: "img",
            iconColor: "yellow",
            icon: imgYuzu,
            label: "yuzu",
            value: "ゆず",
        },
        {
            name: "うめ",
            iconType: "img",
            iconColor: "pink",
            icon: imgUme,
            label: "ume",
            value: "うめ",
        },
        {
            name: "リンゴ",
            iconType: "img",
            iconColor: "red",
            icon: imgApple,
            label: "apple",
            value: "リンゴ",
        },
        {
            name: "なし",
            iconType: "img",
            iconColor: "red",
            icon: imgJapanesepear,
            label: "japanesepear",
            value: "なし",
        },
        {
            name: "アロエ",
            iconType: "img",
            iconColor: "green",
            icon: imgAloe,
            label: "aloe",
            value: "アロエ",
        },
        {
            name: "みかん",
            iconType: "img",
            iconColor: "orange",
            icon: imgMandarin,
            label: "mandarin",
            value: "みかん",
        },
        {
            name: "オレンジ",
            iconType: "img",
            iconColor: "orange",
            icon: imgOrange,
            label: "orange",
            value: "オレンジ",
        },
        {
            name: "マスカット",
            iconType: "img",
            iconColor: "palegreen",
            icon: imgMuscat,
            label: "muscat",
            value: "マスカット",
        },
        {
            name: "キウイ",
            iconType: "img",
            iconColor: "palegreen",
            icon: imgKiwi,
            label: "kiwi",
            value: "キウイ",
        },
        {
            name: "カシス",
            iconType: "img",
            iconColor: "purple",
            icon: imgCassis,
            label: "cassis",
            value: "カシス",
        },
        {
            name: "グレープフルーツ",
            iconType: "img",
            iconColor: "crimson",
            icon: imgGrapefruit,
            label: "grapefruit",
            value: "グレープフルーツ",
        },
        {
            name: "指定しない",
            iconType: "",
            iconColor: "",
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
