from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.predict_route import router as predict_router
import modles as modles


app = FastAPI(title="COPD Prediction API")
# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite default
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(predict_router)
@app.get("/")
def root():
    return {"message": "COPD Backend Running Successfully"}
