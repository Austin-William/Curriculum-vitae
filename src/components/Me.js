import React from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/Me.css";

function Me() {

    const { t } = useTranslation();

    return (
        <div className="Me" id="me">
            <div className="Me-container">
                <h2>
                    {t("cv.me.title")}
                </h2>
                <hr />
                <div className="Me-picture">
                    <img className="Me-img" src="https://avatars.githubusercontent.com/u/55129304?v=4" alt="me.jpg" />
                </div>
                <div className="Me-container-text">
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
            </div>
        </div>
    );
}

export default Me;