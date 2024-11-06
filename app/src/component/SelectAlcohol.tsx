import React, { useState } from "react";
import RadioButton from "./RadioButton";

import {
    faFaceGrinWide,
    faFaceSmileBeam,
    faFaceGrinStars,
} from "@fortawesome/free-solid-svg-icons";

interface ChildProps {
    // 親コンポートから渡されたコールバック関数
    onChangeAlcohol: (value: string) => void;
}

/** ラジオボタン設定 */
interface Radio {
    name: string;
    icon: any;
    label: string;
    value: string;
}

const RadioButtonTest: React.FC<ChildProps> = ({ onChangeAlcohol }) => {
    /** 選択中のラジオボタンvalue */
    const [alcohol, setAlcohol] = useState("");
    const changeAlcohol = (event: React.ChangeEvent<HTMLInputElement>) => {
        const a = event.target.value;
        setAlcohol(event.target.value);
        onChangeAlcohol(a);
    };
    /** ラジオボタン */
    const arr: Radio[] = [
        {
            name: "LOW",
            icon: faFaceGrinWide,
            label: "3~4",
            value: "low",
        },
        {
            name: "MIDDLE",
            icon: faFaceSmileBeam,
            label: "5~7",
            value: "middle",
        },
        {
            name: "HIGH",
            icon: faFaceGrinStars,
            label: "8~",
            value: "high",
        },
    ];
    return (
        <div>
            <RadioButton
                object={arr}
                method={changeAlcohol}
                state={alcohol}
                radioType={"alcohol"}
                title={"アルコール度数"}
            />
        </div>
    );
};

export default RadioButtonTest;
