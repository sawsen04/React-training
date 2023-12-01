import React from "react";
import "./style.css";
import ButtonP from "./Button";

function HeroSection() {
  return (
    <div className="hero-section">
      <h2>Your Health Is Your Priority</h2>
      <h1>Quality Care</h1>
      <p>
        We will help you to feel better and enjoy every single <br/> day of your life.
      </p>
      <ButtonP
        btnTitle={"LEARN MORE"}
        color={"black"}
        bgcolor={"rgb(250, 232, 12)"}
        letterspacing={3}
        fontweight={700}
      />
    </div>
  );
}

export default HeroSection;
