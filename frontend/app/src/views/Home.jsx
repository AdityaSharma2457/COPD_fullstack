import React from 'react';
import './Home.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
      const navigate = useNavigate();
    return (
        <div className="home-container">
            <h1>Welcome to the COPD App</h1>
            <p>Your one-stop solution for COPD risk analysis and management.</p>
            <button className="home-button" onClick={() => navigate("/input-form")}>Get Started</button>
        </div>
    );
};

export default Home;