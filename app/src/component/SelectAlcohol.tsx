import React, { useRef, useState } from "react";

/** ラジオボタン設定 */
interface Radio {
    label: string;
    value: string;
}

interface ChildProps {
    // 親コンポートから渡されたコールバック関数
    onValueChange: (value: string) => void;
}

const TestChild: React.FC<ChildProps> = ({ onValueChange }) => {
    /** 選択中のラジオボタンvalue */
    const [alcohol, setAlcohol] = useState("");
    /** ラジオボタン切り替えイベント */
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const a = event.target.value;
        setAlcohol(event.target.value);
        onValueChange(a);
    };
    /** ラジオボタン */
    const alcoholList: Radio[] = [
        {
            label: "3~4",
            value: "low",
        },
        {
            label: "5~7",
            value: "middle",
        },
        {
            label: "8~",
            value: "high",
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
                                    name="alcohol-content"
                                    value={radio.value}
                                    checked={radio.value === alcohol}
                                    onChange={changeValue}
                                />
                                <label className="form-check-label">
                                    <span className="fs-6">{radio.label}</span>
                                </label>
                            </div>
                        );
                    })}
                </div>
                <div>{alcohol}が選択されました！</div>
            </div>
        </div>
    );
};

export default TestChild;
