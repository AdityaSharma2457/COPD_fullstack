import joblib
import numpy as np
import os
import pandas as pd

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

MODEL_PATH = os.path.join(
    BASE_DIR,
    "models",
    "copd_model_final.pkl"
)

loaded_obj = None

def load_model():
    global loaded_obj
    if loaded_obj is None:
        loaded_obj = joblib.load(MODEL_PATH)


def predict_copd(data):
    load_model()

    input_array = np.array([[
        data.age,
        data.smoking_years,
        data.BMI,
        data.FEV1_FVC_RATIO,
        data.FEV1_percent,
        data.SPO2,
        data.mMRC_scale,
        data.Exacerbation_Count,
        data.Occupational_exposure,
        data.Eosinophil_Count,
        data.DLCO_level,
        data.AAT_level
    ]])

    input_df = pd.DataFrame(input_array)

    imputed_data = loaded_obj['imputer'].transform(input_df)
    scaled_data = loaded_obj['scaler'].transform(imputed_data)

    probability = loaded_obj['model'].predict_proba(scaled_data)[:, 1]

    return float(probability[0])

