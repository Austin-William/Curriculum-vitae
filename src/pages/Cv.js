import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Cv.css";

function Cv() {

    const { t } = useTranslation();

    return (
        <div className="Cv" id="home">
            <div className="Cv-container">
                <div className="Cv-title">
                    <p>{t("cv.welcome.title")}</p>
                    <b>
                        <div class="Cv-animated-text">
                            {t("cv.welcome.welcome-1")}<br />
                            {t("cv.welcome.welcome-2")}<br />
                            {t("cv.welcome.welcome-3")}<br />
                            {t("cv.welcome.welcome-4")}<br />
                            {t("cv.welcome.welcome-5")}
                        </div>
                    </b>
                </div>
                <hr />
                <div className="Cv-me" id="me">
                    <h2>
                        {t("cv.me.title")}
                    </h2>
                    <hr />
                    <div className="Cv-me-description">
                        <p>
                            {t("cv.me.description")}
                        </p>
                    </div>
                </div>
                <div className="Cv-experiences" id="experiences">
                    <h2>
                        {t("cv.experiences.title")}
                    </h2>
                    <hr />
                </div>
                <div className="Cv-projects" id="projects">
                    <h2>
                        {t("cv.projects.title")}
                    </h2>
                    <hr />
                </div>
                <div className="Cv-skills" id="skills">
                    <h2>
                        {t("cv.skills.title")}
                    </h2>
                    <hr />
                </div>
                <div className="Cv-hobbies" id="hobbies">
                    <h2>
                        {t("cv.hobbies.title")}
                    </h2>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default Cv;