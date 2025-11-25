import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/footer.jsx";

import Home from "./Home";
import About from "./About";
import Admission from "./Admission";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Intro from "./Intro";

export default function App() {
  return (
    <>
//hlloo
      <Routes>
 
        <Route path="/intro" element={<Intro />} />
 
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />

   
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
 
 
        <Route
          path="/gallery"
          element={
            <>
              <Navbar />
              <Gallery />
              <Footer />
            </>
          }
        />
 
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
 
        <Route path="*" element={<Navigate to="/intro" />} />

      </Routes>
    </>
  );
}
