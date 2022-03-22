import React, { useEffect, useRef, useState } from "react";
import UiButton from "../components/button/UiButton";
import Layout from "../components/layout/Layout";
import BannerImg from "./../assets/img/banner-bg.png";
import BannerLeft from "./../assets/img/banner-left-img.png";
import BannerRight from "./../assets/img/banner-right-img.png";
import StoryCircle from "./../assets/img/our-story-circle.png";
import StoryIcon from "./../assets/img/our-story-icon.png";
import MissionOverlay from "./../assets/img/mission-overlay.png";
import GenerateImg1 from "./../assets/img/slide-img/slide-img-1.png";
import GenerateImg2 from "./../assets/img/slide-img/slide-img-2.png";
import GenerateImg3 from "./../assets/img/slide-img/slide-img-3.png";
import GenerateImg4 from "./../assets/img/slide-img/slide-img-4.png";
import GenerateImg5 from "./../assets/img/slide-img/slide-img-5.png";
import GenerateImg6 from "./../assets/img/slide-img/slide-img-6.png";
import GenerateImg7 from "./../assets/img/slide-img/slide-img-7.png";

import ReadDocBg from "./../assets/img/doc-bg.png";
import DocMarkIcon from "./../assets/img/doc-mark.png";
import { ReactComponent as RoadMap } from "./../assets/img/roadmap.svg";
import { ReactComponent as RoadMapMobile } from "./../assets/img/roadmap-mobile.svg";
import CountUp from "react-countup";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";
import Difference from "../components/difference/Difference";
import News from "../components/news/News";
import Faq from "../components/faq/Faq";
import Discord from "../components/discord/Discord";
import { Timeline } from "gsap/gsap-core";
import Story from "../components/story/Story";
import Mission from "../components/mission/Mission";
gsap.registerPlugin(ScrollTrigger);

