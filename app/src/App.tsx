import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

//TODO 不要ファイルなので削除

function App() {
    const { useState, useEffect } = React;
    const [message, getMessage] = useState("783-0060の都道府県は？");
    useEffect(() => {
        axios
            .get("https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060")
            .then((results) => {
                console.log(results.data);
                getMessage(results.data.results[0].address1);
            })
            .catch((error) => {
                console.log("失敗");
                console.log(error.status);
            });
    });
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <p>{message}</p>
            </header>
        </div>
    );
}

export default App;
