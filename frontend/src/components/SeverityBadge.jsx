const SeverityBadge = ({ risk }) => {
  const styles =
    risk === "Critical"
      ? "bg-red-500/20 text-red-400 border-red-500"
      : risk === "Medium"
      ? "bg-yellow-500/20 text-yellow-400 border-yellow-500"
      : "bg-green-500/20 text-green-400 border-green-500"

  return (
    <span
      className={`
        px-3 py-1
        rounded-full
        text-sm
        border
        font-medium
        ${styles}
      `}
    >
      {risk}
    </span>
  )
}

export default SeverityBadge