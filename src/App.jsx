import React from "react";
import "./App.css";
import Header from "./components/Header";
import SobreOBot from "./components/SobreOBot";
import Footer from "./components/Footer";
import FeedbackList from "./components/FeedbackList";
import { Wallet } from "@mercadopago/sdk-react";

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
