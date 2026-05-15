import SeverityBadge from "./SeverityBadge"

const PRCard = ({ pr }) => {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-2xl font-bold">
            {pr.title}
          </h2>

          <p className="text-gray-400 mt-1">
            Repository: {pr.repository}
          </p>
        </div>

        <SeverityBadge risk={pr.risk} />
      </div>

      {/* Info */}
      <div className="grid grid-cols-3 gap-5 mb-5">

        <div>
          <p className="text-gray-400 text-sm">
            Author
          </p>

          <h3 className="text-lg font-semibold mt-1">
            {pr.author}
          </h3>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Files Changed
          </p>

          <h3 className="text-lg font-semibold mt-1">
            {pr.filesChanged}
          </h3>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            AI Confidence
          </p>

          <h3 className="text-lg font-semibold mt-1 text-blue-400">
            {pr.confidence}%
          </h3>
        </div>

      </div>

      {/* Risk Score */}
      <div className="mb-6">

        <div className="flex justify-between mb-2">
          <span className="text-gray-400">
            Risk Score
          </span>

          <span className="font-semibold">
            {pr.riskScore}%
          </span>
        </div>

        <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-500 rounded-full"
            style={{
              width: `${pr.riskScore}%`,
            }}
          />
        </div>

      </div>

      {/* Button */}
      <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition-all">
        View Details
      </button>

    </div>
  )
}

export default PRCard