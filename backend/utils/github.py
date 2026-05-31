import requests
import os
from dotenv import load_dotenv

load_dotenv()

GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")


def extract_pr_details(pr_url):

    parts = pr_url.split("/")

    owner = parts[3]
    repo = parts[4]
    pull_number = parts[6]

    return owner, repo, pull_number

def fetch_pr_files(pr_url):

    owner, repo, pull_number = extract_pr_details(pr_url)

    api_url = f"https://api.github.com/repos/{owner}/{repo}/pulls/{pull_number}/files"

    headers = {
        "Authorization": f"token {GITHUB_TOKEN}"
    }

    response = requests.get(api_url, headers=headers)

    print(response.status_code)

    print(response.json())

    files = response.json()

    all_code = ""

    for file in files:

        patch = file.get("patch")

        if patch:
            all_code += patch + "\n"

    return all_code