// import { useState } from "react";
// import axios from "axios";

// function App() {

//   const [text, setText] = useState("");

//   const [result, setResult] = useState(null);

//   const [loading, setLoading] = useState(false);

//   const [error, setError] = useState("");



//   const analyzePR = async () => {

//     if (!text.trim()) return;

//     try {

//       setLoading(true);

//       setError("");

//       setResult(null);

//       const response = await axios.post(
//         "http://127.0.0.1:8000/predict",
//         {
//           // text: text
//             pr_url: text
//         }
//       );

//       setResult(response.data);

//     } catch (err) {

//       setError("Something went wrong");

//       console.log(err);

//     } finally {

//       setLoading(false);

//     }
//   };



//   return (

//     <div style={styles.container}>

//       <h1 style={styles.heading}>
//         GitHub PR Risk Analyzer
//       </h1>

//       <textarea
//         placeholder="Paste PR code changes here..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         style={styles.textarea}
//       />

//       <button
//         onClick={analyzePR}
//         style={styles.button}
//       >
//         {loading ? "Analyzing..." : "Analyze PR"}
//       </button>

//       {error && (
//         <p style={styles.error}>
//           {error}
//         </p>
//       )}

//       {result && (
//         <div style={styles.resultCard}>

//           <h2>
//             Prediction Result
//           </h2>

//           <p>
//             <strong>Risk Level:</strong>{" "}
//             {result.label}
//           </p>

//           <p>
//             <strong>Confidence:</strong>{" "}
//             {(result.confidence * 100).toFixed(2)}%
//           </p>

//           <p>
//             <strong>Explanation:</strong>{" "}
//             {result.explanation}
//           </p>

//         </div>
//       )}

//     </div>
//   );
// }



// const styles = {

//   container: {
//     minHeight: "100vh",
//     backgroundColor: "#0f172a",
//     color: "white",
//     padding: "40px",
//     fontFamily: "Arial"
//   },

//   heading: {
//     fontSize: "40px",
//     marginBottom: "30px"
//   },

//   textarea: {
//     width: "100%",
//     height: "220px",
//     padding: "20px",
//     borderRadius: "12px",
//     border: "none",
//     fontSize: "16px",
//     marginBottom: "20px"
//   },


//   button: {
//     padding: "14px 30px",
//     fontSize: "18px",
//     borderRadius: "10px",
//     border: "none",
//     backgroundColor: "#2563eb",
//     color: "white",
//     cursor: "pointer"
//   },

 
//   resultCard: {
//   marginTop: "30px",
//   padding: "20px",
//   backgroundColor: "#1e293b",
//   borderRadius: "12px",
//   whiteSpace: "pre-wrap"
// },

//   error: {
//     color: "red",
//     marginTop: "20px"
//   }
// };

// export default App;


import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import PullRequests from "./pages/PullRequests";
import Vulnerabilities from "./pages/Vulnerabilities";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/pull-requests" element={<PullRequests />} />
        <Route path="/vulnerabilities" element={<Vulnerabilities />} />
      </Routes>
    </MainLayout>
  );
}

export default App;