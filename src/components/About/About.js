import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import ProfilImage from "./profilImage.png";

function About() {
    return (
        <div className="about tc">
            <Container>
                <Row className="tc">
                    <Col sm={"12"} md={"6"} xs={"12"}>
                        <Image src={ProfilImage} roundedCircle fluid className="imgLogo" />
                    </Col>
                    <Col className="tc" sm={"12"} md={"6"} xs={"12"}>
                        <div className="tc animate__animated animate__zoomInUp animate__delay-2s">
                            <div className="titleAbout tc">
                                <h1>
                                    About me
                                </h1>
                            </div>

                            <div className="description f3">
                                    {/**Write how are you*/}
                                    Innovative Flutter developer with a strong track
                                    record of creating high-performance cross-platform mobile applications. Skilled in 
                                    state management with Provider, MobX, and BLoC, I am passionate about delivering 
                                    efficient and elegant user experiences. I've Successfully deployed apps on 
                                    both Google Play Store and Apple App Store.
                            </div>
                        </div>
                    </Col>
                </Row> 
            </Container>
            
        </div>
        
    );
}

export default About