import SeverityBadge from "./SeverityBadge"

const PRCard = ({ pr }) => {
  return (
    <div
      className="
        bg-[#111827]/80
        border border-gray-800
        rounded-3xl
        p-4 sm:p-5
        hover:border-blue-500
        hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
        transition-all duration-300
        backdrop-blur-lg
        overflow-hidden
      "
    >

      {/* Top */}
      <div
        className="
          flex flex-col
          lg:flex-row
          lg:justify-between
          lg:items-start
          gap-4
          mb-4
        "
      >

        <div className="min-w-0">

          {/* Title */}
          <div className="flex flex-wrap items-center gap-3 mb-2">

            <span className="text-blue-400 font-semibold text-sm">
              #{pr.id}
            </span>

            <h2 className="text-lg sm:text-xl font-bold break-words">
              {pr.title}
            </h2>

          </div>

          {/* Repo */}
          <div
            className="
              flex flex-wrap
              items-center
              gap-3
              text-gray-400
              text-sm
            "
          >

            <span className="bg-[#1F2937] px-3 py-1 rounded-full">
              {pr.repository}
            </span>

            <span className="break-words">
              {pr.branch}
            </span>

          </div>

        </div>

        <SeverityBadge risk={pr.risk} />

      </div>

      {/* Info Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-4
          mb-4
        "
      >

        {/* Author */}
        <div>

          <p className="text-gray-400 text-sm mb-1">
            Author
          </p>

          <div className="flex items-center gap-3">

            <div
              className="
                w-9 h-9
                rounded-full
                bg-blue-500
                flex items-center justify-center
                font-bold
                text-sm
                shrink-0
              "
            >
              {pr.author[0]}
            </div>

            <h3 className="text-base font-semibold break-words">
              {pr.author}
            </h3>

          </div>

        </div>

        {/* Files */}
        <div>

          <p className="text-gray-400 text-sm mb-1">
            Files Changed
          </p>

          <h3 className="text-xl font-bold">
            {pr.filesChanged}
          </h3>

        </div>

        {/* Confidence */}
        <div>

          <p className="text-gray-400 text-sm mb-1">
            AI Confidence
          </p>

          <h3 className="text-xl font-bold text-blue-400">
            {pr.confidence}%
          </h3>

        </div>

      </div>

      {/* Risk Score */}
      <div className="mb-4">

        <div className="flex justify-between mb-2">

          <span className="text-gray-400 text-sm">
            Risk Score
          </span>

          <span className="font-semibold text-sm">
            {pr.riskScore}%
          </span>

        </div>

        <div
          className="
            w-full
            h-3
            bg-gray-800
            rounded-full
            overflow-hidden
          "
        >

          <div
            className="
              h-full
              bg-gradient-to-r
              from-red-500
              to-pink-500
              rounded-full
            "
            style={{
              width: `${pr.riskScore}%`,
            }}
          />

        </div>

      </div>

      {/* Vulnerabilities */}
      <div className="flex flex-wrap gap-2 mb-4">

        {pr.vulnerabilities.map((item, index) => (
          <span
            key={index}
            className="
              bg-red-500/10
              text-red-400
              border border-red-500/20
              px-3 py-1
              rounded-full
              text-xs
              break-words
            "
          >
            {item}
          </span>
        ))}

      </div>

      {/* Diff Preview */}
      <div
        className="
          bg-black/40
          rounded-2xl
          p-3
          mb-4
          overflow-x-auto
        "
      >

        <p className="text-gray-400 text-xs mb-2">
          Code Diff Preview
        </p>

        <pre
          className="
            text-xs
            text-green-400
            whitespace-pre-wrap
            break-words
          "
        >
          {pr.diff}
        </pre>

      </div>

      {/* Buttons */}
      <div
        className="
          flex flex-col
          sm:flex-row
          gap-3
        "
      >

        <button
          className="
            bg-blue-600
            hover:bg-blue-700
            px-4 py-2
            rounded-xl
            text-sm
            transition-all
            w-full sm:w-auto
          "
        >
          View Analysis
        </button>

        <button
          className="
            bg-[#1F2937]
            hover:bg-[#374151]
            px-4 py-2
            rounded-xl
            text-sm
            transition-all
            w-full sm:w-auto
          "
        >
          Open Diff
        </button>

      </div>

    </div>
  )
}

export default PRCard