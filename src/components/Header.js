import React from "react";
import { Nav, Navbar, Container, Dropdown, DropdownButton } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Language from "../i18n/Language.ts";
import Welcome from "./Welcome";
import "../styles/Header.css";

function Header() {

    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const [lang, setLang] = React.useState(i18n.language);

    function changeLanguage(event) {
        switch (event) {
            case "fr":
                i18n.changeLanguage("fr");
                setLang(Language.FR);
                break;
            case "en":
                i18n.changeLanguage("en");
                setLang(Language.EN);
                break;
            default:
                i18n.changeLanguage("fr");
                setLang(Language.FR);
                break;
        }
    };

    return (
        <div className="Header">
            <header className="Header-header">
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand href="#">
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
                                <Nav.Link href="#skills">
                                    {t("header.skills")}
                                </Nav.Link>
                                <Nav.Link href="#hobbies">
                                    {t("header.hobbys")}
                                </Nav.Link>
                            </Nav>
                            <Dropdown>
                                <DropdownButton
                                    id="dropdown-basic-button"
                                    title={lang}
                                    variant="secondary"
                                >
                                    <Dropdown.Item onClick={() => changeLanguage("fr")}>
                                        {Language.FR}
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => changeLanguage("en")}>
                                        {Language.EN}
                                    </Dropdown.Item>
                                </DropdownButton>
                            </Dropdown>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <div className="Header-container">
                <Welcome />
            </div>
        </div>
    );
}

export default Header;