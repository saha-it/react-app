import React, { useRef, useState } from "react";

/** ラジオボタン設定 */
interface Radio {
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
        const a = event.target.value;
        setType(event.target.value);
        changeType(a);
    };
    /** ラジオボタン */
    const alcoholList: Radio[] = [
        {
            label: "ビール",
            value: "beer",
        },
        {
            label: "ハイボール",
            value: "highball",
        },
        {
            label: "サワー",
            value: "sour",
        },
        {
            label: "チューハイ",
            value: "chuhai",
        },
        {
            label: "ほろよい",
            value: "horoyoi",
        },
        {
            label: "ストロングゼロ",
            value: "strongzero",
        },
    ];
    return (
        <div>
            <div className="container form-check m-auto">
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
            </div>
        </div>
    );
};

export default SelectType;
