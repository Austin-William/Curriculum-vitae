import React from "react";
import Experiences from "../components/Experiences";
import Me from "../components/Me";
import Projects from "../components/Projects.";
import Skills from "../components/Skills";
import Welcome from "../components/Welcome";
import Hobbies from "../components/Hobbies";
import "../styles/Cv.css";

function Cv() {
    return (
        <div className="Cv" id="home">
            <div className="Cv-container">
                <Welcome />
                <hr />
                <Me />
                <Experiences />
                <Projects />
                <Skills />
                <Hobbies />
            </div>
        </div>
    );
}

export default Cv;