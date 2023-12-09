from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import numpy as np

# Define your FastAPI app
app = FastAPI()

# Load your pre-trained model (linear regression model in this case)
with open('expense_predictor_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

# Create a Pydantic model to handle input data
class InputData(BaseModel):
    age: int
    bmi: float
    children: int
    smoker: int

# Define a route to accept POST requests with input data
@app.post("/predict")
def predict(data: InputData):
    features = [data.age, data.bmi, data.children,data.smoker]
    input_features = np.array(features).reshape(1, -1)  # Reshape for prediction
    print(input_features)
    prediction = model.predict(input_features)
    result=prediction.tolist()
    print(result[0])
    return {"prediction": result[0]}  # Return the prediction as a JSON response
