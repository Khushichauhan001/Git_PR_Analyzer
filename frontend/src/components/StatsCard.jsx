const StatsCard = ({
  title,
  value,
  color,
}) => {
  return (
    <div
className={`
  p-5 rounded-2xl
  border border-gray-800
  bg-[#111827]/80
  backdrop-blur-lg
  shadow-[0_0_20px_rgba(59,130,246,0.08)]
  hover:shadow-[0_0_25px_rgba(59,130,246,0.18)]
  hover:-translate-y-1
  transition-all duration-300
`}
    >
      <h2 className="text-gray-400 text-sm mb-2">
        {title}
      </h2>

      <p className={`text-3xl font-bold ${color}`}>
        {value}
      </p>
    </div>
  )
}

export default StatsCard