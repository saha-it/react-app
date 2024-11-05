import React, { useRef, useState } from "react";
import SearchResult from "./SearchResult";

/** ラジオボタン設定 */
interface Radio {
    label: string;
    value: string;
}

//let a: string = "";
let test = "";

const Search = () => {
    /** 選択中のラジオボタンvalue */
    //const [selected, setSelected] = useState("");
    const [prop, setProp] = useState("");
    const [a, setData] = useState("");
    /** ラジオボタン切り替えイベント */
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        test = event.target.value;
        //setSelected(event.target.value);
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
            label: "8~9",
            value: "high",
        },
    ];
    function handleClick() {
        //test = v;
        console.log("test:" + test);
        //console.log("selected:" + selected);
        setData(test);
    }
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
                                    name="sweets"
                                    value={radio.value}
                                    /* checked={radio.value === selected} */
                                    onChange={changeValue}
                                />
                                <label className="form-check-label">
                                    <span className="fs-6">{radio.label}</span>
                                </label>
                            </div>
                        );
                    })}
                </div>
                <div>{test}が選択されました！</div>
                <button onClick={() => handleClick()}>Click me</button>
                <SearchResult props={a} />
            </div>
        </div>
    );
};

export default Search;
