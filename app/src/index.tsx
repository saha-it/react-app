import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Header from "./component/Header";
import Top from "./component/Top";
import SearchResult from "./component/SearchResult";

import imgDoor from "./images/door1.png";

import SelectTest from "./component/SelectTest";
import "./App.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
const APP_NAME: String = "react-app";

root.render(
    <div>
        <a
            className="fixed z-10 right-10 bottom-10 bg-[#fff] w-24 h-24 rounded-full text-center"
            href="#top"
        >
            <img className="w-20 m-auto px-4 pt-4" src={imgDoor}></img>
            <p className="text-xs">TOPにもどる</p>
        </a>

        {/* <BrowserRouter>
            <Routes>
                <Route path={APP_NAME + "/"} element={<App />} />
                <Route path={APP_NAME + "/top"} element={<Top />} />
            </Routes>
        </BrowserRouter> */}
        {/* <Search /> */}
        <Header />
        <Top />
        <SearchResult />
    </div>
);

reportWebVitals();