function Home() {
    const storyIconRef = useRef();
    const storyImgRef = useRef();

    const [getMintNum, setMintNum] = useState(1);

    // slick slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
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

    useEffect(() => {
        gsap.from(storyIconRef.current, {
            y: 30,
            repeat: -1,
            duration: 2,
            yoyo: true,
        });

        gsap.from(storyImgRef.current, {
            rotate: "360deg",
            repeat: -1,
            duration: 2,
            yoyo: true,
        });
    }, []);

    useEffect(() => {
        const tl = new Timeline();
        tl.from("#banner-1", {
            y: 50,
            opacity: 0,
            delay: 0.2,
            ease: "power.out",
        })
            .from("#banner-2", {
                y: 50,
                opacity: 0,
                delay: 0.1,
                ease: "power.out",
            })
            .from("#banner-3", {
                y: 50,
                opacity: 0,
                delay: 0.1,
                ease: "power.out",
            })
            .from("#banner-4", {
                y: 50,
                opacity: 0,
                delay: 0.1,
                ease: "power.out",
            });
    }, []);

    return (
        <>
            <Layout>
                {/* banner section start */}
                <section
                    className="banner-box"
                    style={{ backgroundImage: `url(${BannerImg})` }}
                    id="home"
                >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-11">
                                <div className="banner-content text-center">
                                    <h2 id="banner-1">
                                        Bread Basket Battalion
                                    </h2>
                                    <p id="banner-2">
                                        Leveraging the unique power of NFTs to
                                        bring awareness of the suffering and
                                        humanitarian aid to the Ukrainian
                                        people.
                                    </p>
                                    <p id="banner-3">
                                        A humanitarian NFT collection of 10,000
                                        ERC-721 Ukrainian soldiers fighting for
                                        peace in the metaverse.
                                    </p>
                                    <div
                                        id="banner-4"
                                        className="d-flex flex-wrap gap-2 justify-content-center"
                                    >
                                        <a className="header-twitter" href="#">
                                            Twitter
                                        </a>
                                        <UiButton>Discover Now</UiButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-left-img">
                        <img src={BannerLeft} alt="banner-left-image" />
                    </div>
                    <div className="banner-right-img">
                        <img src={BannerRight} alt="banner-left-image" />
                    </div>
                </section>
                {/* banner section end */}

                {/* generate section start */}
                <section className="generate-box">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="generate-head text-center">
                                    <p>Create an NFT community</p>
                                    <h2>
                                        Generate money to help suffering people
                                        in Ukraine
                                    </h2>
                                    <p>
                                        Once the excitement of our Initial 100
                                        ETH Raffle has passed, we will begin our
                                        sequence of monthly raffles. Prizes will
                                        consist on a HUGE share of the Open Head
                                        project, so you can expect the prize to
                                        always feature a life-changing amount of
                                        ETH.
                                    </p>
                                </div>
                                <div className="generate-mint text-center">
                                    <ul className="d-flex align-items-center flex-row justify-content-center">
                                        <li>Number to Mint:</li>
                                        <li>
                                            <input
                                                type="number"
                                                value={getMintNum}
                                                onKeyUp={(event) => {
                                                    if (
                                                        event.key == "ArrowUp"
                                                    ) {
                                                        setMintNum(
                                                            getMintNum + 1
                                                        );
                                                    } else if (
                                                        event.key == "ArrowDown"
                                                    ) {
                                                        if (getMintNum > 1) {
                                                            setMintNum(
                                                                getMintNum - 1
                                                            );
                                                        }
                                                    }
                                                }}
                                            />
                                        </li>
                                    </ul>
                                    <UiButton>Mint</UiButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="generate-slider">
                        <Slider {...settings}>
                            <div className="generate-img">
                                <img src={GenerateImg1} alt="generate image" />
                            </div>
                            <div className="generate-img">
                                <img src={GenerateImg2} alt="generate image" />
                            </div>
                            <div className="generate-img">
                                <img src={GenerateImg3} alt="generate image" />
                            </div>
                            <div className="generate-img">
                                <img src={GenerateImg4} alt="generate image" />
                            </div>
                            <div className="generate-img">
                                <img src={GenerateImg5} alt="generate image" />
                            </div>
                            <div className="generate-img">
                                <img src={GenerateImg6} alt="generate image" />
                            </div>
                            <div className="generate-img">
                                <img src={GenerateImg7} alt="generate image" />
                            </div>
                        </Slider>
                    </div>
                </section>
                {/* generate section end */}

                {/* our story section start */}
                <Story />
                {/* our story section end */}

                {/* mission section start */}
                <Mission />
                {/* mission section end */}

                {/* roadmap section start */}
                <section className="roadmap-box" id="road-map">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="roadmap-head text-center">
                                    <h2>Road Map</h2>
                                    <p>
                                        The Bread Basket Battalion Community
                                        will be in the holders' hands meaning
                                        you will control where the donation
                                        funds will go with full transparency.
                                        The devs will be vigorously vetting and
                                        selecting a handful of charities the
                                        community will be able to select from. 1
                                        NFT = 1 Vote.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-10 mb-5s">
                                <div className="road-map-border">
                                    <div className="roadmap-content-box text-center mx-auto rm-cb-1">
                                        <h4>Community Comes First</h4>
                                        <p>
                                            Introducing Bread Basket Battalion.
                                            A compassion-driven idea to fill a
                                            meaningful gap in the NFT space,
                                            committed to creating a vibrant Web3
                                            community that is centered on
                                            promoting peace, charity, and
                                            humanitarian efforts throughout the
                                            globe. Throughout the community
                                            building phase, we will be doing
                                            promotional giveaways of NFTs and
                                            whitelist spots.
                                        </p>
                                    </div>
                                    <div className="roadmap-content-box text-center mx-auto rm-cb-2">
                                        <h4>You CAN Do Something</h4>
                                        <p>
                                            Yes, you can! This project bridges
                                            the gap between the charity DAOs and
                                            identical NFTs with what we have
                                            coined as a “Humanitarian NFT”
                                            collection project. Bread Basket
                                            Battalion, or BBB, will be donating
                                            50% of the project’s entire proceeds
                                            to a non-profit organization that is
                                            actively aiding those suffering in
                                            Ukraine
                                        </p>
                                        <p>
                                            This NFT provides real value through
                                            a one-of-a-kind art collection. We
                                            hope that the world will view this
                                            project as a unique moment in
                                            history in the NFT space - where we
                                            used NFTs for good. The soldiers
                                            will be collectible tokens from this
                                            moment in time, representing the
                                            brave men and women of Ukraine
                                            committing their lives to defending
                                            peace and freedom.
                                        </p>
                                    </div>
                                    <div className="roadmap-content-box text-center mx-auto rm-cb-3">
                                        <h4>Transparent Donation Process</h4>
                                        <p>
                                            The voting will commence shortly
                                            after the public sale is launched.
                                            Our team, most specifically, our
                                            Charity + Donation Liaison, will be
                                            properly vetting a handful of
                                            charities and organizations that the
                                            community will have the ability to
                                            select from.
                                        </p>
                                    </div>
                                    <div className="roadmap-content-box text-center mx-auto rm-cb-4">
                                        <h4>Merch</h4>
                                        <p>
                                            Flex your BBB merch with pride!
                                            Through community engagement we will
                                            be creating merchandise that
                                            symbolizes solidarity with Ukraine.
                                            The proceeds from these releases
                                            will also be donated to charity. The
                                            merch design will be placed in the
                                            hands of the community and will be
                                            decided through a voting process.
                                            Holders will also receive discounts
                                            for items in the shop, among other
                                            perks.
                                        </p>
                                    </div>
                                    <div className="roadmap-content-box text-center mx-auto rm-cb-5">
                                        <h4>Peace and Future Roadmaps</h4>
                                        <p>
                                            Our goal is to keep contributing to
                                            this cause and we expect high ETH
                                            volume! We want to continue to give
                                            until peace is achieved in Ukraine.
                                            After peace is resolved in Ukraine
                                            (hopefully soon!) the community will
                                            vote on where the additional
                                            proceeds from secondary royalty fees
                                            will be donated. It could continue
                                            to be Ukraine or it could be another
                                            cause that needs help.
                                        </p>
                                    </div>
                                    <RoadMap className="roadmap-bg" />
                                    <RoadMapMobile className="roadmap-mobile-bg d-lg-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* roadmap section end */}

                {/* read doc section start */}
                {/* <section className="doc-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div
                                    className="doc-content d-lg-flex align-items-center justify-content-between"
                                    style={{
                                        backgroundImage: `url(${ReadDocBg})`,
                                    }}
                                >
                                    <div className="doc-left-content">
                                        <p>Whitepaper</p>
                                        <h2>Read Our Documents</h2>
                                        <p>
                                            Here is our full documents that help
                                            you to understand deeply about us
                                            and our operation
                                        </p>
                                        <UiButton>Discover more</UiButton>
                                    </div>
                                    <div className="doc-right-content">
                                        <ul className="d-flex align-items-center">
                                            <li>
                                                <img
                                                    src={DocMarkIcon}
                                                    alt="mark"
                                                />
                                                <span>White Paper</span>
                                            </li>
                                            <li>
                                                <img
                                                    src={DocMarkIcon}
                                                    alt="mark"
                                                />
                                                <span>Terms Of Coin Sale</span>
                                            </li>
                                        </ul>
                                        <ul className="d-flex align-items-center">
                                            <li>
                                                <img
                                                    src={DocMarkIcon}
                                                    alt="mark"
                                                />
                                                <span>Privacy & Policy</span>
                                            </li>
                                            <li>
                                                <img
                                                    src={DocMarkIcon}
                                                    alt="mark"
                                                />
                                                <span>One Paper</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* read doc section end */}

                {/* difference section start */}
                <Difference />
                {/* difference section end */}

                {/* news section start */}
                <News />
                {/* news section end */}

                {/* faq section start */}
                <Faq />
                {/* faq section end */}

                {/* discord section start */}
                {/* <Discord /> */}
                {/* discord section end */}
            </Layout>
        </>
    );
}

export default Home;
