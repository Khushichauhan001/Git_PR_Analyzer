# AI-Powered GitHub Pull Request Risk Analyzer

## Overview

AI-Powered GitHub Pull Request Risk Analyzer is an intelligent system that automatically analyzes GitHub Pull Requests (PRs) and predicts potential risks before code is merged.

The system uses two fine-tuned AI models:

1. **Classification Model**

   * Predicts the risk level of a Pull Request.
   * Categories:

     * Low Risk
     * Medium Risk
     * High Risk

2. **Instruction Model (Fine-Tuned Phi-2)**

   * Generates detailed explanations.
   * Provides reasoning behind the prediction.
   * Suggests improvements and best practices.

This helps developers and reviewers identify risky code changes early and improve code quality.

---

# Problem Statement

In large software projects, reviewing Pull Requests manually is time-consuming.

Challenges include:

* Large code changes
* Missing code reviews
* Security vulnerabilities
* Performance issues
* Merge conflicts
* Inconsistent coding practices

This project automates the initial review process using Artificial Intelligence.

---

# Features

### PR Risk Classification

Predicts whether a Pull Request is:

* Low Risk
* Medium Risk
* High Risk

### AI-Based Review Comments

Generates:

* Risk explanation
* Code review suggestions
* Improvement recommendations

### Fast Analysis

Provides results within seconds.

### REST API Support

Backend exposes APIs for integration with:

* GitHub
* CI/CD Pipelines
* Internal Developer Tools

---

# Architecture

```text
                    +--------------------+
                    |   GitHub PR Data   |
                    +---------+----------+
                              |
                              v
                    +--------------------+
                    |     FastAPI API    |
                    +---------+----------+
                              |
          -----------------------------------------
          |                                       |
          v                                       v

+--------------------+             +----------------------+
| Classification     |             | Instruction Model    |
| Model              |             | Fine-Tuned Phi-2     |
|                    |             |                      |
| Predict Risk Level |             | Generate Explanation |
+---------+----------+             +----------+-----------+
          |                                   |
          -------------------------------------
                              |
                              v
                    +--------------------+
                    | Final AI Response  |
                    +---------+----------+
                              |
                              v
                    +--------------------+
                    | React Frontend     |
                    +--------------------+
```

---

# Models Used

## 1. Classification Model


### Base Model

CodeBERT Model

### Purpose

Predict PR risk level.

### Input

* PR title
* PR description
* Changed files
* Code diff

### Output

* Low Risk
* Medium Risk
* High Risk

### Fine-Tuning

The model was fine-tuned using Pull Request datasets containing:

* PR descriptions
* Code changes
* Risk labels

### Training Objective

Multi-class classification.

---

## 2. Instruction Model

### Base Model

Phi-2

### Purpose

Generate human-readable review comments.

### Fine-Tuning Tasks

* PR explanation generation
* Risk reasoning
* Improvement suggestions
* Review recommendations

### Output Example

Risk Level: High

Reason:
The Pull Request modifies authentication logic and database access layers simultaneously.

Suggestions:

1. Add additional testing.
2. Validate user permissions.
3. Perform security review before merging.

---

# Tech Stack

## Frontend

* React.js
* JavaScript
* Axios 
* Tailwind CSS

## Backend

* FastAPI
* Python
* Uvicorn

## Machine Learning

* Transformers
* Hugging Face
* PEFT (LoRA)
* PyTorch

## Deployment

* Hugging Face Models
* FastAPI Server
* Render / Railway / Cloud Deployment

---

# Project Workflow

### Step 1

User submits:

* PR title
* PR description
* Code diff

### Step 2

Backend receives the request.

### Step 3

Classification model predicts risk level.

### Step 4

Prediction is passed to the instruction model.

### Step 5

Instruction model generates:

* Explanation
* Recommendations
* Review comments

### Step 6

Combined response is returned to frontend.

---

# Future Improvements

* GitHub OAuth Integration
* Automatic PR Fetching
* Security Vulnerability Detection
* Code Smell Detection
* CI/CD Integration
* Multi-Language Support
* LLM-Based Deep Code Review

---

# Installation

## Clone Repository

```bash
git clone https://github.com/your-username/github-pr-analyzer.git
```

## Backend Setup

```bash
cd backend

pip install -r requirements.txt

uvicorn app:app --reload
```

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# Project Structure

```text
Git_PR_Analyzer/
│
├── ai-models/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── app.py
│   ├── main.py
│   ├── predict.py
│   └── requirements.txt
│
├── datasets/
│
├── docs/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── instruction_model/
│   ├── adapters/
│   ├── dataset/
│   ├── inference/
│   ├── notebooks/
│   └── training/
│
├── .env
├── .gitignore
├── docker-compose.yml
└── README.md
```
---

# Author

Khushi Chuhan

Full Stack Developer | AI/ML Enthusiast

Focused on building AI-powered developer productivity tools and intelligent software engineering solutions.
