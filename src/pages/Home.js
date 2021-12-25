import React from 'react';
import Cv from './Cv';
import "../styles/Home.css";
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="Home">
            <div className="Home-container">
                <Cv />
            </div>
            <Footer />
        </div>
    );
}

export default Home;