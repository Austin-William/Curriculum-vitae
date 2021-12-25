import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Cv.css";

function Cv() {

    const { t } = useTranslation();

    return (
        <div className="Cv" id="home">
            <div className="Cv-container">
                <div className="Cv-title">
                    <p>{t("cv.welcome")}</p>
                    <b>
                        <div class="Cv-animated-text">
                            {t("cv.welcome-1")}<br />
                            {t("cv.welcome-2")}<br />
                            {t("cv.welcome-3")}<br />
                            {t("cv.welcome-4")}<br />
                            {t("cv.welcome-5")}
                        </div>
                    </b>
                </div>
                <hr />
                <div className="Cv-me" id="me">
                    <h2>
                        Qui je suis ?
                    </h2>
                </div>
                <hr />
                <div className="Cv-competences" id="experiences">
                    <h2>
                        Mes expériences
                    </h2>
                </div>
                <hr />
                <div className="Cv-projects" id="projects">
                    <h2>
                        Mes projets
                    </h2>
                </div>
                <hr />
                <div className="Cv-competences" id="competences">
                    <h2>
                        Mes compétences
                    </h2>
                </div>
                <hr />
                <div className="Cv-hobbies" id="hobbies">
                    <h2>
                        Mes hobbies
                    </h2>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default Cv;