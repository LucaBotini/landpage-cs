import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PaySuccess from "./pages/PaySuccess.jsx";
import PayFail from "./pages/PayFail.jsx";
import PayLoading from "./pages/PayLoading.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sucess" element={<PaySuccess />} />
        <Route path="/fail" element={<PayFail />} />
        <Route path="/loading" element={<PayLoading />} />
      </Routes>
    </Router>
  );
}

export default App;
