import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Header from "./component/Header";
import Top from "./component/Top";
import TopButton from "./component/TopButton";
import SearchResult from "./component/SearchResult";
import "./App.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
const APP_NAME: String = "react-app";

root.render(
    <div>
        <TopButton />
        {/* <Search /> */}
        {/* <Header /> */}
        <Top />
        <SearchResult />
    </div>
);

reportWebVitals();
