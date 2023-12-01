import React from "react";
import "./style.css";
function CardSectionFour(props) {
  return (
    <div className="Card-section-four">
      {props.image}
      <div className="hiden-elts">
        {props.fb}
        {props.twitter}
        {props.linkedin}
      </div>
      <div className="info-card-four">
        <h2>{props.title}</h2>
        <div className="eltone">
          {props.iconone}
          <h3>{props.icononetitle}</h3>
        </div>
        <div className="elttwo">
          {props.iconetwo}
          <h4>{props.icontwotitle}</h4>
        </div>
      </div>
    </div>
  );
}

export default CardSectionFour;
