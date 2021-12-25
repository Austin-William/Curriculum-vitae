import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Hobbies.css";

function Hobbies() {

    const { t } = useTranslation();

    return (
        <div className="Hobbies" id="hobbies">
            <h2>
                {t("cv.hobbies.title")}
            </h2>
            <hr />
        </div>
    );
}

export default Hobbies;