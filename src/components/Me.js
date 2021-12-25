import React from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/Me.css";

function Me() {

    const { t } = useTranslation();

    return (
        <div className="Me" id="me">
            <h2>
                {t("cv.me.title")}
            </h2>
            <hr />
            <div className="Me-description">
                <p>
                    {t("cv.me.description-1")}
                </p>
                <br />
                <p>
                    {t("cv.me.description-2")}
                </p>
                <br />
                <p>
                    {t("cv.me.description-3")}
                </p>
            </div>
        </div>
    );
}

export default Me;