import { Search, Bell, ChevronDown, GitBranch } from "lucide-react"

const Navbar = () => {
  return (
    <div
      className="
        sticky top-0 z-50
        mb-8
      "
    >

      <div
        className="
          bg-[#111827]/80
          border border-gray-800
          backdrop-blur-xl
          rounded-3xl

          px-4 sm:px-6
          py-4

          flex
          flex-col
          xl:flex-row

          xl:items-center
          xl:justify-between

          gap-4

          shadow-[0_0_30px_rgba(59,130,246,0.08)]
        "
      >

        {/* LEFT SIDE */}
        <div
          className="
            flex
            flex-col
            lg:flex-row

            lg:items-center

            gap-4
            flex-1
          "
        >

          {/* Project Info */}
          <div className="min-w-fit">

            <h1 className="text-2xl font-bold text-white">
              PR Risk Analyzer
            </h1>

            <p className="text-sm text-gray-400 mt-1">
              AI-powered pull request security platform
            </p>

          </div>

          {/* Search */}
          <div
            className="
              flex items-center
              gap-3

              bg-[#0B0F19]
              border border-gray-800

              rounded-2xl

              px-4 py-3

              flex-1

              hover:border-blue-500
              transition-all
            "
          >

            <Search
              size={18}
              className="text-gray-400"
            />

            <input
              type="text"
              placeholder="Search pull requests, repositories..."

              className="
                bg-transparent
                outline-none
                text-sm
                w-full

                text-white
                placeholder:text-gray-500
              "
            />

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-between
            sm:justify-end

            gap-3
          "
        >

          {/* Repo Selector */}
          <button
            className="
              flex items-center
              gap-3

              bg-[#0B0F19]
              border border-gray-800

              hover:border-blue-500

              px-4 py-3
              rounded-2xl

              transition-all
            "
          >

            <div className="text-left">

              <p className="text-xs text-gray-400">
                Active Repo
              </p>

              <h3 className="text-sm font-semibold">
                payment-service
              </h3>

            </div>

            <ChevronDown
              size={16}
              className="text-gray-400"
            />

          </button>

          {/* Notifications */}
          <button
            className="
              relative

              w-12 h-12

              rounded-2xl

              bg-[#0B0F19]
              border border-gray-800

              hover:border-blue-500

              flex items-center justify-center

              transition-all
            "
          >

            <Bell size={18} />

            {/* Notification Dot */}
            <span
              className="
                absolute
                top-3 right-3

                w-2 h-2

                rounded-full
                bg-red-500
              "
            />

          </button>

          {/* Profile */}
          <div
            className="
              flex items-center
              gap-3

              bg-[#0B0F19]
              border border-gray-800

              hover:border-blue-500

              px-3 py-2
              rounded-2xl

              transition-all
            "
          >

            {/* Avatar */}
            <div
              className="
                w-10 h-10

                rounded-full

                bg-gradient-to-r
                from-blue-500
                to-cyan-400

                flex items-center justify-center

                font-bold
              "
            >
              N
            </div>

            {/* User Info */}
            <div className="hidden sm:block">

              <p className="text-xs text-gray-400">
                Connected GitHub
              </p>

              <div className="flex items-center gap-2">

                <GitBranch size={14} />

                <h3 className="text-sm font-semibold">
                  khushi-dev
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Navbar