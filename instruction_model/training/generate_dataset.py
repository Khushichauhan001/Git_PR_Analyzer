import json
import random

output_file = "../dataset/generated_train.jsonl"

categories = {
    "authentication": {
        "actions": [
            "Removed",
            "Disabled",
            "Deleted",
            "Bypassed",
            "Skipped"
        ],
        "targets": [
            "JWT authentication",
            "token validation",
            "session verification",
            "access token checks",
            "login verification"
        ],
        "locations": [
            "admin routes",
            "payment APIs",
            "management endpoints",
            "reporting services",
            "account settings APIs"
        ],
        "outputs": [
            "This PR removes authentication controls and may allow unauthorized users to access privileged functionality.",
            "This modification weakens identity verification mechanisms and increases the risk of unauthorized access.",
            "This update bypasses authentication enforcement and may expose sensitive operations to attackers."
        ]
    },

    "authorization": {
        "actions": [
            "Removed",
            "Disabled",
            "Deleted"
        ],
        "targets": [
            "role based access control",
            "admin permission checks",
            "authorization middleware",
            "privilege validation"
        ],
        "locations": [
            "payment endpoints",
            "admin APIs",
            "billing services",
            "user management routes"
        ],
        "outputs": [
            "This PR removes authorization checks and may allow users to perform privileged actions.",
            "This change weakens access control protections and increases the risk of unauthorized operations.",
            "Sensitive functionality may become accessible to users without sufficient permissions."
        ]
    },

    "sql_injection": {
        "actions": [
            "Added",
            "Introduced",
            "Implemented"
        ],
        "targets": [
            "raw SQL query",
            "dynamic SQL statement",
            "database query"
        ],
        "locations": [
            "login endpoint",
            "search API",
            "reporting service",
            "user dashboard"
        ],
        "outputs": [
            "This PR introduces raw SQL execution which may increase SQL Injection risk.",
            "Unsanitized database queries may allow attackers to manipulate backend databases.",
            "User supplied input appears to be used directly in SQL statements which is a security concern."
        ]
    },

    "xss": {
        "actions": [
            "Rendered",
            "Displayed",
            "Inserted"
        ],
        "targets": [
            "user input",
            "HTML content",
            "comment text"
        ],
        "locations": [
            "profile page",
            "dashboard",
            "feedback form",
            "admin panel"
        ],
        "outputs": [
            "This change may expose the application to Cross Site Scripting attacks.",
            "Unescaped user controlled content may allow execution of malicious scripts.",
            "The update appears vulnerable to XSS if proper sanitization is not applied."
        ]
    },

    "file_upload": {
        "actions": [
            "Added",
            "Enabled",
            "Implemented"
        ],
        "targets": [
            "file upload feature",
            "document upload endpoint",
            "image upload API"
        ],
        "locations": [
            "admin dashboard",
            "user portal",
            "management panel"
        ],
        "outputs": [
            "This PR introduces file upload functionality which should validate file type and content.",
            "Improper file upload validation may allow malicious files to be uploaded.",
            "File upload features may increase attack surface if security controls are missing."
        ]
    },

    "secrets": {
        "actions": [
            "Added",
            "Committed",
            "Stored"
        ],
        "targets": [
            "API key",
            "database password",
            "secret token",
            "AWS credentials"
        ],
        "locations": [
            "source code",
            "configuration file",
            "repository"
        ],
        "outputs": [
            "Sensitive credentials appear to be exposed which may lead to unauthorized access.",
            "Hardcoded secrets increase the risk of credential leakage.",
            "This PR exposes confidential credentials that should not be stored in source code."
        ]
    },

    "low_risk": {
        "actions": [
            "Updated",
            "Refactored",
            "Modified"
        ],
        "targets": [
            "README documentation",
            "UI styling",
            "frontend layout",
            "logging utilities"
        ],
        "locations": [
            "frontend",
            "documentation",
            "utility module"
        ],
        "outputs": [
            "This PR appears to have minimal direct security impact.",
            "The changes are primarily maintenance related and seem low risk.",
            "No significant security concerns are evident from this modification."
        ]
    }
}

examples = []

for _ in range(500):

    category = random.choice(list(categories.keys()))

    action = random.choice(categories[category]["actions"])
    target = random.choice(categories[category]["targets"])
    location = random.choice(categories[category]["locations"])
    output = random.choice(categories[category]["outputs"])

    examples.append({
        "instruction": "Analyze this GitHub pull request and explain the security implications.",
        "input": f"{action} {target} in {location}.",
        "output": output
    })

with open(output_file, "w") as f:
    for item in examples:
        f.write(json.dumps(item) + "\n")

print(f"Generated {len(examples)} examples.")