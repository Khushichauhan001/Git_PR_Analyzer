import prData from "../data/prData"
import PRCard from "../components/PRCard"
import { useState } from "react"
import AnalysisModal from "../components/AnalysisModal"

const PullRequests = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="max-w-7xl mx-auto">

      {/* Header */}
      <div className="
        flex
        flex-col sm:flex-row
        sm:items-center
        sm:justify-between
        gap-4
        mb-8
      ">

        <h1 className="text-3xl sm:text-4xl font-bold">
          Pull Requests
        </h1>

     <button
  onClick={() => setOpenModal(true)}

  className="
    bg-blue-600
    hover:bg-blue-700

    px-5 py-3

    rounded-2xl

    font-medium

    transition-all
  "
>

  Analyze New PR

</button>


      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-5">
        {prData.map((pr) => (
          <PRCard
            key={pr.id}
            pr={pr}
          />
        ))}
      </div>

<AnalysisModal
  open={openModal}
  setOpen={setOpenModal}
/>
    </div>
  )
}

export default PullRequests