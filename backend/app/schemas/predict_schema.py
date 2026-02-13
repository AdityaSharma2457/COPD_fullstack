from pydantic import BaseModel

class COPDRequest(BaseModel):
    age: float
    smoking_years: float
    BMI: float
    FEV1_FVC_RATIO: float
    FEV1_percent: float
    SPO2: float
    mMRC_scale: float
    Exacerbation_Count: float
    Occupational_exposure: float
    Eosinophil_Count: float
    DLCO_level: float
    AAT_level: float

