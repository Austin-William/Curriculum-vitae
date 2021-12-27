import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Skills.css";

function Skills() {

    const { t } = useTranslation();

    return (
        <div className="Skills" id="skills">
            <div className="Skills-container">
                <h2>
                    {t("cv.skills.title")}
                </h2>
                <hr />
            </div>
        </div>
    );
}

export default Skills;