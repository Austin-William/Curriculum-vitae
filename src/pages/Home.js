import React from 'react';
import CV from './Cv';
import "../styles/Home.css";

function Home() {
    return (
        <div className="Home-light">
            <div className="Home-container">
                <CV />
            </div>
        </div>
    );
}

export default Home;