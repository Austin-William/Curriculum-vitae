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
            <div className="Hobbies-description">
                <p>
                    {t("cv.hobbies.hobby-1")}
                </p>
                <p>
                    {t("cv.hobbies.hobby-2")}
                </p>
                <p>
                    {t("cv.hobbies.hobby-3")}
                </p>
                <p>
                    {t("cv.hobbies.hobby-4")}
                </p>
                <p>
                    {t("cv.hobbies.hobby-5")}
                </p>
            </div>
        </div>
    );
}

export default Hobbies;