import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logosmall.png";  

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black py-2 shadow-sm sticky-top">
      <div className="container-fluid">
         <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src={logo}
            alt="School Logo"
            style={{
              height: "10%%",
              width: "10%",
              objectFit: "contain",
              borderRadius:"50%",
            }}
          />
          <span
          className="fw fs-3 d-none d-md-inline"
          style={{ fontFamily: "Pragati Narrow"
                   
           }}
          >
          राजकीय उच्च प्राथमिक विद्यालय 3-बी बाड़ी
          </span>

        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
 
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">

            <li className="nav-item" >
              <NavLink className="nav-link px-3" to="/" style={{fontFamily: "Roboto"}}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link px-3" to="/about" style={{fontFamily: "Roboto"}}>
                About
              </NavLink>
            </li>

            <li className="nav-item" style={{fontFamily: "Roboto"}}>
              <NavLink className="nav-link px-3" to="/gallery" style={{fontFamily: "Roboto"}}>
                Gallery
              </NavLink>
            </li>

            <li className="nav-item" style={{fontFamily: "Roboto"}}>
              <NavLink className="nav-link px-3" to="/contact" style={{fontFamily: "Roboto"}}>
                Contact
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
