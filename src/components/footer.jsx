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
            <p style={{ color: "#ccc", margin: 0 }}>📍 ABC Road, Mumbai</p>
            <p style={{ color: "#ccc", margin: 0 }}>📞 9876543210</p>
            <p style={{ color: "#ccc", margin: 0 }}>✉️ school@example.com</p>
          </div>

        </div>

        {/* Bottom Line */}
        <hr style={{ borderColor: "#444", margin: "20px 0" }} />

        <p className="text-center" style={{ color: "#888", fontSize: "14px" }}>
          © {new Date().getFullYear()} ABC Public School. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
