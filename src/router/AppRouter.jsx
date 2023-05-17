import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Home from '../pages/home/Home'
import HarmonyHub from '../pages/HarmonyHub'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/harmonyHub' element={<HarmonyHub />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;