from utils.github import fetch_pr_files

url = "https://github.com/facebook/react/pull/33000"

data = fetch_pr_files(url)

print(data[:3000])