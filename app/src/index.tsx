import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Top from "./component/Top";
import Search from "./component/Search";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
const APP_NAME: String = "react-app";

root.render(
    <div>
        <BrowserRouter>
            <Routes>
                <Route path={APP_NAME + "/"} element={<App />} />
                <Route path={APP_NAME + "/top"} element={<Top />} />
            </Routes>
        </BrowserRouter>
        {/* <Search /> */}
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
