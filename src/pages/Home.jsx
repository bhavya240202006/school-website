import React from "react";
import schoolBanner from "../assets/home.png"; 
import Gate1 from "../assets/maingate2.png";
import Gate2 from "../assets/mainGate.png";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        overflow: "hidden",
        borderRadius: "10px",
      }}
    >
   
      <img
        src={Gate1}
        alt="Gate1"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(60%)",
        }}
      />
 
      <div
        className="quote-box"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "off-white",
          textAlign: "center",
          padding: "20px",
          animation: "fadeUp 2s ease-out",
          width: "90%",
        }}
      >
        <h2
          style={{
          fontfamily: "Pragati Narrow",
          fontWeight: "bold",
          fontSize: "28px",
          lineHeight: "1.5",
          background: "linear-gradient(to right, #8e6d87ff, #efc2c2ff)",
          WebkitBackgroundClip: "text",
         color: "transparent",
          }}
        >
          विद्यां ददाति विनयं, विनयाद् याति पात्रताम्। <br />
          पात्रत्वात् धनमाप्नोति, धनात् धर्मं ततः सुखम्॥
        </h2>
      </div>
    </div>
  );
}
