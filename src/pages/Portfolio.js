import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import { Container, Row, Col } from "react-bootstrap";
import webProjects from "../webProjects.json";
import projectsTile from "../projectsTile";


export default function Portfolio() {
    return (
        <>
            <Container>
                <Row>
                    <Col md="12">
                        <h1>Web Development Portfolio</h1>
                    </Col>
                </Row>
                <Row>
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
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md="12">
                        <h1>Tile Portfolio</h1>
                    </Col>
                </Row>
                <Row>
                    {projectsTile.map(tile => {
                        return (
                            <PortfolioCard
                                key={tile.link}
                                link={tile.link}
                                title={tile.title}
                                img={tile.src}
                            />
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}
