from peft import PeftModel
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

BASE_MODEL = "microsoft/phi-2"
ADAPTER_PATH = "./models/phi2-pr-explainer"

tokenizer = AutoTokenizer.from_pretrained(BASE_MODEL)

base_model = AutoModelForCausalLM.from_pretrained(
    BASE_MODEL,
    torch_dtype=torch.float16,
    device_map="auto"
)

model = PeftModel.from_pretrained(
    base_model,
    ADAPTER_PATH
)

print("\n========== MODEL ==========")
print(model)
print("===========================\n")

def generate_explanation(pr_text):

    prompt = f"""
### Instruction:
Analyze this GitHub pull request and explain the security risk.

### Input:
{pr_text}

### Response:
"""

    inputs = tokenizer(
        prompt,
        return_tensors="pt"
    ).to(model.device)

    outputs = model.generate(
        **inputs,
        max_new_tokens=150,
        temperature=0.3
    )

    response = tokenizer.decode(
        outputs[0],
        skip_special_tokens=True
    )

    return response.split("### Response:")[-1].strip()