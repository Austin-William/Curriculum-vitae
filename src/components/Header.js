import React from "react";
import { Nav, Navbar, Container, Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Language from "../i18n/Language.ts";
import "../styles/Header.css";

function Header() {

    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const [lang, setLang] = React.useState(Language.FR);

    function changeLanguage() {
        if (lang === Language.FR) {
            setLang(Language.EN);
            i18n.changeLanguage(Language.EN);
        } else {
            setLang(Language.FR);
            i18n.changeLanguage(Language.FR);
        }
    };

    return (
        <div className="Header">
            <header className="Header-header">
                <Navbar collapseOnSelect expand="lg" variant="dark">
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
                                    {t("header.home")}
                                </Nav.Link>
                                <Nav.Link href="#me">
                                    {t("header.me")}
                                </Nav.Link>
                                <Nav.Link href="#experiences">
                                    {t("header.experiences")}
                                </Nav.Link>
                                <Nav.Link href="#projects">
                                    {t("header.projects")}
                                </Nav.Link>
                                <Nav.Link href="#competences">
                                    {t("header.competences")}
                                </Nav.Link>
                                <Nav.Link href="#hobbys">
                                    {t("header.hobbys")}
                                </Nav.Link>
                            </Nav>
                            <Dropdown>
                                <Dropdown.Toggle className="text-white" variant="button" id="dropdown-lang">
                                    {t("name")}
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="text-white">
                                    <Dropdown.Item onClick={changeLanguage}>FR</Dropdown.Item>
                                    <Dropdown.Item onClick={changeLanguage}>EN</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    );
}

export default Header;