import React from "react";
import "./Button.scss";

function UiBorderButton({ children }) {
    return (
        <>
            <button className="ui-btn-border">{children}</button>
        </>
    );
}

export default UiBorderButton;
