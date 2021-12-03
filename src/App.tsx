import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const [url, setUrl] = useState<string | undefined>("");

    useEffect(() => {
        async function getCurrentTab() {
            let queryOptions = { active: true, currentWindow: true };
            let [tab] = await chrome.tabs.query(queryOptions);
            setUrl(tab?.url);
        }
        getCurrentTab();
    }, []);

    return (
        <div className="App">
            d
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
                    {url}
                </a>
            </header>
        </div>
    );
}

export default App;
