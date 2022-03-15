import React from "react";
import DifImage1 from "./../../assets/img/slide-img/slide-img-1.png";
import DifImage2 from "./../../assets/img/slide-img/slide-img-2.png";
import DifImage3 from "./../../assets/img/slide-img/slide-img-3.png";
import DifImage4 from "./../../assets/img/slide-img/slide-img-4.png";
import Slider from "react-slick";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Difference() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    arrow: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrow: false,
                },
            },
        ],
    };

    return (
        <>
            <section className="difference-box">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="difference-head text-center">
                                <p>OUR TEAM</p>
                                <h2>Trying to make a Difference</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="difference-slide">
                                <Slider {...settings}>
                                    <div className="difference-slide-img">
                                        <img
                                            src={DifImage1}
                                            alt="difference image"
                                        />
                                        <div className="dif-overlay d-flex justify-content-between align-content-center">
                                            <div>
                                                <p>JOHN MARTIN</p>
                                                <span>Founder</span>
                                            </div>
                                            <div className="align-self-center">
                                                <ul className="d-flex align-items-center justify-content-end">
                                                    <a href="javascript:void(0)">
                                                        <FaFacebookF />
                                                    </a>
                                                    <a
                                                        h
                                                        href="javascript:void(0)"
                                                    >
                                                        <FaInstagram />
                                                    </a>
                                                    <a href="javascript:void(0)">
                                                        <FaTwitter />
                                                    </a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="difference-slide-img">
                                        <img
                                            src={DifImage2}
                                            alt="difference image"
                                        />
                                        <div className="dif-overlay d-flex justify-content-between align-content-center">
                                            <div>
                                                <p>Juhon Dew</p>
                                                <span>CEO</span>
                                            </div>
                                            <div className="align-self-center">
                                                <ul className="d-flex align-items-center justify-content-end">
                                                    <a href="javascript:void(0)">
                                                        <FaFacebookF />
                                                    </a>
                                                    <a
                                                        h
                                                        href="javascript:void(0)"
                                                    >
                                                        <FaInstagram />
                                                    </a>
                                                    <a href="javascript:void(0)">
                                                        <FaTwitter />
                                                    </a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="difference-slide-img">
                                        <img
                                            src={DifImage3}
                                            alt="difference image"
                                        />
                                        <div className="dif-overlay d-flex justify-content-between align-content-center">
                                            <div>
                                                <p>MICHEAL DPE</p>
                                                <span>Manager</span>
                                            </div>
                                            <div className="align-self-center">
                                                <ul className="d-flex align-items-center justify-content-end">
                                                    <a href="javascript:void(0)">
                                                        <FaFacebookF />
                                                    </a>
                                                    <a
                                                        h
                                                        href="javascript:void(0)"
                                                    >
                                                        <FaInstagram />
                                                    </a>
                                                    <a href="javascript:void(0)">
                                                        <FaTwitter />
                                                    </a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="difference-slide-img">
                                        <img
                                            src={DifImage4}
                                            alt="difference image"
                                        />
                                        <div className="dif-overlay d-flex justify-content-between align-content-center">
                                            <div>
                                                <p>Alan</p>
                                                <span>Marketing/Social</span>
                                            </div>
                                            <div className="align-self-center">
                                                <ul className="d-flex align-items-center justify-content-end">
                                                    <a href="javascript:void(0)">
                                                        <FaFacebookF />
                                                    </a>
                                                    <a
                                                        h
                                                        href="javascript:void(0)"
                                                    >
                                                        <FaInstagram />
                                                    </a>
                                                    <a href="javascript:void(0)">
                                                        <FaTwitter />
                                                    </a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="difference-slide-img">
                                        <img
                                            src={DifImage2}
                                            alt="difference image"
                                        />
                                        <div className="dif-overlay d-flex justify-content-between align-content-center">
                                            <div>
                                                <p>Juhon Dew</p>
                                                <span>CEO</span>
                                            </div>
                                            <div className="align-self-center">
                                                <ul className="d-flex align-items-center justify-content-end">
                                                    <a href="javascript:void(0)">
                                                        <FaFacebookF />
                                                    </a>
                                                    <a
                                                        h
                                                        href="javascript:void(0)"
                                                    >
                                                        <FaInstagram />
                                                    </a>
                                                    <a href="javascript:void(0)">
                                                        <FaTwitter />
                                                    </a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="difference-slide-img">
                                        <img
                                            src={DifImage3}
                                            alt="difference image"
                                        />
                                        <div className="dif-overlay d-flex justify-content-between align-content-center">
                                            <div>
                                                <p>MICHEAL DPE</p>
                                                <span>Manager</span>
                                            </div>
                                            <div className="align-self-center">
                                                <ul className="d-flex align-items-center justify-content-end">
                                                    <a href="javascript:void(0)">
                                                        <FaFacebookF />
                                                    </a>
                                                    <a
                                                        h
                                                        href="javascript:void(0)"
                                                    >
                                                        <FaInstagram />
                                                    </a>
                                                    <a href="javascript:void(0)">
                                                        <FaTwitter />
                                                    </a>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Difference;
