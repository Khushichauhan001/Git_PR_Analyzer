const logs = [
  {
    type: "info",
    text: "[INFO] GitHub webhook received",
  },

  {
    type: "info",
    text: "[INFO] Fetching pull request diff...",
  },

  {
    type: "ai",
    text: "[AI] Running CodeBERT classification model",
  },

  {
    type: "ai",
    text: "[AI] Running Phi-2 explanation generation",
  },

  {
    type: "success",
    text: "[SUCCESS] Risk score generated successfully",
  },

  {
    type: "danger",
    text: "[SECURITY] Critical vulnerability detected",
  },

  {
    type: "danger",
    text: "[SECURITY] Authentication middleware removed",
  },

  {
    type: "success",
    text: "[SUCCESS] Deployment protection enabled",
  },
]

const getColor = (type) => {
  switch (type) {
    case "info":
      return "text-blue-400"

    case "ai":
      return "text-purple-400"

    case "danger":
      return "text-red-400"

    case "success":
      return "text-green-400"

    default:
      return "text-gray-400"
  }
}

const TerminalLogs = () => {
  return (
    <div
      className="
        bg-[#111827]/80
        border border-gray-800
        rounded-3xl

        overflow-hidden
      "
    >

      {/* Header */}
      <div
        className="
          flex items-center justify-between

          px-5 py-4

          border-b border-gray-800

          bg-[#0B0F19]
        "
      >

        <div className="flex items-center gap-3">

          {/* Dots */}
          <div className="flex items-center gap-2">

            <div className="w-3 h-3 rounded-full bg-red-500" />

            <div className="w-3 h-3 rounded-full bg-yellow-500" />

            <div className="w-3 h-3 rounded-full bg-green-500" />

          </div>

          <h2 className="font-semibold">
            AI Processing Logs
          </h2>

        </div>

        <div
          className="
            flex items-center gap-2

            text-green-400
            text-sm
          "
        >

          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

          Running

        </div>

      </div>

      {/* Logs */}
      <div
        className="
          p-5

          font-mono
          text-sm

          space-y-3

          max-h-[350px]
          overflow-y-auto
        "
      >

        {logs.map((log, index) => (
          <div
            key={index}
            className={`
              ${getColor(log.type)}

              hover:bg-[#0B0F19]

              px-3 py-2
              rounded-lg

              transition-all
            `}
          >
            {log.text}
          </div>
        ))}

      </div>

    </div>
  )
}

export default TerminalLogs