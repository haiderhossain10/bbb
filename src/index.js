import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./assets/css/app.scss";
import App from "./App";
import "./assets/css/responsive.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
