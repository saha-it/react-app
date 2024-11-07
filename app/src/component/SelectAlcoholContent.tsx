import React, { useState } from "react";
import RadioButton from "./RadioButton";

import {
    faFaceGrinWide,
    faFaceSmileBeam,
    faFaceGrinStars,
} from "@fortawesome/free-solid-svg-icons";

interface ChildProps {
    // 親コンポートから渡されたコールバック関数
    changeAlcoholContent: (value: string) => void;
}

/** ラジオボタン設定 */
interface Radio {
    name: string;
    icon: any;
    label: string;
    value: string;
}

const SelectAlcoholContent: React.FC<ChildProps> = ({
    changeAlcoholContent,
}) => {
    /** 選択中のラジオボタンvalue */
    const [alcoholContent, setAlcoholContent] = useState("");
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const a = event.target.value;
        setAlcoholContent(event.target.value);
        changeAlcoholContent(a);
    };
    /** ラジオボタン */
    const alcoholContentList: Radio[] = [
        {
            name: "指定しない",
            icon: faFaceGrinWide,
            label: "指定しない",
            value: "",
        },
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
                object={alcoholContentList}
                method={changeValue}
                state={alcoholContent}
                radioType={"alcohol"}
                title={"アルコール度数"}
            />
        </div>
    );
};

export default SelectAlcoholContent;
