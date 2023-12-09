1. Run ExpensePredictorModel
2. Run this on terminal `uvicorn API_server:app --reload --port 5000`
3. Request can be send as {
    "age": 24,
    "bmi": 24.1,
    "children": 1,
    "smoker": 1
} to 'http://127.0.0.1:5000/predict'