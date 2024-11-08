import React, { useState } from "react";
import RadioButton from "./RadioButton";

import {
    faFaceGrinWide,
    faFaceSmileBeam,
    faFaceGrinStars,
} from "@fortawesome/free-solid-svg-icons";

interface ChildProps {
    // 親コンポートから渡されたコールバック関数
    onChangeFlavor: (value: string) => void;
}

/** ラジオボタン設定 */
interface Radio {
    name: string;
    icon: any;
    label: string;
    value: string;
}

const SelectFlavor: React.FC<ChildProps> = ({ onChangeFlavor }) => {
    /** 選択中のラジオボタンvalue */
    const [flavor, setFlavor] = useState("");
    const changeAlcohol = (event: React.ChangeEvent<HTMLInputElement>) => {
        const a = event.target.value;
        setFlavor(event.target.value);
        onChangeFlavor(a);
    };
    /** ラジオボタン */
    const flavorList: Radio[] = [
        {
            name: "指定しない",
            icon: faFaceGrinWide,
            label: "指定しない",
            value: "",
        },
        {
            name: "濃厚",
            icon: faFaceGrinWide,
            label: "濃厚",
            value: "rich",
        },
        {
            name: "爽快",
            icon: faFaceGrinStars,
            label: "爽快",
            value: "refreshing",
        },
        {
            name: "苦味",
            icon: faFaceGrinWide,
            label: "苦味",
            value: "bitter",
        },
        {
            name: "酸味",
            icon: faFaceSmileBeam,
            label: "酸味",
            value: "sour",
        },
        {
            name: "甘口",
            icon: faFaceGrinStars,
            label: "甘口",
            value: "sweet",
        },
        {
            name: "辛口",
            icon: faFaceGrinStars,
            label: "辛口",
            value: "dry",
        },
    ];
    return (
        <div>
            <RadioButton
                object={flavorList}
                method={changeAlcohol}
                state={flavor}
                radioType={"flavor"}
                title={"味わい"}
            />
        </div>
    );
};

export default SelectFlavor;
