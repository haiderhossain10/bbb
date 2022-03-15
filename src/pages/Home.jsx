import React, { useEffect, useRef, useState } from "react";
import UiButton from "../components/button/UiButton";
import Layout from "../components/layout/Layout";
import BannerImg from "./../assets/img/banner-bg.png";
import BannerLeft from "./../assets/img/banner-left-img.png";
import BannerRight from "./../assets/img/banner-right-img.png";
import StoryCircle from "./../assets/img/our-story-circle.png";
import StoryIcon from "./../assets/img/our-story-icon.png";
import MissionImg from "./../assets/img/mission.png";
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
                delay: 0.2,
                ease: "power.out",
            })
            .from("#banner-3", {
                y: 50,
                opacity: 0,
                delay: 0.2,
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
                >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-11">
                                <div className="banner-content text-center">
                                    <h2 id="banner-1">
                                        BBB is a collection of 10,000 war hero
                                        NFTs fighting for peace in the Metaverse
                                    </h2>
                                    <p id="banner-2">
                                        The “Breadbasket of Europe” is what
                                        Ukraine has been nicknamed to due to the
                                        country's vast farmland and high
                                        production of crops.
                                    </p>
                                    <div id="banner-3">
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

                {/* counter section start */}
                <section className="counter-box d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col px-0">
                                <div className="counter-content text-center">
                                    <p>Trees Planted</p>
                                    <h2>
                                        <span>
                                            <CountUp start={0} end={564} />
                                        </span>
                                        +
                                    </h2>
                                </div>
                            </div>
                            <div className="col px-0">
                                <div className="counter-content text-center">
                                    <p>Tonnes CO² Removed</p>
                                    <h2>
                                        <span>
                                            <CountUp start={0} end={56} />
                                        </span>
                                    </h2>
                                </div>
                            </div>
                            <div className="col px-0">
                                <div className="counter-content text-center">
                                    <p>NFT's Offset</p>
                                    <h2>
                                        <span>
                                            <CountUp start={0} end={549} />
                                        </span>
                                    </h2>
                                </div>
                            </div>
                            <div className="col px-0">
                                <div className="counter-content text-center">
                                    <p>Trees Planted</p>
                                    <h2>
                                        <span>
                                            <CountUp start={0} end={85} />
                                        </span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* counter section end */}

                {/* our story section start */}
                <section className="story-box">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="story-left">
                                    <img
                                        ref={storyImgRef}
                                        src={StoryCircle}
                                        alt="Story Circle"
                                        className="img-fluid"
                                    />
                                    <div
                                        ref={storyIconRef}
                                        className="story-left-icon"
                                    >
                                        <img
                                            src={StoryIcon}
                                            alt="Circle Icon"
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6  mb-5 mb-lg-0 order-1 order-lg-2">
                                <div className="story-right">
                                    <p>OUR STORY</p>
                                    <h2>Another Reason to Join The Club</h2>
                                    <p>
                                        In its essence, BBB is a charity NFT.
                                        The creators and developers (devs) will
                                        be donating 50% of the profits generated
                                        by the project to a charity that is
                                        properly vetted and benefiting the
                                        people of Ukraine.
                                    </p>
                                    <ul>
                                        <li>
                                            Each DaFeis is priced at ETH 0.033.
                                        </li>
                                        <li>
                                            Every DaFeis is generated from 323
                                            possible traits.
                                        </li>
                                        <li>
                                            Every Dafeis is absolutely unique
                                            from others.
                                        </li>
                                        <li>
                                            So make sure to keep a sharp eye on
                                            your favorite DaFeis!
                                        </li>
                                    </ul>
                                    <UiButton>Join Our Discord</UiButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* our story section end */}

                {/* about mission section start */}
                <section className="mission-box">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="mission-left">
                                    <p>Out Mission</p>
                                    <h2>Concern About Our Mission</h2>
                                    <p>
                                        BBB is a collection of ERC-721
                                        non-fungible tokens (NFT) on the
                                        Ethereum (ETH) blockchain network.
                                        Currently, we are set on creating 10,000
                                        individual and unique tokens
                                    </p>
                                    <UiButton>Discord</UiButton>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="mission-right">
                                    <img
                                        src={MissionImg}
                                        alt="Mission Image"
                                        className="w-100"
                                    />
                                    <div className="mission-right-overlay d-flex">
                                        <img
                                            src={MissionOverlay}
                                            alt="Mission overly"
                                        />
                                        <div>
                                            <h4>Our Mission</h4>
                                            <p>
                                                We can support you throughout
                                                the journey from concept to
                                                launch.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* about mission section end */}

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

                {/* roadmap section start */}
                <section className="roadmap-box">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="roadmap-head text-center">
                                    <h2>Road Map</h2>
                                    <p>
                                        Discover our special legendary
                                        collection, they are the rarest and
                                        unique.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-10 mb-5s">
                                <div className="road-map-border">
                                    <div className="roadmap-content-box text-center mx-auto">
                                        <h4>Pre-ICO</h4>
                                        <p>
                                            A new Events collection will be
                                            created, where our artist Nack will
                                            start drawing and minting limited
                                            edition NFTs revolving around
                                            Festivals and Key Events throughout
                                            the year, which will be airdropped
                                            to the owners of Fishbowl Heads.
                                        </p>
                                    </div>
                                    <div className="roadmap-content-box text-center mx-auto">
                                        <h4>Cryptic ICO</h4>
                                        <p>
                                            We’ll create a Community Wallet and
                                            fund it with 2.7% of final primary
                                            sale value, for securing a Metaverse
                                            land parcel on a platform preferred
                                            by the community. This land will be
                                            used by the community to host events
                                            and showcases among other things
                                            that the community wants to build.
                                        </p>
                                    </div>
                                    <div className="roadmap-content-box text-center mx-auto">
                                        <h4>CHP launch on Cryptic</h4>
                                        <p>
                                            A new Collaborations collection will
                                            be created and we’ll commence
                                            collabs with other prominent NFT
                                            artists and projects to create
                                            limited edition derivatives, remixes
                                            and mashups of Fishbowl Heads in
                                            their unique style. These will be
                                            claimable at 0 ETH + Gas only by the
                                            owners of Fishbowl Heads through
                                            raffles or contest rewards on our
                                            Discord server.
                                        </p>
                                    </div>
                                    <div className="roadmap-content-box text-center mx-auto">
                                        <h4>Cryptic Listed in Exchanges</h4>
                                        <p>
                                            We consider this NFT project like
                                            any other venture, so believe that
                                            the roadmap will continue to evolve
                                            over time with inputs from the
                                            community, including metaverse
                                            initiatives, raffles, airdrops, meme
                                            contests and more. Please join our
                                            Discord server for updates and
                                            participate in shaping our future
                                            roadmap.
                                        </p>
                                    </div>
                                    <div className="roadmap-content-box text-center mx-auto">
                                        <h4>Mobile Application</h4>
                                        <p>
                                            A new Collaborations collection will
                                            be created and we’ll commence
                                            collabs with other prominent NFT
                                            artists and projects to create
                                            limited edition derivatives, remixes
                                            and mashups of Fishbowl Heads in
                                            their unique style. These will be
                                            claimable at 0 ETH + Gas only by the
                                            owners of Fishbowl Heads through
                                            raffles or contest rewards on our
                                            Discord server.
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
                <section className="doc-box">
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
                </section>
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
                <Discord />
                {/* discord section end */}
            </Layout>
        </>
    );
}

export default Home;
