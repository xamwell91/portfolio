import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaEye, FaCode } from "react-icons/fa";
import Data from "./data.json";

const ProjectsCard = () => {
    const [showMoreData, setShowMoreData] = useState(3);

    const showMore = () => {
        setShowMoreData(prev => (prev === 3 ? Data.length : 3));
    };

    return (
        <Container className="projects">
            <h1 className="tc navy">Projects</h1>
            {Data.slice(0, showMoreData).map((data, i) => (
                <Container key={i}>
                    <Row>
                        <Col sm={12} md={6} xs={12} className="tc">
                            <div className="imgCard">
                                <Image
                                    src={process.env.PUBLIC_URL + data.image}
                                    rounded
                                    fluid
                                    className="imgProject"
                                    alt=""
                                />
                            </div>
                        </Col>
                        <Col sm={12} md={6} xs={12} className="tc">
                            <div className="project ml2 navy animate__animated animate__zoomInUp" id={data.id}>
                                <div className="tc projectTitle">
                                    <h2>{data.title}</h2>
                                </div>
                                <div className="projectDescription tc f3">{data.description}</div>
                                <div className="tc btns">
                                    <a href={data.urlBtnLive} target="_blank" className="btnLive f3 tc no-underline inline-flex items-center ba br4 pointer">
                                        <FaEye className="btnLiveIcon" /> <b className="live">Live</b>
                                    </a>
                                    <a href={data.urlBtnCode} target="_blank" className="btnSource f3 tc no-underline inline-flex items-center ba br4 pointer">
                                        <FaCode className="btnSourceIcon" /> <b className="source">Source</b>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            ))}
            {Data.length > 3 && (
                <div className="moreLessBtn">
                    <div className="flex items-center justify-center">
                        <span onClick={showMore} className="tc no-underline inline-flex items-center ba br4 pointer">
                            <h3>{showMoreData > 3 ? 'Show less ' : 'Show More'}</h3>
                        </span>
                    </div>
                </div>
            )}
        </Container>
    );
};

export default ProjectsCard;
