import React from "react";
import MissionImg from "./../../assets/img/mission.png";

function Mission() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mission-content">
                                <img src={MissionImg} alt="mission images" />
                                <h2>The Vision And Mission</h2>
                                <p>
                                    You CAN help! Our world-wide community
                                    advocates that the value of WE is greater
                                    than ME, that together we are better,
                                    stronger and capable of evoking change.
                                    Together we can create an inclusive world
                                    where we support one another and speak up
                                    when injustices are committed, rather than
                                    remaining silent.
                                </p>
                                <p>
                                    This project bridges the gap between the
                                    charity DAOs and identical NFT projects with
                                    what we have coined as a “Humanitarian NFT”
                                    collection project. Bread Basket Battalion,
                                    or BBB, will be donating 50% of the
                                    project’s entire proceeds to a non-profit
                                    organization that is actively aiding those
                                    suffering in Ukraine.
                                </p>
                                <p>
                                    We want to create an NFT that not only
                                    raises funds to effect positive change in
                                    this world, but also creates a positive
                                    community inspired to respond with kindness
                                    to the plight of the underprivileged, the
                                    underserved, and the slighted of humanity.
                                    We want the people of Ukraine and any other
                                    vulnerable peoples of the world to know that
                                    their cries have been heard and that they
                                    are not alone.
                                </p>
                                <p>
                                    This NFT provides real value through a
                                    one-of-a-kind art collection. We hope that
                                    the world will view this project as a unique
                                    moment in history in the NFT space - where
                                    we used NFTs for good. The soldiers will be
                                    collectible tokens from this moment in time,
                                    representing the brave men and women of
                                    Ukraine committing their lives to defending
                                    peace and freedom.
                                </p>
                                <p>
                                    We understand that the NFT community has
                                    recently been harmed by bad actors in this
                                    space who make big promises and fail to
                                    deliver because there are no checks and
                                    balances in place to ensure that funds and
                                    project execution are handled properly. We
                                    believe that transparency has to be at the
                                    core of this project. We are committed to
                                    being transparent and honest throughout this
                                    project.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Mission;
