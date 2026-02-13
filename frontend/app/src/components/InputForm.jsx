import { useState } from "react";
import { predictCOPD } from "../api/predictApi";
import { savePrediction } from "../utils/localStorage";
import ResultCard from "./ResultCard";
import './InputForm.css';

const InputForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    smoking_years: "",
    BMI: "",
    FEV1_FVC_RATIO: "",
    FEV1_percent: "",
    SPO2: "",
    mMRC_scale: "",
    Exacerbation_Count: "",
    Occupational_exposure: "",
    Eosinophil_Count: "",
    DLCO_level: "",
    AAT_level: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await predictCOPD({
        age: Number(formData.age),
        smoking_years: Number(formData.smoking_years),
        BMI: Number(formData.BMI),
        FEV1_FVC_RATIO: Number(formData.FEV1_FVC_RATIO),
        FEV1_percent: Number(formData.FEV1_percent),
        SPO2: Number(formData.SPO2),
        mMRC_scale: Number(formData.mMRC_scale),
        Exacerbation_Count: Number(formData.Exacerbation_Count),
        Occupational_exposure: Number(formData.Occupational_exposure),
        Eosinophil_Count: Number(formData.Eosinophil_Count),
        DLCO_level: Number(formData.DLCO_level),
        AAT_level: Number(formData.AAT_level)
      });

      const prediction = {
        id: Date.now().toString(),
        value: response["prediction"],
        timestamp: Date.now(),
      };

      // Save prediction to localStorage
      savePrediction(prediction);

      setResult(response["prediction"]);
      console.log(response["prediction"]);
    } catch (err) {
      setError("Something went wrong. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="sheet">
     <div className="input-form">
      <h2>COPD Risk Analyzer</h2>

      <form onSubmit={handleSubmit}>
        <input className="form-input" name="age" placeholder="Age" type="number" onChange={handleChange} required />
        <input className="form-input" name="smoking_years" placeholder="Smoking Years" type="number" onChange={handleChange} required />
        <input className="form-input" name="BMI" placeholder="BMI Value" type="number" step="0.01" onChange={handleChange} required />
        <input className="form-input" name="FEV1_FVC_RATIO" placeholder="FEV1/FVC Ratio" type="number" step="0.01" onChange={handleChange} required />
        <input className="form-input" name="FEV1_percent" placeholder="FEV1 Percent" type="number" step="0.01" onChange={handleChange} required />
        <input className="form-input" name="SPO2" placeholder="SPO2 Value" type="number" step="0.01" onChange={handleChange} required />
        <input className="form-input" name="mMRC_scale" placeholder="mMRC Scale" type="number" step="0.01" onChange={handleChange} required />
        <input className="form-input" name="Exacerbation_Count" placeholder="Exacerbation Count" type="number" step="0.01" onChange={handleChange} required />
        <input className="form-input" name="Occupational_exposure" placeholder="Occupational Exposure" type="number" step="0.01" onChange={handleChange} required />
        <input className="form-input" name="Eosinophil_Count" placeholder="Eosinophil Count" type="number" step="0.01" onChange={handleChange} required />
        <input className="form-input" name="DLCO_level" placeholder="DLCO Level" type="number" step="0.01" onChange={handleChange} required />
        <input className="form-input" name="AAT_level" placeholder="AAT Level" type="number" step="0.01" onChange={handleChange} required />

        <button className="form-button" type="submit" disabled={loading}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}
      {result && <ResultCard result={result} />}
    </div>
   </div>
  );
};

export default InputForm;
