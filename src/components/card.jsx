import React from "react";

export default function Card({ image, title, text }) {
  return (
    <div
      className="card teacher-card"
      style={{ width: "18rem", borderRadius: "10px", overflow: "hidden" }}
    >
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ height: "220px", objectFit: "cover" }}
      />

      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}
