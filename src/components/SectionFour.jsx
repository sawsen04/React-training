import React from "react";
import "./style.css";
import CardSectionFour from "./CardSectionFour";
import { FaMobileAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
function SectionFour() {
  return (
    <div className="Section-four-container">
      <h1>Our Medical Specialists</h1>
      <div className="Cards-section-four">
        <CardSectionFour
          image={
            <img
              src="	https://ld-wp73.template-help.com/wordpress/prod_21272/v3/wp-content/uploads/2016/09/team-1.jpg"
              alt=""
              width={310}
              height={350}
            />
          }
          fb={<TiSocialFacebook color="white" size="50" />}
          twitter={<FaTwitter color="white" size="50" />}
          linkedin={<TiSocialLinkedin color="white" size="50" />}
          title={"Dr. Sarah Johnson"}
          iconone={<FaMobileAlt style={{ color: "rgb(22, 176, 200)" }} />}
          icononetitle={"+ 800 123 45 67"}
          iconetwo={<IoMail style={{ color: "rgb(22, 176, 200)" }} />}
          icontwotitle={"info@beclinic.com"}
        />
        <CardSectionFour
          image={
            <img
              src="	https://ld-wp73.template-help.com/wordpress/prod_21272/v3/wp-content/uploads/2016/09/team-2.jpg"
              alt=""
              width={310}
              height={350}
            />
          }
          fb={<TiSocialFacebook color="white" size="50" />}
          twitter={<FaTwitter color="white" size="50" />}
          linkedin={<TiSocialLinkedin color="white" size="50" />}
          title={"Dr. Greg House"}
          iconone={<FaMobileAlt style={{ color: "rgb(22, 176, 200)" }} />}
          icononetitle={"+ 800 123 45 67"}
          iconetwo={<IoMail style={{ color: "rgb(22, 176, 200)" }} />}
          icontwotitle={"info@beclinic.com"}
        />
        <CardSectionFour
          image={
            <img
              src="	https://ld-wp73.template-help.com/wordpress/prod_21272/v3/wp-content/uploads/2016/09/team-3.jpg"
              alt=""
              width={310}
              height={350}
            />
          }
          fb={<TiSocialFacebook color="white" size="50" />}
          twitter={<FaTwitter color="white" size="50" />}
          linkedin={<TiSocialLinkedin color="white" size="50" />}
          title={"Dr. Marta Stewart"}
          iconone={<FaMobileAlt style={{ color: "rgb(22, 176, 200)" }} />}
          icononetitle={"+ 800 123 45 67"}
          iconetwo={<IoMail style={{ color: "rgb(22, 176, 200)" }} />}
          icontwotitle={"info@beclinic.com"}
        />
        <CardSectionFour
          image={
            <img
              src="//ld-wp73.template-help.com/wordpress/prod_21272/v3/wp-content/uploads/2016/09/team-4.jpg"
              alt=""
              width={310}
              height={350}
            />
          }
          fb={<TiSocialFacebook color="white" size="50" />}
          twitter={<FaTwitter color="white" size="50" />}
          linkedin={<TiSocialLinkedin color="white" size="50" />}
          title={"Dr. Night Shyamal"}
          iconone={<FaMobileAlt style={{ color: "rgb(22, 176, 200)" }} />}
          icononetitle={"+ 800 123 45 67"}
          iconetwo={<IoMail style={{ color: "rgb(22, 176, 200)" }} />}
          icontwotitle={"info@beclinic.com"}
        />
      </div>
    </div>
  );
}

export default SectionFour;
