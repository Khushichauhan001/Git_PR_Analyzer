import {
  GitPullRequest,
  ShieldAlert,
  Activity,
  CheckCircle2,
} from "lucide-react"

const StatsCard = ({
  title,
  value,
  color,
  type,
}) => {

  const icons = {
    total: <GitPullRequest size={26} />,
    critical: <ShieldAlert size={26} />,
    medium: <Activity size={26} />,
    safe: <CheckCircle2 size={26} />,
  }

  return (
    <div
      className="
        bg-[#111827]/80
        border border-gray-800
        rounded-3xl

        p-5

        hover:-translate-y-1
        hover:border-blue-500

        transition-all duration-300
      "
    >

      <div className="flex items-center justify-between mb-5">

        <div>

          <p className="text-gray-400 text-sm mb-2">
            {title}
          </p>

          <h2 className={`text-4xl font-bold ${color}`}>
            {value}
          </h2>

        </div>

        <div
          className="
            w-14 h-14
            rounded-2xl

            bg-[#0B0F19]
            border border-gray-800

            flex items-center justify-center
          "
        >
          {icons[type]}
        </div>

      </div>

      <p className="text-sm text-gray-400">
        Updated 5 mins ago
      </p>

    </div>
  )
}

export default StatsCard