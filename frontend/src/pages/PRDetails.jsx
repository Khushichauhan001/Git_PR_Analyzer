import {
  ShieldAlert,
  GitBranch,
  FileCode2,
  Sparkles,
} from "lucide-react"
                                                                               
const PRDetails = () => {
  return (
    <div className="max-w-7xl mx-auto">

      {/* Top Header */}
      <div
        className="
          flex flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-6
          mb-8
        "
      >

        <div>

          <div className="flex flex-wrap items-center gap-3 mb-3">

            <span className="text-blue-400 font-semibold">
              #231
            </span>

            <h1 className="text-3xl sm:text-4xl font-bold">
              Remove auth middleware
            </h1>

          </div>

          <div className="flex flex-wrap items-center gap-3 text-gray-400">

            <span className="bg-[#1F2937] px-3 py-1 rounded-full text-sm">
              payment-service
            </span>

            <div className="flex items-center gap-2 text-sm">
              <GitBranch size={16} />
              main → production
            </div>

          </div>

        </div>

        {/* Risk Badge */}
        <div
          className="
            bg-red-500/10
            border border-red-500/30
            px-5 py-3
            rounded-2xl
            self-start
          "
        >

          <p className="text-sm text-red-400 mb-1">
            Critical Risk
          </p>

          <h2 className="text-3xl font-bold text-red-400">
            91%
          </h2>

        </div>

      </div>

      {/* Main Grid */}
      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-6
        "
      >

        {/* LEFT SECTION */}
        <div className="xl:col-span-1 space-y-6">

          {/* AI Explanation */}
          <div
            className="
              bg-[#111827]/80
              border border-gray-800
              rounded-3xl
              p-5
              backdrop-blur-lg
            "
          >

            <div className="flex items-center gap-3 mb-4">

              <Sparkles className="text-blue-400" />

              <h2 className="text-2xl font-bold">
                AI Analysis
              </h2>

            </div>

            <p className="text-gray-300 leading-7">
              AI detected removal of authentication
              validation from admin routes which may
              expose protected APIs to unauthorized access.
            </p>

          </div>

          {/* Vulnerabilities */}
          <div
            className="
              bg-[#111827]/80
              border border-gray-800
              rounded-3xl
              p-5
            "
          >

            <div className="flex items-center gap-3 mb-5">

              <ShieldAlert className="text-red-400" />

              <h2 className="text-2xl font-bold">
                Vulnerabilities
              </h2>

            </div>

            <div className="flex flex-wrap gap-3">

              <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-2 rounded-full text-sm">
                Auth Removal
              </span>

              <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-2 rounded-full text-sm">
                Unsafe Access
              </span>

              <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-2 rounded-full text-sm">
                Missing Validation
              </span>

            </div>

          </div>

          {/* AI Confidence */}
          <div
            className="
              bg-[#111827]/80
              border border-gray-800
              rounded-3xl
              p-5
            "
          >

            <h2 className="text-2xl font-bold mb-5">
              AI Confidence
            </h2>

            <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden mb-3">

              <div
                className="
                  h-full
                  bg-gradient-to-r
                  from-blue-500
                  to-cyan-400
                  rounded-full
                "
                style={{ width: "96%" }}
              />

            </div>

            <p className="text-blue-400 font-semibold">
              96% confidence in risk prediction
            </p>

          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="xl:col-span-2">

          {/* Diff Viewer */}
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
                border-b border-gray-800
                px-5 py-4
              "
            >

              <div className="flex items-center gap-3">

                <FileCode2 className="text-green-400" />

                <h2 className="text-2xl font-bold">
                  Code Diff Analysis
                </h2>

              </div>

              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-sm transition-all">
                Open on GitHub
              </button>

            </div>

            {/* Diff Content */}
            <div className="p-5 overflow-x-auto">

              <pre
                className="
                  text-sm
                  leading-8
                  whitespace-pre-wrap
                  break-words
                "
              >

{`- verifyToken(user)
- checkAdminAccess(user)

+ // removed authentication

- validatePermissions(data)

+ allowAccess(data)
`}

              </pre>

            </div>

          </div>

          {/* Suggested Fixes */}
          <div
            className="
              mt-6
              bg-[#111827]/80
              border border-gray-800
              rounded-3xl
              p-5
            "
          >

            <h2 className="text-2xl font-bold mb-5">
              Suggested Fixes
            </h2>

            <div className="space-y-4">

              <div className="bg-[#0B0F19] border border-gray-800 rounded-2xl p-4">
                Re-add authentication middleware before merging.
              </div>

              <div className="bg-[#0B0F19] border border-gray-800 rounded-2xl p-4">
                Add regression tests for admin routes.
              </div>

              <div className="bg-[#0B0F19] border border-gray-800 rounded-2xl p-4">
                Validate protected endpoint access control.
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default PRDetails