import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { PlatformSelection } from "./pages/PlatformSelection"
import { InputConfiguration } from "./pages/InputConfiguration"
import { Dashboard } from "./pages/Dashboard"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/platforms" element={<PlatformSelection />} />
        <Route path="/input" element={<InputConfiguration />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}
