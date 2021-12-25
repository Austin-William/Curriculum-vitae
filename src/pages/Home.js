import React from 'react';
import Cv from './Cv';
import "../styles/Home.css";

function Home() {
    return (
        <div className="Home">
            <div className="Home-container">
                <Cv />
            </div>
        </div>
    );
}

export default Home;