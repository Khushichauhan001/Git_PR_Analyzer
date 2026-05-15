import StatsCard from "../components/StatsCard"
import PRTable from "../components/PRTable"
import RiskPieChart from "../charts/RiskPieChart"
import WeeklyActivityChart from "../charts/WeeklyActivityChart"
import AISuggestions from "../components/AISuggestions"

const Dashboard = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8">
        PR Risk Dashboard
      </h1>

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

      <AISuggestions />
    </>
  )
}

export default Dashboard