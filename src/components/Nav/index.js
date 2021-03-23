import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";


function Navigate() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand='md'>
                <Navbar.Brand>Derrick deVilliers</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbarNav"/>
                <Navbar.Collapse className='justify-content-end' id="basic-navbarNav">
                    <Nav>
                        <Link className="nav-link dark" to="/">About Me</Link>
                        <Link className="nav-link dark" to="/portfolio">Portfolio</Link>
                        <Link className="nav-link dark" to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse >
            </Navbar>

        </>

    )
}

export default Navigate;