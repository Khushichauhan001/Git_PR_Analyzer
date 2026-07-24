import {
  LayoutDashboard,
  ShieldAlert,
  GitPullRequest,
  BarChart3,
} from "lucide-react"

import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div
      className="
        w-20 lg:w-64
        min-h-screen
    bg-[#111827]
        border-r border-gray-800
        p-3 lg:p-5
        flex flex-col
      "
    >

      {/* Logo */}
      <h1 className="hidden lg:block text-2xl font-bold mb-10 text-blue-400">
        RiskAI
      </h1>

      {/* Menu */}
      <div className="space-y-3">

        {/* Dashboard */}
        <Link
          to="/"
          className="
            flex items-center
            justify-center lg:justify-start
            gap-3
            p-3
            rounded-xl
            hover:bg-[#1F2937]
            transition-all duration-300
          "
        >
          <LayoutDashboard size={20} />

          <span className="hidden lg:block">
            Dashboard
          </span>
        </Link>

        {/* Pull Requests */}
        <Link
          to="/pull-requests"
          className="
            flex items-center
            justify-center lg:justify-start
            gap-3
            p-3
            rounded-xl
            hover:bg-[#1F2937]
            transition-all duration-300
          "
        >
          <GitPullRequest size={20} />

          <span className="hidden lg:block">
            Pull Requests
          </span>
        </Link>

        {/* Vulnerabilities */}
        <Link
          to="/vulnerabilities"
          className="
            flex items-center
            justify-center lg:justify-start
            gap-3
            p-3
            rounded-xl
            hover:bg-[#1F2937]
            transition-all duration-300
          "
        >
          <ShieldAlert size={20} />

          <span className="hidden lg:block">
            Vulnerabilities
          </span>
        </Link>

        {/* Analytics */}
        <Link
          to="/analytics"
          className="
            flex items-center
            justify-center lg:justify-start
            gap-3
            p-3
            rounded-xl
            hover:bg-[#1F2937]
            transition-all duration-300
          "
        >
          <BarChart3 size={20} />

          <span className="hidden lg:block">
            Analytics
          </span>
        </Link>

      </div>

    </div>
  )
}

export default Sidebar