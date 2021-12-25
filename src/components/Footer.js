import React from "react";
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="Footer">
            <div className="Footer-container">
                <div className="Footer-container-left">
                    <img
                        className="Footer-logo"
                        src="https://unsplash.it/200/200?image=10"
                        alt="logo"
                    />
                    <p className="Footer-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quidem.
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
                <i>25/15/2020</i>
            </div>
        </footer>
    );
}

export default Footer;