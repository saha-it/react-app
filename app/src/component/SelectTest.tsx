import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    onValueChange: (value: string) => void;
}

const SelectTest: React.FC<ChildProps> = ({ onValueChange }) => {
    /** 選択中のラジオボタンvalue */
    const [alcohol, setAlcohol] = useState("");
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const a = event.target.value;
        setAlcohol(event.target.value);
        onValueChange(a);
    };
    /** ラジオボタン */
    const test: Radio[] = [
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
            <div className="flex justify-center items-center h-[30vh]">
                <div className="flex justify-center flex-wrap">
                    {test.map((value, key) => {
                        return (
                            <div
                                className="relative h-[7rem] w-[7rem] m-[0.5rem]"
                                key={key}
                            >
                                <input
                                    id={value.name}
                                    className="opacity-0 absolute top-0 left-0 h-full w-full m-0 cursor-pointer peer"
                                    type="radio"
                                    name="radio"
                                    value={value.value}
                                    checked={value.value === alcohol}
                                    onChange={changeValue}
                                />
                                <div className="flex flex-col items-center justify-center h-full w-full border-2 border-[#079ad9] rounded-md p-[1rem] peer-checked:bg-[#fff]">
                                    <div className="">
                                        <FontAwesomeIcon
                                            className="h-[3em] text-[#079ad9]"
                                            icon={value.icon}
                                        />
                                    </div>
                                    <label
                                        /* for="walk" */ className="text-center text-[0.75rem] font-semibold uppercase tracking-[1px] text-[#079ad9]"
                                    >
                                        {value.name}
                                    </label>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="text-[#fff] m-auto w-[14rem]">
                {alcohol}が選択されました！
            </div>
        </div>
    );
};

export default SelectTest;
