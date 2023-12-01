import React from "react";
import "./style.css";
import ButtonP from "./Button";
function SectionThree() {
  return (
    <div className="section-three">
      <div className="B-section-three">
        <h1>Get Online Consultation</h1>
        <p>
          In most cases, the initial consultation will be sufficient. In more{" "}
          <br />
          complicated cases, a second, follow-up consultation may be necessary.{" "}
          <br />
          You can contact our center at any time and ask your questions. Our{" "}
          <br />
          professional support representative will answer your questions with
          great <br /> pleasure.
        </p>
        <div className="contact">
          <h2>Take the First Step to Help</h2>
          <h3>(800) 123 4567</h3>
        </div>
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

export default SectionThree;
