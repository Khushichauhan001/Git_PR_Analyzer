const aiSuggestions = [
  {
    id: 1,
    type: "Critical",
    message:
      "Authentication middleware removed from admin routes.",
    fix:
      "Add validation checks before merging.",
  },

  {
    id: 2,
    type: "Medium",
    message:
      "Database query may cause performance issues.",
    fix:
      "Use indexed fields and query optimization.",
  },

  {
    id: 3,
    type: "Low",
    message:
      "Refactor detected with no security impact.",
    fix:
      "No immediate action required.",
  },
]

export default aiSuggestions