import React from "react";
import News1 from "./../../assets/img/news-1.jpg";
import News2 from "./../../assets/img/news-2.jpg";
import News3 from "./../../assets/img/news-3.jpg";
import Slider from "react-slick";
import UiButton from "../button/UiButton";
function News() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
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
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrow: false,
                    dots: false,
                },
            },
        ],
    };
    return (
        <>
            <section className="news-box">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="news-head text-center">
                                <h2>News</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="news-slide-box">
                                <Slider {...settings}>
                                    <div className="news-card">
                                        <div className="news-card-img">
                                            <img
                                                src={News1}
                                                alt="news image"
                                                className="img-fluid"
                                            />
                                            <span>Jan 4</span>
                                        </div>
                                        <div className="news-content">
                                            <h4>
                                                Heightening Donbass Conflict in
                                                Ukraine May Be Russia's Most...
                                            </h4>
                                            <p>
                                                Nemo enim ipsam voluptatem quia
                                                volup tas sit aspernatur aut
                                                odit aut fu sed quia conse quun
                                                tur magni dolor quia.
                                            </p>
                                        </div>
                                        <ul className="d-flex align-items-center justify-content-between">
                                            <li>
                                                Post by
                                                <span>Robert Downey</span>
                                            </li>
                                            <li>0 Comments</li>
                                        </ul>
                                    </div>
                                    <div className="news-card">
                                        <div className="news-card-img">
                                            <img
                                                src={News2}
                                                alt="news image"
                                                className="img-fluid"
                                            />
                                            <span>Jan 4</span>
                                        </div>
                                        <div className="news-content">
                                            <h4>
                                                Heightening Donbass Conflict in
                                                Ukraine May Be Russia's Most...
                                            </h4>
                                            <p>
                                                Nemo enim ipsam voluptatem quia
                                                volup tas sit aspernatur aut
                                                odit aut fu sed quia conse quun
                                                tur magni dolor quia.
                                            </p>
                                        </div>
                                        <ul className="d-flex align-items-center justify-content-between">
                                            <li>
                                                Post by
                                                <span>Robert Downey</span>
                                            </li>
                                            <li>0 Comments</li>
                                        </ul>
                                    </div>
                                    <div className="news-card">
                                        <div className="news-card-img">
                                            <img
                                                src={News3}
                                                alt="news image"
                                                className="img-fluid"
                                            />
                                            <span>Jan 4</span>
                                        </div>
                                        <div className="news-content">
                                            <h4>
                                                Heightening Donbass Conflict in
                                                Ukraine May Be Russia's Most...
                                            </h4>
                                            <p>
                                                Nemo enim ipsam voluptatem quia
                                                volup tas sit aspernatur aut
                                                odit aut fu sed quia conse quun
                                                tur magni dolor quia.
                                            </p>
                                        </div>
                                        <ul className="d-flex align-items-center justify-content-between">
                                            <li>
                                                Post by
                                                <span>Robert Downey</span>
                                            </li>
                                            <li>0 Comments</li>
                                        </ul>
                                    </div>
                                    <div className="news-card">
                                        <div className="news-card-img">
                                            <img
                                                src={News2}
                                                alt="news image"
                                                className="img-fluid"
                                            />
                                            <span>Jan 4</span>
                                        </div>
                                        <div className="news-content">
                                            <h4>
                                                Heightening Donbass Conflict in
                                                Ukraine May Be Russia's Most...
                                            </h4>
                                            <p>
                                                Nemo enim ipsam voluptatem quia
                                                volup tas sit aspernatur aut
                                                odit aut fu sed quia conse quun
                                                tur magni dolor quia.
                                            </p>
                                        </div>
                                        <ul className="d-flex align-items-center justify-content-between">
                                            <li>
                                                Post by
                                                <span>Robert Downey</span>
                                            </li>
                                            <li>0 Comments</li>
                                        </ul>
                                    </div>
                                </Slider>
                            </div>
                            <div className="news-btn d-flex justify-content-center">
                                <UiButton>Discover more</UiButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default News;
