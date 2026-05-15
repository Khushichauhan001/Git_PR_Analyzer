import aiSuggestions from "../data/aiSuggestions"
import SuggestionCard from "./SuggestionCard"

const AISuggestions = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">
          AI Security Suggestions
        </h2>

        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all">
          Analyze New PR
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {aiSuggestions.map((item) => (
          <SuggestionCard
            key={item.id}
            type={item.type}
            message={item.message}
            fix={item.fix}
          />
        ))}
      </div>
    </div>
  )
}

export default AISuggestions