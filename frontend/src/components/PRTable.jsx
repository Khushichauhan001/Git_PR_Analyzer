import prData from "../data/prData"

const PRTable = () => {
  return (
    <div className="mt-10 bg-[#111827] border border-gray-800 rounded-2xl p-5">
      <h2 className="text-2xl font-semibold mb-5">
        Recent Pull Requests
      </h2>

      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-400 border-b border-gray-800">
            <th className="pb-4">PR Title</th>
            <th className="pb-4">Risk</th>
            <th className="pb-4">Severity</th>
          </tr>
        </thead>

        <tbody>
          {prData.map((pr) => (
            <tr
              key={pr.id}
              className="border-b border-gray-900"
            >
              <td className="py-4">
                {pr.title}
              </td>

              <td className="py-4">
                {pr.risk}
              </td>

              <td className="py-4">
                {pr.severity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PRTable