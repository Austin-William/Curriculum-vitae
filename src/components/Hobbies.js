import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Hobbies.css";

function Hobbies() {

    const { t } = useTranslation();

    return (
        <div className="Hobbies" id="hobbies">
            <div className="Hobbies-container">
                <h2>
                    {t("cv.hobbies.title")}
                </h2>
                <hr />
                <div className="Hobbies-description">
                    <p>
                        <i className='fas fa-basketball-ball' /> {t("cv.hobbies.hobby-1")}
                    </p>
                    <p>
                        <i className='fas fa-gamepad' /> {t("cv.hobbies.hobby-2")}
                    </p>
                    <p>
                        <i className='fas fa-film' /> {t("cv.hobbies.hobby-3")}
                    </p>
                    <p>
                        <i className='fas fa-edit' /> {t("cv.hobbies.hobby-4")}
                    </p>
                    <p>
                        <i className='fas fa-wind' /> {t("cv.hobbies.hobby-5")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hobbies;