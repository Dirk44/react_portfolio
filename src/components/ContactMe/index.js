import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function ContactMe() {
    return (
        <Container>
            <Row no-gutters={true}>
                <Col md="12">
                    <h1>Contact</h1>
                </Col>
            </Row>

            <form action="newPage.html" method="get">
            <Row noGutters={true}>
                <Col md="12" offset-md="1">
                    <h4>Name:</h4>
                    <label for="Name"></label>
                    <input type="text" id="name" name="userName" placeholder="Name:"></input>
                </Col>
            </Row>
            <Row noGutters={true}>

                <Col md="12" offset-md="1">
                    <h4>Email:</h4>
                    <label for="email"></label>
                    <input type="text" id="name" name="email" placeholder="Email:"></input>
                </Col>
            </Row>

            <Row noGutters={true}>
                <Col md="12" offset-md="1">
                    <h4>Message:</h4>
                    <label for="message"></label>
                    <textarea id="message" name="message" rows="4" cols="40" placeholder="Message:"></textarea>
                </Col>
            </Row>

            <Row noGutters={true}>
                <Col md="12">
                </Col>
                <input type="submit"></input>
            </Row>
            </form>
        </Container>
    )
}