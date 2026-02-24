import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loja from "./pages/Loja";
import Embaixada from "./pages/Embaixada";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/embaixada" element={<Embaixada />} />
      </Routes>
    </Router>
  );
}
export default App;
