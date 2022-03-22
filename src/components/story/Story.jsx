import UiButton from "../button/UiButton";
import StoryLogo from "./../../assets/img/story-logo.png";

function Story() {
    return (
        <>
            <section className="story-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="story-logo text-center">
                                <img src={StoryLogo} alt="story logo" />
                            </div>
                        </div>
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="story-content">
                                <h2>Our Story</h2>
                                <p>
                                    Like many of you, we were completely
                                    heartbroken to see the atrocities happening
                                    in Ukraine. The word “crisis” seemed to fall
                                    short of describing the devastation and
                                    terror that we were seeing across our
                                    screens. We felt so helpless watching
                                    unspeakable acts committed against an
                                    innocent country. We put our heads together
                                    and thought,
                                    <i>“What can we do to help?!”</i> and we had
                                    an idea.
                                </p>
                                <p>
                                    Introducing Bread Basket Battalion. Our
                                    compassion-driven idea to fill a meaningful
                                    gap in the NFT space is committed to
                                    creating a vibrant Web3 community that is
                                    centered on promoting peace, charity, and
                                    humanitarian efforts throughout the globe.
                                    The “Breadbasket of Europe” is what Ukraine
                                    has been nicknamed to due to the country's
                                    vast farmland and high production of crops.
                                </p>
                                <UiButton>Join Our Discord</UiButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Story;
