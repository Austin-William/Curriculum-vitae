import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Welcome.css";

function Welcome() {
    const { t } = useTranslation();
    return (
        <div className="Welcome">
            <div className="Welcome-container">
                <p>{t("cv.welcome.title")}</p>
                <b>
                    <div className="Welcome-animated-text">
                        {t("cv.welcome.welcome-1")}<br />
                        {t("cv.welcome.welcome-2")}<br />
                        {t("cv.welcome.welcome-3")}<br />
                        {t("cv.welcome.welcome-4")}<br />
                        {t("cv.welcome.welcome-5")}
                    </div>
                </b>
            </div>
        </div>
    )
}

export default Welcome;