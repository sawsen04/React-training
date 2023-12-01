import React from 'react'
import "./style.css";
function CardSectionOne(props) {
  return <div className="card-section-one">
    {props.icon}
    <h1>{props.title}</h1>
    <p>{props.description}</p>
  </div>;
}

export default CardSectionOne