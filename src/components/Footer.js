import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Footer.css";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="Footer">
            <div className="Footer-container-title">
                    <h1>
                        {t("footer.title")}
                    </h1>
                </div>
            <div className="Footer-container">
                <div className="Footer-container-left">
                    <div className="Footer-container-left-logo">
                    
                    </div>
                    <p className="Footer-text">
                        {t("footer.description")}
                    </p>
                </div>
                <div className="Footer-container-right">
                    <a href="https://github.com/Austin-William?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/austin-william-lo-2a75271a1/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
            <div className="Footer-container-copyright">
                <p>&copy; Austin William Lo</p>
                <i>28/12/2021</i>
            </div>
        </footer>
    );
}

export default Footer;
