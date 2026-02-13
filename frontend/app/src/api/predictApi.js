export const predictCOPD = async (patientData) => {
  const response = await fetch("http://127.0.0.1:8000/predict", {
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
