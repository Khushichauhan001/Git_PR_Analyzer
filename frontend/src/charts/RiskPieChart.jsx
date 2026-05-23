import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

// import { riskData } from "../data/chartData"
import { pieData } from "../data/chartData"

const COLORS = [
  "#ef4444",
  "#facc15",
  "#22c55e",
]

const RiskPieChart = () => {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5 h-[350px]">
      <h2 className="text-2xl font-semibold mb-5">
        Risk Distribution
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            outerRadius={100}
            label
          >
            {pieData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RiskPieChart