import React from "react";
import "./style.css";
import CardSectionSix from "./CardSectionSix";
import { FaRegCalendar } from "react-icons/fa";
function SectionSix() {
  return (
    <div className="Section-six-container">
      <h2>Latest News</h2>
      <div className="cards-Section-Six">
        <CardSectionSix
          image={
            <img
              src="https://ld-wp73.template-help.com/wordpress/prod_21272/v3/wp-content/uploads/2016/07/Depositphotos_35850883_original-370x200.jpg"
              alt=""
            />
          }
          icon={<FaRegCalendar color="rgb(22, 176, 200)" />}
          date={"March 25, 2023"}
          title={"Sed elementum sodales"}
          description={
            "Americans oftentimes ignore some basic, daily routines of oral hygiene, that need to be upheld. Practicing healthy habits..."
          }
        />
        <CardSectionSix
          image={
            <img
              src="https://ld-wp73.template-help.com/wordpress/prod_21272/v3/wp-content/uploads/2018/01/img02-370x200.jpg"
              alt=""
            />
          }
          icon={<FaRegCalendar color="rgb(22, 176, 200)" />}
          date={"March 22, 2023"}
          title={"Basic dental care"}
          description={
            "Bad breath is a deal breaker both in business and in personal life of ours. And while breath..."
          }
        />
        <CardSectionSix
          image={
            <img
              src="https://ld-wp73.template-help.com/wordpress/prod_21272/v3/wp-content/uploads/2017/09/Depositphotos_149455944_original-370x200.jpg"
              alt=""
            />
          }
          icon={<FaRegCalendar color="rgb(22, 176, 200)" />}
          date={"March 21, 2023"}
          title={"First signs of Gum Disease"}
          description={
            "Americans oftentimes ignore some basic, daily routines of oral hygiene, that need to be upheld. Practicing healthy habits..."
          }
        />
      </div>
    </div>
  );
}

export default SectionSix;
