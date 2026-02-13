import { useState } from "react";
import "./ResultCard.css";

const ResultCard = ({ result }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="result-card popup">
        <span className="close-alphabet" onClick={handleClose}>x</span>
        <div className="result-card-header">
          <h3>Prediction Result</h3>
        </div>
        <div className="result-card-body">
          <p><strong>Risk Level:</strong> {result}</p>
        </div>
        <div className="result-card-footer">
          <button className="save-button" onClick={handleClose}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
