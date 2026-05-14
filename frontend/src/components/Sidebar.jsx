import {
  LayoutDashboard,
  ShieldAlert,
  GitPullRequest,
  BarChart3,
} from "lucide-react"

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#111827] border-r border-gray-800 p-5">
      <h1 className="text-2xl font-bold mb-10 text-blue-400">
        RiskAI
      </h1>

      <div className="space-y-4">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1F2937] cursor-pointer">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1F2937] cursor-pointer">
          <GitPullRequest size={20} />
          <span>Pull Requests</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1F2937] cursor-pointer">
          <ShieldAlert size={20} />
          <span>Vulnerabilities</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1F2937] cursor-pointer">
          <BarChart3 size={20} />
          <span>Analytics</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar