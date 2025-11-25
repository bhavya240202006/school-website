import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Glowing Animation Background */}
      <div className="pulse-circle"></div>

      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        style={{
          height: "120px",
          width: "120px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "20px",
          animation: "fadeIn 2s ease",
        }}
      />

      {/* School Name */}
      <h1 style={{ animation: "slideDown 2s ease", fontFamily: "serif" }}>
        ABC Public School
      </h1>

      {/* Enter button */}
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "40px",
          padding: "12px 30px",
          fontSize: "18px",
          backgroundColor: "white",
          color: "black",
          borderRadius: "50px",
          border: "none",
          cursor: "pointer",
          animation: "fadeIn 3s ease",
        }}
      >
        Enter Website →
      </button>
    </div>
  );
}
