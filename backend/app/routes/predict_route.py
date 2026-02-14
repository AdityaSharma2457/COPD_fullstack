from fastapi import APIRouter
from schemas.predict_schema import COPDRequest
from services.predict_service import predict_copd

router = APIRouter()

@router.post("/predict")
def predict(data: COPDRequest):
    result = predict_copd(data)
    return {"prediction": result}
