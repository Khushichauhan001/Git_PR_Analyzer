from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

MODEL_PATH = "./models/my_codebert_model"

tokenizer = AutoTokenizer.from_pretrained(MODEL_PATH)

model = AutoModelForSequenceClassification.from_pretrained(MODEL_PATH)

labels = {
    0: "low_risk",
    1: "medium_risk",
    2: "high_risk"
}


def predict_pr(text):

    inputs = tokenizer(
        text,
        return_tensors="pt",
        truncation=True,
        padding=True,
        max_length=512
    )

    with torch.no_grad():
        outputs = model(**inputs)

    probs = torch.softmax(outputs.logits, dim=1)

    predicted_class = torch.argmax(probs).item()

    confidence = probs[0][predicted_class].item()

    return {
        "label": labels[predicted_class],
        "confidence": round(confidence, 4)
    }