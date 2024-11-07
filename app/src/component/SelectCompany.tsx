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
    changeCompany: (value: string) => void;
}

const SelectCompany: React.FC<ChildProps> = ({ changeCompany }) => {
    /** 選択中のラジオボタンvalue */
    const [company, setCompany] = useState("");
    /** ラジオボタン切り替えイベント */
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const t = event.target.value;
        setCompany(event.target.value);
        changeCompany(t);
    };
    /** ラジオボタン */
    const companyList: Radio[] = [
        {
            name: "指定しない",
            icon: faFaceGrinWide,
            label: "指定しない",
            value: "",
        },
        {
            name: "サントリー",
            icon: faFaceGrinWide,
            label: "サントリー",
            value: "SUNTORY",
        },
        {
            name: "キリン",
            icon: faFaceGrinWide,
            label: "キリン",
            value: "KIRIN",
        },
        {
            name: "アサヒ",
            icon: faFaceGrinWide,
            label: "アサヒ",
            value: "ASAHI",
        },
        {
            name: "サッポロ",
            icon: faFaceGrinWide,
            label: "サッポロ",
            value: "SAPPORO",
        },
        {
            name: "宝酒造",
            icon: faFaceGrinWide,
            label: "宝酒造",
            value: "TAKARA",
        },
    ];
    return (
        <div>
            <RadioButton
                object={companyList}
                method={changeValue}
                state={company}
                radioType={"company"}
                title={"メーカー"}
            />
        </div>
    );
};

export default SelectCompany;
