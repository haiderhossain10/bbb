import React, { useState } from "react";
import UiBorderButton from "../button/UiBorderButton";
import UiButton from "../button/UiButton";
import Logo from "./../../assets/img/logo.png";
import "./Header.scss";
import { ImCross } from "react-icons/im";

function Header() {
    const [isActiveBar, setActiveBar] = useState(false);
    const handburgerHandler = () => {
        setActiveBar(true);
    };
    const crossHandler = () => {
        setActiveBar(false);
    };
    return (
        <>
            {/* header nav start */}
            <header className="header-container-w header-container d-flex align-items-center">
                <div className="w-100">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="header-nav header-left">
                                <nav className="d-flex align-items-center">
                                    <a href="#home">Home</a>
                                    <a href="#about">About us</a>
                                    <a href="#benefit">Benefit & Utilities</a>
                                    <a href="#faq">FAQ’s</a>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-1 d-flex justify-content-center">
                            <div className="header-logo">
                                <img src={Logo} alt="logo" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="header-nav header-right">
                                <nav className="d-flex align-items-center justify-content-end">
                                    <a href="#">Collection</a>
                                    <a href="#road-map">Road Map</a>
                                    <a href="#contact">
                                        <UiBorderButton>Contact</UiBorderButton>
                                    </a>
                                    <UiButton>Connect Wallet</UiButton>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className="header-mobile-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-between align-items-center">
                            <div className="header-mobile-logo">
                                <img src={Logo} alt="Mobile Logo" />
                            </div>
                            <div className="header-mobile-wallet">
                                <UiButton>Connect Wallet</UiButton>
                            </div>
                            <div
                                className="header-mobile-handburger"
                                onClick={handburgerHandler}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                {isActiveBar && (
                    <div className="header-mobile-nav">
                        <div className="header-mobile-menu">
                            <a href="#">Home</a>
                            <a href="#">About us</a>
                            <a href="#">Benefit & Utilities</a>
                            <a href="#">FAQ’s</a>
                            <a href="#">Collection</a>
                            <a href="#">Road Map</a>
                            <UiBorderButton>Contact</UiBorderButton>
                        </div>
                        <div
                            className="header-mobile-cross"
                            onClick={crossHandler}
                        >
                            <ImCross />
                        </div>
                    </div>
                )}
            </header>

            {/* header nav end */}
        </>
    );
}

export default Header;
