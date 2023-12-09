from fastapi import FastAPI,HTTPException
from pydantic import BaseModel
import requests
import pickle
import numpy as np

# Define your FastAPI app
app = FastAPI()

# Load your pre-trained model (linear regression model in this case)
with open('expense_predictor_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

# model for input data
class NLPData(BaseModel):
    text: str
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

# Route to make a request to a third-party API and return its response
@app.post("/extract")
def third_party_api(data: NLPData):
    # Assuming a third-party API endpoint
    third_party_url = 'https://ai-textraction.p.rapidapi.com/textraction'  # Replace with the actual third-party API URL
    headers = {
	"content-type": "application/json",
	"X-RapidAPI-Key": "531f269321msh8ce85ef82009366p1b44ebjsn3b9d7e8dca2a",
	"X-RapidAPI-Host": "ai-textraction.p.rapidapi.com"
    }
    payload = {"text": data.text, "entities":[
    {
        "description": "disease names",
        "type": "array[string]",
        "var_name": "diseases"
    },
     {
        "description": "problems names",
        "type": "array[string]",
        "var_name": "problems"
    }
    ]}
    # Make a request to the third-party API
    response = requests.post(third_party_url, json=payload, headers=headers)

    if response.status_code == 200:
        return response.json()
    else:
        raise HTTPException(status_code=response.status_code, detail="Third-party API request failed")
