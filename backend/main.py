from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow CORS for requests from the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the request data model
class StudentData(BaseModel):
    attendance_rate: float
    previous_grade: float
    extracurricular_activities: int
    study_hours_per_day: float
    parental_support: str
    gender: str

# Define the /predict endpoint
@app.post("/predict")
async def predict(data: StudentData):
    # Mock prediction logic for now
    prediction = "Mock Prediction Result"  # Replace with actual prediction logic
    return {"prediction": prediction}
