import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* interface RadioObject {
    name: string;
    icon: any;
    label: string;
    value: string;
} */

const RadioButton = (props: any) => {
    return (
        <div>
            <div className="justify-center items-center h-fit">
                <p className="text-[#fff] w-fit m-auto font-serif font-semibold">
                    {props.title}
                </p>
                <div className="flex justify-center flex-wrap">
                    {props.object.map((property: any, key: number) => {
                        return (
                            <div
                                className="relative h-[7rem] w-[7rem] m-[0.5rem]"
                                key={key}
                            >
                                <input
                                    id={property.value}
                                    className="opacity-0 absolute top-0 left-0 h-full w-full m-0 cursor-pointer peer"
                                    type="radio"
                                    name={props.radioType}
                                    value={property.value}
                                    checked={property.value === props.state}
                                    onChange={props.method}
                                />
                                <div className="flex flex-col items-center justify-center h-full w-full border-2 border-[#079ad9] rounded-md p-[1rem] peer-checked:bg-[#fff]">
                                    <div className="">
                                        <FontAwesomeIcon
                                            className="h-[3em] text-[#079ad9]"
                                            icon={property.icon}
                                        />
                                    </div>
                                    <label className="text-center text-[0.75rem] font-semibold uppercase tracking-[1px] text-[#079ad9]">
                                        {property.name}
                                    </label>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="text-[#fff] m-auto w-fit">
                {props.state}が選択されました！
            </div>
        </div>
    );
};

export default RadioButton;
