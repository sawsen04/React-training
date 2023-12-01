import React from "react";
import "./style.css";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-details">
        <div className="footer-details-border">
          <div className="footer-one">
            <img
              src="https://ld-wp73.template-help.com/wordpress/prod_21272/v3/wp-content/uploads/2019/11/logo-footer.png"
              alt=""
            />
            <p>
              Careex is a midecal center, which <br /> provides a wide range of
              medical <br />
              services for adults and kids. We take <br /> care about your
              health in a <br />
              professional way!
            </p>
          </div>
          <div className="footer-two">
            <h1>Head Office</h1>
            <p>
              4096 N Highland St, Arlington <br /> VA 32101, USA
            </p>
            <h5>info@demolink.com</h5>
            <h3>800 1234 56 78</h3>
            <h4>
              Mon-Thu: 9:30 – 21:00 <br /> Fri: 6:00 – 21:00 <br /> Sat: 10:00 –
              15:00
            </h4>
          </div>
          <div className="footer-three">
            <h1>Latest Posts</h1>
            <h5>
              Sed elementum sodales <br /> March 25, 2023
            </h5>
            <h3>
              Basic dental care <br /> March 22, 2023
            </h3>
            <h4>
              First signs of Gum Disease <br /> March 21, 2023
            </h4>
          </div>
          <div className="footer-four">
            <h1>Quick Links</h1>
            <p>Home</p>
            <h3>About</h3>
            <h4>Services</h4>
            <h5>Doctors</h5>
            <h6>Contacts</h6>
          </div>
        </div>
      </div>
      <div id="footer">
        <span className="zemez">Zemez</span>
        <span>©.All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
