from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "PR Risk Analyzer API Running"}