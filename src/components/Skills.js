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
                <div className="Skills-description">
                    <div className="Skills-col">
                        <div className="Skills-stat">
                            <div className="Skills-stat-info">
                                <h5>
                                    Javascript
                                </h5>
                                <h5>
                                    70%
                                </h5>
                            </div>
                            <div className="Skills-stat-bar">
                                <div className="Skills-bar js" />
                            </div>
                        </div>
                        <div className="Skills-stat">
                            <div className="Skills-stat-info">
                                <h5>
                                    HTML
                                </h5>
                                <h5>
                                    70%
                                </h5>
                            </div>
                            <div className="Skills-stat-bar">
                                <div className="Skills-bar html" />
                            </div>
                        </div>
                        <div className="Skills-stat">
                            <div className="Skills-stat-info">
                                <h5>
                                    CSS
                                </h5>
                                <h5>
                                    80%
                                </h5>
                            </div>
                            <div className="Skills-stat-bar">
                                <div className="Skills-bar css" />
                            </div>
                        </div>
                        <div className="Skills-stat-info">
                            <h5>
                                C
                            </h5>
                            <h5>
                                60%
                            </h5>
                        </div>
                        <div className="Skills-stat-bar">
                            <div className="Skills-bar cp" />
                        </div>
                        <div className="Skills-stat-info">
                            <h5>
                                C++
                            </h5>
                            <h5>
                                60%
                            </h5>
                        </div>
                        <div className="Skills-stat-bar">
                            <div className="Skills-bar c" />
                        </div>
                        <div className="Skills-stat-info">
                            <h5>
                                Flutter
                            </h5>
                            <h5>
                                70%
                            </h5>
                        </div>
                        <div className="Skills-stat-bar">
                            <div className="Skills-bar dart" />
                        </div>
                        <div className="Skills-stat-info">
                            <h5>
                                Assembly
                            </h5>
                            <h5>
                                30%
                            </h5>
                        </div>
                        <div className="Skills-stat-bar">
                            <div className="Skills-bar assembly" />
                        </div>
                        <div className="Skills-stat-info">
                            <h5>
                                Haskell
                            </h5>
                            <h5>
                                20%
                            </h5>
                        </div>
                        <div className="Skills-stat-bar">
                            <div className="Skills-bar haskell" />
                        </div>
                        <div className="Skills-stat-info">
                            <h5>
                                Python
                            </h5>
                            <h5>
                                40%
                            </h5>
                        </div>
                        <div className="Skills-stat-bar">
                            <div className="Skills-bar python" />
                        </div>
                        <div className="Skills-stat-info">
                            <h5>
                                Docker
                            </h5>
                            <h5>
                                50%
                            </h5>
                        </div>
                        <div className="Skills-stat-bar">
                            <div className="Skills-bar docker" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;