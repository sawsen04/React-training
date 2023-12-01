import React from "react";
import "./style.css";
function NavBar() {
  return (
    <div className="navbar">
      <div className="image">
        <img
          src="https://ld-wp73.template-help.com/wordpress/prod_21272/v3/wp-content/uploads/2019/11/logo.png"
          alt=""
        />
      </div>
      <ul className="list">
        <li className="elt-list">HOME</li>
        <li className="elts-list">ABOUT</li>
        <li className="elts-list">DOCTORS</li>
        <li className="elts-list">SERVICES</li>
        <li className="elts-list">CONTACTS</li>
      </ul>
    </div>
  );
}

export default NavBar;
