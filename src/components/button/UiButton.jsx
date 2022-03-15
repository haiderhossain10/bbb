import React from "react";
import "./Button.scss";

function UiButton({ children }) {
    return (
        <>
            <button className="ui-btn">{children}</button>
        </>
    );
}

export default UiButton;
