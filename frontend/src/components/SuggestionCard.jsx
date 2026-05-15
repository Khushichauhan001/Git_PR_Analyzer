const SuggestionCard = ({
  type,
  message,
  fix,
}) => {
  const borderColor =
    type === "Critical"
      ? "border-red-500"
      : type === "Medium"
      ? "border-yellow-500"
      : "border-green-500"

  return (
    <div
      className={`
        bg-[#111827]
        border-l-4
        ${borderColor}
        rounded-2xl
        p-5
        shadow-lg
        hover:scale-[1.01]
        transition-all duration-300
      `}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-semibold">
          {type} Alert
        </h3>

        <span className="text-sm text-gray-400">
          AI Generated
        </span>
      </div>

      <p className="text-gray-300 mb-4">
        {message}
      </p>

      <div className="bg-[#1F2937] rounded-lg p-3 text-sm text-blue-300">
        Suggested Fix: {fix}
      </div>
    </div>
  )
}

export default SuggestionCard