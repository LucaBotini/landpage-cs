import React from "react";
import "./App.css";
import Header from "./components/Header";
import SobreOBot from "./components/SobreOBot";
import Footer from "./components/Footer";
import FeedbackList from "./components/FeedbackList";
function App() {
  return (
    <>
      <Header />
      <SobreOBot />
      <FeedbackList />
      <Footer />
    </>
  );
}

export default App;
