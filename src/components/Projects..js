import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Projects.css";

function Projects() {

    const { t } = useTranslation();

    return (
        <div className="Projects" id="projects">
            <div className="Projects-container">
                <h2>
                    {t("cv.projects.title")}
                </h2>
                <hr />
            </div>
        </div>
    );
}

export default Projects;