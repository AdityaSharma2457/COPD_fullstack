import React, { useEffect, useState } from 'react';
import { getPredictions, clearPredictions } from '../utils/localStorage';
import './Results.css';

const Results = () => {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    // Fetch predictions from localStorage on mount
    const storedPredictions = getPredictions();
    // Sort predictions in descending order by timestamp
    storedPredictions.sort((a, b) => b.timestamp - a.timestamp);
    setPredictions(storedPredictions);
  }, []);

  const handleClearHistory = () => {
    clearPredictions();
    setPredictions([]);
  };

  return (
    <div className="results">
      <h2>Predictions</h2>
      {predictions.length === 0 ? (
        <p>No predictions available.</p>
      ) : (
        <>
          <button className="clear-history-button" onClick={handleClearHistory}>Clear History</button>
          <div className="predictions-container">
            {predictions.map((prediction) => (
              <div key={prediction.id} className="prediction-card">
                <h3>Prediction</h3>
                <p>{prediction.value}</p>
                <small>{new Date(prediction.timestamp).toLocaleString()}</small>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Results;