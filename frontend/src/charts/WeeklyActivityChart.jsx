import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"

import { weeklyData } from "../data/chartData"

const WeeklyActivityChart = () => {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5 h-[350px]">
      <h2 className="text-2xl font-semibold mb-5">
        Weekly PR Activity
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={weeklyData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="prs"
            stroke="#3b82f6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default WeeklyActivityChart