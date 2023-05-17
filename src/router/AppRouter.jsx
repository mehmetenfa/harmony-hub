import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import HarmonyHub from "../pages/HarmonyHub";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <header>
          <Header />
        </header>
        <main className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/harmonyHub" element={<HarmonyHub />} />
          </Routes>
        </main>
        <footer className="flex-none">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
