import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Experiences.css";

function Experiences() {

    const { t } = useTranslation();

    return (
        <div className="Experiences" id="experiences">
            <h2>
                {t("cv.experiences.title")}
            </h2>
            <hr />
        </div>
    );
}

export default Experiences;