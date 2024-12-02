import React, { useRef, useState } from "react";
import RadioButton from "./RadioButton";

import {
    faFaceGrinWide,
    faFaceSmileBeam,
    faFaceGrinStars,
    faWhiskeyGlass,
} from "@fortawesome/free-solid-svg-icons";

import imgBeer from "../images/type/beer.svg";
import imgCan from "../images/type/can.svg";
import imgBin from "../images/type/bin.svg";
import imgSour from "../images/type/sour.svg";
import imgWine from "../images/type/wine.svg";
import imgCocktail from "../images/type/cocktail.svg";
import imgSyochu from "../images/type/shochu.svg";
import imgOtya from "../images/type/otya.svg";

/** ラジオボタン設定 */
interface Radio {
    name: string;
    iconType: string;
    icon: any;
    label: string;
    value: string;
}

interface ChildProps {
    // 親コンポートから渡されたコールバック関数
    changeType: (value: string) => void;
}

const SelectType: React.FC<ChildProps> = ({ changeType }) => {
    /** 選択中のラジオボタンvalue */
    const [type, setType] = useState("");
    /** ラジオボタン切り替えイベント */
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const t = event.target.value;
        setType(event.target.value);
        changeType(t);
    };
    /** ラジオボタン */
    const alcoholList: Radio[] = [
        {
            name: "ビール",
            iconType: "img",
            icon: imgBeer,
            label: "beer",
            value: "ビール",
        },
        {
            name: "発泡酒",
            iconType: "img",
            icon: imgCan,
            label: "beer3",
            value: "発泡酒",
        },
        {
            name: "ハイボール",
            iconType: "fontAwsome",
            icon: faWhiskeyGlass,
            label: "highball",
            value: "ハイボール",
        },
        {
            name: "サワー",
            iconType: "img",
            icon: imgSour,
            label: "sour",
            value: "サワー",
        },
        {
            name: "氷結",
            iconType: "img",
            icon: imgCan,
            label: "hyoketu",
            value: "氷結",
        },
        {
            name: "ほろよい",
            iconType: "img",
            icon: imgCan,
            label: "horoyoi",
            value: "ほろよい",
        },
        {
            name: "ストロング",
            iconType: "img",
            icon: imgCan,
            label: "strongzero",
            value: "ストロング",
        },
        {
            name: "196",
            iconType: "img",
            icon: imgCan,
            label: "196",
            value: "196",
        },
        {
            name: "クライナー",
            iconType: "img",
            icon: imgBin,
            label: "kleiner",
            value: "クライナー",
        },
        {
            name: "ワイン",
            iconType: "img",
            icon: imgWine,
            label: "wine",
            value: "ワイン",
        },
        {
            name: "カクテル",
            iconType: "img",
            icon: imgCocktail,
            label: "cocktail",
            value: "カクテル",
        },
        {
            name: "焼酎",
            iconType: "img",
            icon: imgSyochu,
            label: "shochu",
            value: "焼酎",
        },
        {
            name: "お茶割り",
            iconType: "img",
            icon: imgOtya,
            label: "otyawari",
            value: "お茶割り",
        },
        {
            name: "梅酒",
            iconType: "img",
            icon: imgOtya,
            label: "umesyu",
            value: "梅酒",
        },
        {
            name: "指定しない",
            iconType: "",
            icon: faFaceGrinWide,
            label: "指定しない",
            value: "",
        },
    ];
    return (
        <div>
            <RadioButton
                object={alcoholList}
                method={changeValue}
                state={type}
                radioType={"type"}
                title={"種類・シリーズ"}
            />
            {/* <div className="container form-check m-auto bg-[#fff]">
                <div className="row">
                    {alcoholList.map((radio, key) => {
                        return (
                            <div className="col-4" key={key}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="type"
                                    value={radio.value}
                                    checked={radio.value === type}
                                    onChange={changeValue}
                                />
                                <label className="form-check-label">
                                    <span className="fs-6">{radio.label}</span>
                                </label>
                            </div>
                        );
                    })}
                </div>
                <div>{type}が選択されました！</div>
            </div> */}
        </div>
    );
};

export default SelectType;
