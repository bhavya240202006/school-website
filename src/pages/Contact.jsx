import React from "react";
import Card from "../components/card";

import teacher1 from "../assets/teacher1.png";
import teacher2 from "../assets/teacher2.png";
import teacher3 from "../assets/teacher.png";

export default function Teachers() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",   // vertical stack
        alignItems: "center",      // center horizontally
        gap: "40px",               // spacing between cards
        marginTop: "40px",
      }}
    >
      <Card
        image={teacher1}
        title="Mr. Sushil Kumar Chhabra"
        text="Mathematics teacher with 10 years of experience."
      />

      <Card
        image={teacher2}
        title="Mrs. Manju Bala"
        text="Science teacher passionate about experiments."
      />

      {/* <Card
        image={teacher3}
        title="Mrs. Iyer"
        text="English teacher who loves literature."
      /> */}
    </div>
  );
}
