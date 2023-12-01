import React from "react";
import "./style.css";
function ButtonP(props) {
  return (
    <div>
      <button className="btn" style={{color : props.color, backgroundColor: props.bgcolor,letterSpacing: props.letterspacing, fontWeight: props.fontweight}}>{props.btnTitle}</button>
    </div>
  );
}

export default ButtonP;
