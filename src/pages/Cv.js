import React from "react";
import Experiences from "../components/Experiences";
import Me from "../components/Me";
import Skills from "../components/Skills";
import Hobbies from "../components/Hobbies";
import "../styles/Cv.css";

function Cv() {
    return (
        <div className="Cv" id="home">
            <div className="Cv-container">
                <Me />
                <Experiences />
                <Skills />
                <Hobbies />
            </div>
        </div>
    );
}

export default Cv;