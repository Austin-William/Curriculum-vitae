import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "../styles/Header.css";

function Header() {
    return (
        <div className="Header">
            <header className="Header-light">
                <Navbar collapseOnSelect expand="lg" variant="light">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src="https://avatars.githubusercontent.com/u/55129304?v=4"
                                alt="logo"
                                className="Header-logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">
                                    Home
                                </Nav.Link>
                                <Nav.Link href="#me">
                                    Qui sui-je ?
                                </Nav.Link>
                                <Nav.Link href="#experiences">
                                    Expériences
                                </Nav.Link>
                                <Nav.Link href="#projects">
                                    Projets
                                </Nav.Link>
                                <Nav.Link href="#competences">
                                    Compétences
                                </Nav.Link>
                                <Nav.Link href="#hobbys">
                                    Hobbys
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    );
}

export default Header;