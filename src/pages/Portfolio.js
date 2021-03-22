import React from 'react';
import PortfolioCard from "../components/PortfolioCard";
import { Container, Row, Col } from "react-bootstrap";
import webProjects from "../webProjects.json";
import projectsTile from "../projectsTile.json";


export default function Portfolio() {
    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>
                        <h1>Web Development Portfolio</h1>
                    </Col>
                </Row>
                <ul>
                    {webProjects.map(web => {
                        return (
                            <PortfolioCard
                                key={web.link}
                                link={web.link}
                                title={web.title}
                                img={web.src}
                            />
                        )
                    })}
                </ul>
            </Container>

            <Container>
                <Row>
                    <Col md={12}>
                        <h1>Tile Portfolio</h1>
                    </Col>
                </Row>
                <ul>
                    {projectsTile.map(web => {
                        return (
                            <PortfolioCard
                                key={web.link}
                                link={web.link}
                                title={web.title}
                                img={web.src}
                            />
                        )
                    })}
                </ul>
            </Container>
        </>
    )
}
