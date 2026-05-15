const prData = [
  {
    id: 231,
    title: "Remove auth middleware",
    repository: "payment-service",
    branch: "main → production",
    author: "Naman",
    filesChanged: 12,
    risk: "Critical",
    confidence: 96,
    riskScore: 91,

    vulnerabilities: [
      "Auth Removal",
      "Unsafe Access",
      "Security Risk",
    ],

    diff: `
- verifyToken(user)
+ // removed
    `,
  },

  {
    id: 145,
    title: "Optimize database queries",
    repository: "analytics-engine",
    branch: "dev → main",
    author: "Khushi",
    filesChanged: 7,
    risk: "Medium",
    confidence: 82,
    riskScore: 64,

    vulnerabilities: [
      "Slow Query",
      "Missing Index",
    ],

    diff: `
- SELECT * FROM users
+ SELECT id,name FROM users
    `,
  },

  {
    id: 88,
    title: "Refactor login service",
    repository: "auth-service",
    branch: "feature/login → main",
    author: "Rahul",
    filesChanged: 4,
    risk: "Low",
    confidence: 74,
    riskScore: 22,

    vulnerabilities: [
      "No Security Impact",
    ],

    diff: `
- loginUser(data)
+ authenticateUser(data)
    `,
  },
]

export default prData