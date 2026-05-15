import {
  LayoutDashboard,
  ShieldAlert,
  GitPullRequest,
  BarChart3,
} from "lucide-react"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#111827] border-r border-gray-800 p-5">
      <h1 className="text-2xl font-bold mb-10 text-blue-400">
        RiskAI
      </h1>

      <div className="space-y-4">
        <Link
           to="/"
           className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1F2937] cursor-pointer"
         >
           <LayoutDashboard size={20} />
           <span>Dashboard</span>
         </Link>

         <Link
           to="/pull-requests"
           className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1F2937] cursor-pointer"
         >
           <GitPullRequest size={20} />
           <span>Pull Requests</span>
         </Link>

         <Link
             to="/vulnerabilities"
             className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1F2937] cursor-pointer"
           >
             <ShieldAlert size={20} />
             <span>Vulnerabilities</span>
           </Link>

          <Link
            to="/analytics"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1F2937] cursor-pointer"
          >
            <BarChart3 size={20} />
            <span>Analytics</span>
          </Link>
          
      </div>
    </div>
  )
}

export default Sidebar