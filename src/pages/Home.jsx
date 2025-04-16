import React from "react";
import Header from "../components/Header";
import SobreOBot from "../components/SobreOBot";
import Footer from "../components/Footer";
import FeedbackList from "../components/FeedbackList";

export default function Home() {
  return (
    <>
      <Header />
      <SobreOBot />
      <FeedbackList />
      <Footer />
    </>
  );
}
