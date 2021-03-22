import React from "react";
import { Navbar, Nav } from "react-bootstrap";


function Navigate() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand='md'>
                <Navbar.Brand>Derrick deVilliers</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbarNav"/>
                <Navbar.Collapse className='justify-content-end' id="basic-navbarNav">
                    <Nav>
                        <Nav.Link href="/about">About Me</Nav.Link>
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse >
            </Navbar>

        </>

    )
}

export default Navigate;