import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import img from "../../Images/site.jpg";

export default function AboutMe() {
    return (
        <Container>
            <Row noGutters={true}>
                <Col md={12}>
                    <h1>About Me</h1>
                </Col>
            </Row>
            <Row noGutters={true}>
            <Col md={4}>
                <img src={img} className="card-img" alt="Derrick,Ashley and Aeson"/>
            </Col>
            <Col md={8}>
                <Card.Body>
                    <Card.Title>Derrick deVilliers</Card.Title>
                    <Card.Text>I was born in Lincoln City, Oregon. I am the second youngest out of 6 kids. I mostly grew
                        up in a small farm town in central Idaho, and all over Utah. I currently live in Asheville,
                        North Carolina with my girlfriend Ashley, and our 1 1/2 year old son named Aeson. I enjoy
                        movies, learning to code, MMA, and the occasional video game.</Card.Text>
                </Card.Body>
            </Col>
            </Row>
        </Container>
    )
}
