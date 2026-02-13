from pydantic import BaseModel
from datetime import datetime

class PredictionCreate(BaseModel):
    prediction: str

class PredictionResponse(BaseModel):
    id: int
    prediction: str
    timestamp: datetime

    class Config:
        from_attributes = True
