const prData = [
  {
    id: 231,
    title: "Remove auth middleware",

    repository: "payment-service",

    branch: "main → production",

    author: "Naman",

    filesChanged: 12,

    aiConfidence: 96,

    riskScore: 91,

    severity: "Critical",

    tags: [
      "Auth Removal",
      "Unsafe Access",
      "Security Risk",
    ],

    codeSnippet: `
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

    aiConfidence: 82,

    riskScore: 64,

    severity: "Medium",

    tags: [
      "SQL",
      "Performance",
      "Optimization",
    ],

    codeSnippet: `
- SELECT * FROM users
+ SELECT id,name FROM users
    `,
  },
]

export default prData