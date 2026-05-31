from fastapi import APIRouter
from pydantic import BaseModel

from services.classifier import predict_pr
from utils.github import fetch_pr_files

router = APIRouter()


class PRRequest(BaseModel):
    pr_url: str


@router.post("/predict")

def analyze_pr(data: PRRequest):

    pr_code = fetch_pr_files(data.pr_url)

    result = predict_pr(pr_code)

    return result