import React from "react";
import TestApi from "./TestApi";
import TestParent from "./TestParent";

function Top() {
    return (
        <div className="">
            <p>toppage</p>
            {/* <TestApi /> */}
            <TestParent />
        </div>
    );
}

export default Top;
