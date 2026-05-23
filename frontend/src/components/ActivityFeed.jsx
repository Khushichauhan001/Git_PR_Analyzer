import {
  ShieldAlert,
  GitPullRequest,
  Brain,
  CheckCircle2,
} from "lucide-react"

const activities = [
  {
    id: 1,
    icon: <GitPullRequest size={18} />,
    title: "New pull request detected",
    description: "payment-service • #231",
    color: "text-blue-400",
  },

  {
    id: 2,
    icon: <Brain size={18} />,
    title: "AI risk analysis started",
    description: "Running CodeBERT classification",
    color: "text-purple-400",
  },

  {
    id: 3,
    icon: <ShieldAlert size={18} />,
    title: "Critical vulnerability found",
    description: "Authentication validation removed",
    color: "text-red-400",
  },

  {
    id: 4,
    icon: <CheckCircle2 size={18} />,
    title: "Deployment protection enabled",
    description: "PR merge temporarily blocked",
    color: "text-green-400",
  },
]

const ActivityFeed = () => {
  return (
    <div
      className="
        bg-[#111827]/80
        border border-gray-800
        rounded-3xl
        p-5

        backdrop-blur-lg
      "
    >

      {/* Heading */}
      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-bold">
            Live AI Security Feed
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Real-time PR monitoring events
          </p>

        </div>

        <div
          className="
            flex items-center gap-2

            bg-green-500/10
            text-green-400

            px-3 py-1
            rounded-full

            text-sm
          "
        >

          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

          Live

        </div>

      </div>

      {/* Activities */}
      <div className="space-y-4">

        {activities.map((activity) => (
          <div
            key={activity.id}
            className="
              flex items-start
              gap-4

              p-4

              rounded-2xl

              bg-[#0B0F19]
              border border-gray-800

              hover:border-blue-500

              transition-all
            "
          >

            {/* Icon */}
            <div
              className={`
                w-10 h-10
                rounded-2xl

                bg-[#111827]

                flex items-center justify-center

                ${activity.color}
              `}
            >
              {activity.icon}
            </div>

            {/* Content */}
            <div className="flex-1">

              <h3 className="font-semibold mb-1">
                {activity.title}
              </h3>

              <p className="text-sm text-gray-400">
                {activity.description}
              </p>

            </div>

            {/* Time */}
            <p className="text-xs text-gray-500">
              just now
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}

export default ActivityFeed