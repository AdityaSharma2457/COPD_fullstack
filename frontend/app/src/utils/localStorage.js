// Utility functions for managing predictions in localStorage

const PREDICTIONS_KEY = 'predictions';

// Save a new prediction to localStorage
export const savePrediction = (prediction) => {
  const predictions = getPredictions();
  predictions.push(prediction);
  localStorage.setItem(PREDICTIONS_KEY, JSON.stringify(predictions));
};

// Retrieve all predictions from localStorage
export const getPredictions = () => {
  const predictions = localStorage.getItem(PREDICTIONS_KEY);
  return predictions ? JSON.parse(predictions) : [];
};

// Clear all predictions from localStorage
export const clearPredictions = () => {
  localStorage.removeItem(PREDICTIONS_KEY);
};