import React from "react";
import "./style.css";
import CardSectionOne from "./CardSectionOne";
import { FaBook } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { MdOutlineWoman } from "react-icons/md";
import { FaChildReaching } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import ButtonP from "./Button";
function SectionOne() {
  return (
    <div className="Section-One-Container">
      <div className="cards">
        <CardSectionOne
          icon={<FaBook color="rgb(22, 176, 200)" size={55} />}
          title={"Consultation"}
          description={"by professionals"}
        />
        <CardSectionOne
          icon={<FaRegHeart color="rgb(22, 176, 200)" size={55} />}
          title={"Diagnosis"}
          description={"Accurate approach"}
        />
        <CardSectionOne
          icon={<FaHeartbeat color="rgb(22, 176, 200)" size={55} />}
          title={"Treatment"}
          description={"Individual approach"}
        />
        <CardSectionOne
          icon={<MdOutlineWoman color="rgb(22, 176, 200)" size={55} />}
          title={"Preagnancy Care"}
          description={"Safety and Carefully"}
        />
        <CardSectionOne
          icon={<FaChildReaching color="rgb(22, 176, 200)" size={55} />}
          title={"Pediatric"}
          description={"High-quality kids care"}
        />
        <CardSectionOne
          icon={<FaMobileAlt color="rgb(22, 176, 200)" size={55} />}
          title={"Online Help"}
          description={"24/7"}
        />
      </div>
      <div className="cart">
        <div className="border-cart">
          <h2>Check Our</h2>
          <h1>Weekly Timetable</h1>
          <p>
            You can make an appointment , select the <br /> convient time and
            choose the appropriate <br /> doctor here.
          </p>
          <div className="elt-cart">
            <p>Monday - Friday</p>
            <h3>8:00 - 18:00</h3>
          </div>
          <div className="elt-cart">
            <p>Saturday</p>
            <h3>8:00 - 18:00</h3>
          </div>
          <div className="elt-cart-last">
            <p>Sunday</p>
            <h3>8:00 - 18:00</h3>
          </div>
          <ButtonP
            btnTitle={"VISIT US"}
            color={"white"}
            bgcolor={"rgb(28, 55, 76)"}
            letterspacing={1}
            fontweight={700}
          />
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
