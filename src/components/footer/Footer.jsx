import React from "react";
import { ReactComponent as FooterLogo } from "./../../assets/img/footer-logo.svg";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

function Footer() {
    return (
        <>
            <footer className="footer-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="footer-content text-center">
                                <FooterLogo />
                                <p>
                                    Subscribe to be informed about token sale in
                                    advance
                                </p>
                                <div className="footer-input">
                                    <input type="text" placeholder="Email" />
                                    <button>Subscribe</button>
                                </div>
                                <div className="footer-social">
                                    <a href="#">
                                        <FaFacebookF />
                                    </a>
                                    <a href="#">
                                        <FiInstagram />
                                    </a>
                                    <a href="#">
                                        <FaTwitter />
                                    </a>
                                    <a href="#">
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                                <p>
                                    Bread Basket Battalion © 2022 All rights
                                    reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
