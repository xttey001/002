import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Analyzer from "@/pages/Analyzer";
import Creator from "@/pages/Creator";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyzer" element={<Analyzer />} />
        <Route path="/creator" element={<Creator />} />
      </Routes>
    </Router>
  );
}
