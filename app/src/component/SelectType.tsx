import React, { useRef, useState } from "react";
import RadioButton from "./RadioButton";

import {
    faFaceGrinWide,
    faFaceSmileBeam,
    faFaceGrinStars,
    faWhiskeyGlass,
} from "@fortawesome/free-solid-svg-icons";

import imgBeer from "../images/type/beer.png";
import imgCan from "../images/type/can.png";
import imgSour from "../images/type/sour.png";
import imgWine from "../images/type/wine.png";
import imgCocktail from "../images/type/cocktail.png";
import imgSyochu from "../images/type/shochu.png";
import imgOtya from "../images/type/otya.png";

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
            name: "指定しない",
            iconType: "",
            icon: faFaceGrinWide,
            label: "指定しない",
            value: "",
        },
        {
            name: "ビール",
            iconType: "png",
            icon: imgBeer,
            label: "beer",
            value: "ビール",
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
            iconType: "png",
            icon: imgSour,
            label: "sour",
            value: "サワー",
        },
        {
            name: "チューハイ",
            iconType: "png",
            icon: imgCan,
            label: "chuhai",
            value: "チューハイ",
        },
        {
            name: "ほろよい",
            iconType: "png",
            icon: imgCan,
            label: "horoyoi",
            value: "ほろよい",
        },
        {
            name: "ストロングゼロ",
            iconType: "png",
            icon: imgCan,
            label: "strongzero",
            value: "ストロングゼロ",
        },
        {
            name: "ワイン",
            iconType: "png",
            icon: imgWine,
            label: "wine",
            value: "ワイン",
        },
        {
            name: "カクテル",
            iconType: "png",
            icon: imgCocktail,
            label: "cocktail",
            value: "カクテル",
        },
        {
            name: "焼酎",
            iconType: "png",
            icon: imgSyochu,
            label: "shochu",
            value: "焼酎",
        },
        {
            name: "お茶割り",
            iconType: "png",
            icon: imgOtya,
            label: "otyawari",
            value: "お茶割り",
        },
    ];
    return (
        <div>
            <RadioButton
                object={alcoholList}
                method={changeValue}
                state={type}
                radioType={"type"}
                title={"お酒の種類"}
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
