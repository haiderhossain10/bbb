import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./assets/css/app.scss";
import "./assets/css/responsive.scss";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
