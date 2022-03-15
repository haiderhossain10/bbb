import React from "react";
import UiButton from "../button/UiButton";
import DiscordBg from "../../assets/img/discord-bg.png";

function Discord() {
    return (
        <>
            <section className="discord-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="discord-content text-center"
                                style={{ backgroundImage: `url(${DiscordBg})` }}
                            >
                                <p>People Community</p>
                                <h2>Stay Connected with us on Discord</h2>
                                <UiButton>Contact with us</UiButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Discord;
