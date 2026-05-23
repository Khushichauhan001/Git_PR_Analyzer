import { useEffect, useState } from "react"

const steps = [
  "Receiving GitHub webhook...",
  "Fetching pull request diff...",
  "Running CodeBERT classification...",
  "Analyzing security vulnerabilities...",
  "Running Phi-2 explanation model...",
  "Calculating risk score...",
  "Generating final report...",
]

const AnalysisModal = ({
  open,
  setOpen,
}) => {

  const [progress, setProgress] = useState(0)

  const [currentStep, setCurrentStep] = useState(0)

  const [completed, setCompleted] = useState(false)

  useEffect(() => {

    if (!open) return

    setProgress(0)
    setCurrentStep(0)
    setCompleted(false)

    let step = 0

    const interval = setInterval(() => {

      step++

      setCurrentStep(step)

      setProgress(step * 14)

      if (step >= steps.length) {

        clearInterval(interval)

        setCompleted(true)

      }

    }, 1000)

    return () => clearInterval(interval)

  }, [open])

  if (!open) return null

  return (
    <div
      className="
        fixed inset-0
        bg-black/70
        backdrop-blur-sm

        flex items-center justify-center

        z-[100]
        p-4
      "
    >

      <div
        className="
          w-full
          max-w-2xl

          bg-[#111827]
          border border-gray-800

          rounded-3xl

          p-6
        "
      >

        {/* Header */}
        <div className="mb-6">

          <h2 className="text-3xl font-bold mb-2">
            AI PR Analysis
          </h2>

          <p className="text-gray-400">
            Simulating real-time AI security pipeline
          </p>

        </div>

        {/* Progress */}
        <div className="mb-8">

          <div
            className="
              w-full
              h-4

              bg-[#0B0F19]
              rounded-full

              overflow-hidden
            "
          >

            <div
              className="
                h-full

                bg-gradient-to-r
                from-blue-500
                to-cyan-400

                transition-all duration-700
              "
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

          <div className="flex justify-between mt-2">

            <p className="text-sm text-gray-400">
              Processing...
            </p>

            <p className="text-sm text-blue-400">
              {progress}%
            </p>

          </div>

        </div>

        {/* Steps */}
        <div className="space-y-4 mb-8">

          {steps.map((step, index) => (

            <div
              key={index}
              className={`
                p-4
                rounded-2xl

                border

                transition-all duration-500

                ${
                  index < currentStep
                    ? "border-green-500 bg-green-500/10 text-green-400"
                    : "border-gray-800 bg-[#0B0F19] text-gray-500"
                }
              `}
            >

              {step}

            </div>

          ))}

        </div>

        {/* Final Result */}
        {completed && (

          <div
            className="
              bg-red-500/10
              border border-red-500

              rounded-2xl

              p-5
              mb-6
            "
          >

            <h3 className="text-red-400 text-xl font-bold mb-2">
              Critical Vulnerability Found
            </h3>

            <p className="text-gray-300">
              Authentication middleware was removed from protected routes.
            </p>

            <div className="mt-4">

              <p className="text-sm text-gray-400 mb-2">
                AI Risk Score
              </p>

              <h2 className="text-5xl font-bold text-red-400">
                91%
              </h2>

            </div>

          </div>

        )}

        {/* Footer */}
        <div className="flex justify-end">

          <button
            onClick={() => setOpen(false)}
            className="
              px-6 py-3

              rounded-2xl

              bg-blue-500
              hover:bg-blue-600

              transition-all
            "
          >

            Close

          </button>

        </div>

      </div>

    </div>
  )
}

export default AnalysisModal