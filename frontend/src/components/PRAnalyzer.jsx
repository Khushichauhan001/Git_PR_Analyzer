import { useState } from "react";
import axios from "axios";

const PRAnalyzer = () => {

  const [prUrl, setPrUrl] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const [result, setResult] = useState(null);


const handleAnalyze = async () => {
  if (!prUrl.trim()) {
    setError("Please enter a GitHub PR URL");
    return;
  }

  try {
    setLoading(true);
    setError("");

    const response = await axios.post(
      "http://127.0.0.1:8000/predict",
      {
        pr_url: prUrl,
      }
    );

    console.log("Backend Response:", response.data);

    setResult(response.data);

  } catch (err) {
    console.error(err);
    setError("Something went wrong");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6 mb-8">
      <h2 className="text-xl font-bold mb-4">
        Analyze GitHub Pull Request
      </h2>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Paste GitHub PR URL..."
          value={prUrl}
          onChange={(e) => setPrUrl(e.target.value)} 
          className="
            flex-1
            bg-[#0B0F19]
            border border-gray-700
            rounded-xl
            px-4
            py-3
            outline-none
          "
        />

       <button
  onClick={handleAnalyze}
  disabled={loading}
  className="
    bg-blue-600
    hover:bg-blue-700
    px-6
    rounded-xl
    disabled:opacity-50
  "
>
  {loading ? "Analyzing..." : "Analyze"}
</button>
      </div>


      {error && (
  <p className="text-red-500 mt-3">
    {error}
  </p>
)}



{result && (
  <div className="mt-6 rounded-2xl bg-[#0B0F19] border border-gray-700 p-5">

    <h3 className="text-lg font-bold mb-4">
      Analysis Result
    </h3>

    <div className="space-y-3">

      <p>
        <span className="text-gray-400">Risk Level :</span>{" "}
        <span className="font-semibold">
          {result.label}
        </span>
      </p>

      <p>
        <span className="text-gray-400">Confidence :</span>{" "}
        {(result.confidence * 100).toFixed(2)}%
      </p>

      <p>
        <span className="text-gray-400">Explanation :</span>
      </p>

      <div className="bg-[#111827] rounded-xl p-4 whitespace-pre-wrap">
        {result.explanation}
      </div>

    </div>

  </div>
)}


    </div>
  );
};

export default PRAnalyzer;