import React from "react";
import logo from "../assets/logo.png"; // same logo as navbar

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "40px 20px",
        marginTop: "40px",
      }}
    >
      <div className="container">
        <div className="row gy-4">
       
          <div className="text-center">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <p style={{ color: "#ccc", margin: 0 }}>📍 GUPS 3B Badi,Ward No 10 <t/> Sharkaj Nahar,Pakki,335901</p>
            <p style={{ color: "#ccc", margin: 0 }}>📞 9784319640</p>
            {/* <p style={{ color: "#ccc", margin: 0 }}>✉️ school@example.com</p> */}
          </div>

        </div>

        {/* Bottom Line */}
        <hr style={{ borderColor: "#444", margin: "20px 0" }} />

        <p className="text-center" style={{ color: "#888", fontSize: "14px" }}>
          © {new Date().getFullYear()}  All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
