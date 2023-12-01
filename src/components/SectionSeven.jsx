import React from "react";
import "./style.css";
import ButtonP from "./Button";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
function SectionSeven() {
  return (
    <div className="Section-seven-container">
      <div className="info-section-seven">
        <h1>Make an Appointment</h1>
        <div className="contact-detail">
          <label htmlFor="" className="details">
            Name*
          </label>
          <input type="text" className="label" />
        </div>
        <div className="contact-detail">
          <label htmlFor="" className="details">
            Email*
          </label>
          <input type="text" className="label" />
        </div>
        <div className="contact-detail-last">
          <label htmlFor="" className="details">
            Message
          </label>
          <input type="text" className="label" />
        </div>
        <ButtonP
          btnTitle={"SEND MESSAGE"}
          color={"white"}
          bgcolor={"rgb(22, 176, 200)"}
          letterspacing={1}
          fontweight={700}
        />
        <div className="icons-section-seven">
          <TiSocialLinkedin color="rgb(22, 176, 200)" size={20} />
          <TiSocialTwitter color="rgb(22, 176, 200)" size={20} />
          <FaFacebookF color="rgb(22, 176, 200)" size={20} />
          <FaInstagram color="rgb(22, 176, 200)" size={20} />
        </div>
      </div>
    </div>
  );
}

export default SectionSeven;
