import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/mainGate.png";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
  
      <h1
        style={{
          fontFamily: "'Pragati Narrow', serif",
          fontSize: "48px",
          color: "white",
          textShadow: "0 0 12px rgba(0,0,0,0.7)",
          animation: "fadeSlideDown 1.6s ease-out",
        }}
      >
        राजकीय उच्च प्राथमिक विद्यालय 3-बी बाड़ी
      </h1>
 
      <button
        onClick={() => navigate("/home")}
        style={{
          marginTop: "40px",
          padding: "14px 36px",
          fontSize: "18px",
          backgroundColor: "white",
          color: "#222",
          borderRadius: "50px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          transition: "0.3s",
          animation: "fadeIn 2.2s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#f2f2f2";
          e.target.style.boxShadow = "0 6px 16px rgba(0,0,0,0.3)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "white";
          e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
        }}
      >
        Enter Website →
      </button>

 
      <style>
        {`
          @keyframes fadeSlideDown {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
