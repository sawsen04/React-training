import React from "react";
import "./style.css";
import ButtonP from "./Button";
function SectionTwo() {
  return (
    <div className="section-two">
      <div className="B-section-two">
        <h2>We Provide</h2>
        <h1>Total Health Care</h1>
        <p>
          We provide the most full medical services, so every person could have
          the opportunity to receive <br /> qualitative medical help.
          <br />
          <br />
          <br />
          Clinical excellence, diversity, and access to innovative technology
          are all hallmarks of the graduate <br /> medical education experience
          at Careex. Our residents, fellows, and renowned staff share their{" "}
          <br /> experience working at Careex.
        </p>
        <h3>
          We try to do our best to help you and provide with a high-quality
          services.
        </h3>
        <ButtonP
          btnTitle={"GET IN TOUCH"}
          color={"white"}
          bgcolor={"rgb(22, 176, 200)"}
          letterspacing={1}
          fontweight={700}
        />
      </div>
    </div>
  );
}

export default SectionTwo;
