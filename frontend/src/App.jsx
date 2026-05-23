import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import PRDetails from "./pages/PRDetails"

import MainLayout from "./layouts/MainLayout"

import Dashboard from "./pages/Dashboard"
import PullRequests from "./pages/PullRequests"
import Vulnerabilities from "./pages/Vulnerabilities"
import Analytics from "./pages/Analytics"

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/pull-requests"
            element={<PullRequests />}
          />

          <Route
            path="/vulnerabilities"
            element={<Vulnerabilities />}
          />

          <Route
            path="/analytics"
            element={<Analytics />}
          />

          <Route
          path="/pull-requests/:id"
          element={<PRDetails />}
        />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App