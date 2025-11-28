from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from typing import Optional
import joblib
import os

app = FastAPI(
    title="AI House Price Predictor",
    description="ML-powered house price prediction API using California Housing Dataset",
    version="1.0.0"
)

# Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# Load ML model
model = joblib.load("house_model.pkl")

class Input(BaseModel):
    data: Optional[list] = [8.3252, 41.0, 6.98, 1.02, 322, 2.55, 37.88, -122.23]

@app.get("/")
async def read_index():
    """Serve the main UI"""
    return FileResponse('static/index.html')

@app.post("/predict")
def predict(input: Input = Input()):
    """Predict house price based on input features"""
    pred = model.predict([input.data])
    return {"prediction": float(pred[0])}

@app.get("/api")
def api_info():
    """API information endpoint"""
    return {
        "message": "House Price Prediction API",
        "version": "1.0.0",
        "endpoints": {
            "/": "Main UI",
            "/predict": "POST - Make predictions",
            "/docs": "API documentation",
            "/api": "API information"
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=10000)
