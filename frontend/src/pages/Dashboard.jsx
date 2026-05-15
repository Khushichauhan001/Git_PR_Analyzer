import Sidebar from "../components/Sidebar"
import StatsCard from "../components/StatsCard"
import PRTable from "../components/PRTable"
import RiskPieChart from "../charts/RiskPieChart"
import WeeklyActivityChart from "../charts/WeeklyActivityChart"

const Dashboard = () => {
  return (
    <div className="flex bg-[#0B0F19] min-h-screen text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          PR Risk Dashboard
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-6">
          <StatsCard
            title="Total PRs"
            value="128"
            color="text-blue-400"
          />

          <StatsCard
            title="Critical Risks"
            value="12"
            color="text-red-400"
          />

          <StatsCard
            title="Medium Risks"
            value="36"
            color="text-yellow-400"
          />

          <StatsCard
            title="Safe PRs"
            value="80"
            color="text-green-400"
          />
        </div>
      <PRTable />

      <div className="grid grid-cols-2 gap-6 mt-10">
          <RiskPieChart />
          <WeeklyActivityChart />
       </div>
          
          
      </div>
    </div>
  )
}

export default Dashboard