from fastapi import APIRouter
from pydantic import BaseModel
from services.explanation import generate_explanation

from services.classifier import predict_pr
from utils.github import fetch_pr_files

router = APIRouter()


class PRRequest(BaseModel):
    pr_url: str

@router.post("/predict")
# def analyze_pr(data: PRRequest):

#     pr_code = fetch_pr_files(data.pr_url)

#     classification = predict_pr(pr_code)

#     explanation = generate_explanation(pr_code)

#     return {
#         "label": classification["label"],
#         "confidence": classification["confidence"],
#         "explanation": explanation
#     }









def analyze_pr(data: PRRequest):

    print("STEP 1")

    pr_code = fetch_pr_files(data.pr_url)

    print("STEP 2")

    classification = predict_pr(pr_code)

    print("STEP 3")

    explanation = generate_explanation(pr_code)

    print("STEP 4")

    return {
        "label": classification["label"],
        "confidence": classification["confidence"],
        "explanation": explanation
    }