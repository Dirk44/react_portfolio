import React from 'react';
import "./style.css";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import img from "../../Images/site.jpg";
import insta from "../../Images/instagram.jpeg";
import git from "../../Images/GitHub-logo.png";
import linkedIn from "../../Images/LinkedIn-Button.png";

export default function AboutMe() {
    return (
        <div className="body">
        <Container className="container">
            
            <Row noGutters={true}>
                <Col md={12}>
                    <h1>About Me</h1>
                </Col>
            </Row>
            <Row noGutters={true}>
                <Col md={4}>
                    <img src={img} className="card-img" alt="Derrick,Ashley and Aeson" />
                </Col>
                <Col md={8}>
                    <Card.Body>
                        <Card.Title>Derrick deVilliers</Card.Title>
                        
                        <Card.Text>I was born in Lincoln City, Oregon. I am the second youngest out of 6 kids. I mostly grew
                        up in a small farm town in central Idaho, and all over Utah. I currently live in Asheville,
                        North Carolina with my girlfriend Ashley, and our 2 year old son named Aeson. I enjoy
                        movies, learning to code, MMA, and the occasional video game.</Card.Text>

                        <Nav.Link href="https://www.instagram.com/derrickd44/?hl=en" target="_blank">
                            <img className="img_instagram" src={insta} alt="Instagram logo" />
                        </Nav.Link>

                        <Nav.Link href="https://github.com/Dirk44" target="_blank">
                            <img className="img_instagram" src={git} alt="Github logo" />
                        </Nav.Link>

                        <Nav.Link href="https://www.linkedin.com/in/derrick-devilliers-42bb471b3/" target="_blank">
                            <img className="img_instagram" src={linkedIn} alt="Linkdin logo" />
                        </Nav.Link>


                    </Card.Body>
                </Col>
            </Row>

            <Row noGutters={true}>

            <Col lg={{span: 6, offset: 2}}>
                <Card.Title>Professional Career</Card.Title>
                <Card.Text>I am a tile contractor. I own D Squared Custom Tile LLC. I have a few General Contractors I currently
                    do work for. I am very Card.Texticky about how tile is done, and it shows in my work. I specialize in high
                    end, custom homes.</Card.Text>

            </Col>
        </Row>
        </Container>
        </div>
    )
}
