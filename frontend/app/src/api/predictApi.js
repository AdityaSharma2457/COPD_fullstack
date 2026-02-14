export const predictCOPD = async (patientData) => {
  const response = await fetch("https://copd-fullstack.onrender.com/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(patientData)
  });

  if (!response.ok) {
    throw new Error("Prediction failed");
  }

  return await response.json();
};
