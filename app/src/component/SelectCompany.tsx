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
            name: "サントリー",
            icon: faFaceGrinWide,
            label: "SUNTORY",
            value: "サントリー",
        },
        {
            name: "キリン",
            icon: faFaceGrinWide,
            label: "KIRIN",
            value: "キリン",
        },
        {
            name: "アサヒ",
            icon: faFaceGrinWide,
            label: "ASAHI",
            value: "アサヒ",
        },
        {
            name: "サッポロ",
            icon: faFaceGrinWide,
            label: "SAPPORO",
            value: "サッポロ",
        },
        {
            name: "宝酒造",
            icon: faFaceGrinWide,
            label: "TAKARA",
            value: "宝酒造",
        },
        {
            name: "合同酒精",
            icon: faFaceGrinWide,
            label: "GOUDOU",
            value: "合同酒精",
        },
        {
            name: "コカコーラ",
            icon: faFaceGrinWide,
            label: "COCACOLA",
            value: "コカコーラ",
        },
        {
            name: "クライナー",
            icon: faFaceGrinWide,
            label: "KLEINER",
            value: "クライナー",
        },
        {
            name: "日本ビール",
            icon: faFaceGrinWide,
            label: "NIPPON",
            value: "日本ビール",
        },
        {
            name: "木内酒造",
            icon: faFaceGrinWide,
            label: "KIUTI",
            value: "木内酒造",
        },
        {
            name: "チョーヤ",
            icon: faFaceGrinWide,
            label: "CHOYA",
            value: "チョーヤ",
        },
        {
            name: "サンガリア",
            icon: faFaceGrinWide,
            label: "SANGARIA",
            value: "サンガリア",
        },
        {
            name: "エチゴビール",
            icon: faFaceGrinWide,
            label: "ECHIGO",
            value: "エチゴビール",
        },
        {
            name: "DHC",
            icon: faFaceGrinWide,
            label: "DHC",
            value: "DHC",
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
