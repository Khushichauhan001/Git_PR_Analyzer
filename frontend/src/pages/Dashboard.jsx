import StatsCard from "../components/StatsCard"
import PRTable from "../components/PRTable"
import RiskPieChart from "../charts/RiskPieChart"
import WeeklyActivityChart from "../charts/WeeklyActivityChart"
import AISuggestions from "../components/AISuggestions"
import ActivityFeed from "../components/ActivityFeed"
import TerminalLogs from "../components/TerminalLogs"

const Dashboard = () => {
  return (
    <div className="space-y-8">

      {/* Heading */}
      <div>

        <h1 className="text-3xl sm:text-4xl font-bold">
          PR Risk Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Monitor pull request vulnerabilities and AI risk analysis
        </p>

      </div>

      {/* Stats */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-5
        "
      >

        <StatsCard
          title="Total PRs"
          value="128"
          color="text-blue-400"
          type="total"
        />

        <StatsCard
          title="Critical Risks"
          value="12"
          color="text-red-400"
          type="critical"
        />

        <StatsCard
          title="Medium Risks"
          value="36"
          color="text-yellow-400"
          type="medium"
        />

        <StatsCard
          title="Safe PRs"
          value="80"
          color="text-green-400"
          type="safe"
        />

      </div>

      {/* Table */}
      <PRTable />

      {/* Charts */}
      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
        "
      >

        <RiskPieChart />

        <WeeklyActivityChart />

      </div>
         <ActivityFeed />       
      {/* i might remove it later at the end of project if i donot like the Dashboard , it donot provide much info and just consume space */}
       
      <TerminalLogs />

      {/* AI Suggestions */}
      <AISuggestions />

    </div>
  )
}

export default Dashboard