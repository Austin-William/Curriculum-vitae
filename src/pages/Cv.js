import React from "react";
import "../styles/Cv.css";

function Cv() {
    return (
        <div className="Cv" id="home">
            <div className="Cv-container">
                <div className="Cv-title">
                    <p>Bienvenue</p>
                    <b>
                        <div class="Cv-animated-text">
                            dans mon CV en ligne<br />
                            pour voir qui je suis<br />
                            ce que j'ai fais<br />
                            ce que j'ai appris<br />
                            bonne lecture !
                        </div>
                    </b>
                </div>
            </div>
        </div>
    );
}

export default Cv;