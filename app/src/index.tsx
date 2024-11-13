import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Header from "./component/Header";
import Top from "./component/Top";
import SearchResult from "./component/SearchResult";
import imgDoor from "./images/door1.png";
import "./App.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
const APP_NAME: String = "react-app";

root.render(
    <div>
        <a
            className="fixed z-10 right-10 bottom-10 bg-[#fff] w-28 h-28 rounded-full text-center"
            href="#top"
        >
            <img className="w-20 m-auto px-4 pt-6" src={imgDoor}></img>
            <p className="text-xs font-serif font-semibold">トップにもどる</p>
        </a>
        {/* <Search /> */}
        {/* <Header /> */}
        <Top />
        <SearchResult />
    </div>
);

reportWebVitals();
