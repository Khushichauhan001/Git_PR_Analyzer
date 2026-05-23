import {
  ShieldAlert,
  GitPullRequest,
  Activity,
  CheckCircle2,
} from "lucide-react"

const PRCard = ({ pr }) => {
  return (
    <div
      className="
        bg-[#111827]
        border border-gray-800

        rounded-2xl

        p-4 sm:p-5

        hover:border-blue-500/40
        hover:shadow-[0_0_25px_rgba(59,130,246,0.08)]

        transition-all duration-300
      "
    >

      {/* TOP */}
      <div
        className="
          flex
          flex-col
          xl:flex-row
          xl:items-start
          xl:justify-between

          gap-4
          mb-4
        "
      >

        {/* LEFT */}
        <div>

          {/* PR ID + TITLE */}
          <div className="flex items-center gap-3 flex-wrap">

            <span className="text-blue-400 font-medium text-sm">
              #{pr.id}
            </span>

            <h2
              className="
                text-xl
                sm:text-2xl
                font-bold
              "
            >
              {pr.title}
            </h2>

          </div>

          {/* Repo + Branch */}
          <div
            className="
              flex
              items-center
              gap-3

              mt-3
              flex-wrap
            "
          >

            <span
              className="
                px-3 py-1

                rounded-full

                bg-[#1F2937]

                text-gray-300
                text-sm
              "
            >
              {pr.repository}
            </span>

            <span className="text-gray-500 text-sm">
              {pr.branch}
            </span>

          </div>

        </div>

        {/* SEVERITY */}
        <div>

          <span
            className={`
              px-3 py-1

              rounded-full

              text-sm
              font-medium

              border

              ${
                pr.severity === "Critical"
                  ? "border-red-500 text-red-400 bg-red-500/10"

                  : pr.severity === "Medium"
                  ? "border-yellow-500 text-yellow-400 bg-yellow-500/10"

                  : "border-green-500 text-green-400 bg-green-500/10"
              }
            `}
          >
            {pr.severity}
          </span>

        </div>

      </div>

      {/* INFO */}
      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-4

          gap-4
          mb-4
        "
      >

        {/* Author */}
        <div>

          <p className="text-gray-500 text-sm mb-2">
            Author
          </p>

          <div className="flex items-center gap-3">

            <div
              className="
                w-10 h-10

                rounded-full

                bg-blue-500

                flex items-center justify-center

                font-semibold
              "
            >
              {pr.author.charAt(0)}
            </div>

            <h3 className="font-semibold">
              {pr.author}
            </h3>

          </div>

        </div>

        {/* Files */}
        <div>

          <p className="text-gray-500 text-sm mb-2">
            Files Changed
          </p>

          <h3 className="text-3xl font-bold">
            {pr.filesChanged}
          </h3>

        </div>

        {/* Confidence */}
        <div>

          <p className="text-gray-500 text-sm mb-2">
            AI Confidence
          </p>

          <h3
            className="
              text-3xl
              font-bold
              text-blue-400
            "
          >
            {pr.aiConfidence}%
          </h3>

        </div>

        {/* Risk */}
        <div>

          <p className="text-gray-500 text-sm mb-2">
            Risk Score
          </p>

          <h3
            className={`
              text-3xl
              font-bold

              ${
                pr.riskScore >= 80
                  ? "text-red-400"

                  : pr.riskScore >= 50
                  ? "text-yellow-400"

                  : "text-green-400"
              }
            `}
          >
            {pr.riskScore}%
          </h3>

        </div>

      </div>

      {/* RISK BAR */}
      <div className="mb-4">

        <div
          className="
            flex
            justify-between

            mb-2
          "
        >

          <p className="text-sm text-gray-400">
            AI Risk Analysis
          </p>

          <p className="text-sm font-medium">
            {pr.riskScore}%
          </p>

        </div>

        <div
          className="
            w-full
            h-2.5

            bg-[#1F2937]

            rounded-full
            overflow-hidden
          "
        >

          <div
            className={`
              h-full
              rounded-full

              ${
                pr.riskScore >= 80
                  ? "bg-gradient-to-r from-red-500 to-pink-500"

                  : pr.riskScore >= 50
                  ? "bg-gradient-to-r from-yellow-500 to-orange-400"

                  : "bg-gradient-to-r from-green-500 to-emerald-400"
              }
            `}
            style={{
              width: `${pr.riskScore}%`,
            }}
          />

        </div>

      </div>

      {/* TAGS */}
      <div
        className="
          flex
          flex-wrap
          gap-2

          mb-4
        "
      >

        {pr.tags.map((tag, index) => (

          <span
            key={index}
            className="
              px-2 py-1

              rounded-full

              bg-red-500/10
              border border-red-500/20

              text-red-300
              text-xs
            "
          >
            {tag}
          </span>

        ))}

      </div>

      {/* CODE PREVIEW */}
      <div
        className="
          bg-[#0B0F19]
          border border-gray-900

          rounded-2xl

          p-3
          mb-4

          overflow-x-auto
        "
      >

        <p className="text-gray-500 text-sm mb-3">
          Code Diff Preview
        </p>

        <pre
          className="
            text-sm
            text-green-400

            whitespace-pre-wrap
          "
        >
{pr.codeSnippet}
        </pre>

      </div>

      {/* ACTIONS */}
      <div className="flex items-center gap-3 flex-wrap">

        <button
          className="
            px-4 py-2

            rounded-xl

            bg-blue-600
            hover:bg-blue-700

            text-sm
            font-medium

            transition-all
          "
        >
          View Analysis
        </button>

        <button
          className="
            px-4 py-2

            rounded-xl

            bg-[#1F2937]
            hover:bg-[#374151]

            text-sm

            transition-all
          "
        >
          Open Diff
        </button>

      </div>

    </div>
  )
}

export default PRCard