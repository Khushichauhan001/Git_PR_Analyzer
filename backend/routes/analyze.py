from fastapi import APIRouter
from pydantic import BaseModel

from services.classifier import predict_pr

router = APIRouter()

class PRRequest(BaseModel):
    text: str


@router.post("/predict")
def analyze_pr(data: PRRequest):

    result = predict_pr(data.text)

    return result