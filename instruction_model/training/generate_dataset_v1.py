import json
import random

output_file = "../dataset/generated_train.jsonl"

auth_actions = [
"Removed",
"Disabled",
"Deleted",
"Bypassed",
"Skipped"
]

auth_targets = [
"JWT authentication",
"token validation",
"session verification",
"access token checks",
"login verification"
]

auth_locations = [
"admin routes",
"payment APIs",
"management endpoints",
"reporting services",
"account settings APIs"
]

auth_outputs = [
"This change removes authentication controls and may allow unauthorized users to access privileged functionality.",
"This modification weakens identity verification mechanisms and increases the risk of unauthorized access.",
"This update bypasses authentication enforcement and may expose sensitive operations to attackers.",
"This change disables credential validation and could allow unauthorized interaction with protected services.",
"This modification removes authentication protections from critical endpoints and may increase security risk."
]
examples = []

for _ in range(400):
    action = random.choice(auth_actions)
    target = random.choice(auth_targets)
    location = random.choice(auth_locations)

    input_text = f"{action} {target} from {location}."

    output_text = random.choice(auth_outputs)

    examples.append({
        "instruction": "Analyze this GitHub pull request and explain the security implications.",
        "input": input_text,
        "output": output_text
    })

with open(output_file, "w") as f:
    for item in examples:
        f.write(json.dumps(item) + "\n")

print(f"Generated {len(examples)} examples.")