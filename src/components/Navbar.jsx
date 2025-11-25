import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";  

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black py-2 shadow-sm sticky-top">
      <div className="container-fluid">
         <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src={logo}
            alt="School Logo"
            style={{
              height: "45px",
              width: "45px",
              objectFit: "contain",
              borderRadius:"50%",
            }}
          />
          <span className="fw-bold fs-5 d-none d-md-inline">School Name</span>
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

            <li className="nav-item">
              <NavLink className="nav-link px-3" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link px-3" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link px-3" to="/gallery">
                Gallery
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link px-3" to="/contact">
                Contact
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
