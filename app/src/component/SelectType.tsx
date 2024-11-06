import React, { useRef, useState } from "react";
import RadioButton from "./RadioButton";

import {
    faFaceGrinWide,
    faFaceSmileBeam,
    faFaceGrinStars,
} from "@fortawesome/free-solid-svg-icons";

/** ラジオボタン設定 */
interface Radio {
    name: string;
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
            icon: faFaceGrinWide,
            label: "ビール",
            value: "beer",
        },
        {
            name: "ハイボール",
            icon: faFaceGrinWide,
            label: "ハイボール",
            value: "highball",
        },
        {
            name: "サワー",
            icon: faFaceGrinWide,
            label: "サワー",
            value: "sour",
        },
        {
            name: "チューハイ",
            icon: faFaceGrinWide,
            label: "チューハイ",
            value: "chuhai",
        },
        {
            name: "ほろよい",
            icon: faFaceGrinWide,
            label: "ほろよい",
            value: "horoyoi",
        },
        {
            name: "ストロングゼロ",
            icon: faFaceGrinWide,
            label: "ストロングゼロ",
            value: "strongzero",
        },
        {
            name: "ワイン",
            icon: faFaceGrinWide,
            label: "ワイン",
            value: "wine",
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
