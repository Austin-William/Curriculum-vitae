import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import "./styles/App.css";

function App() {
    return (
        <div className="App" id="home">
            <Header />
            <Home />
        </div>
    );
}

export default App;
