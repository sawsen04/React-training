import React from 'react'
import "./style.css";
function CardSectionSix(props) {
  return (
    <div className='cart-section-six'>
      {props.image}
      <div className='date-sec-six'>
        {props.icon}
        <h3>{props.date}</h3>
      </div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default CardSectionSix