import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>HyperT.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights {new Date().getFullYear()} &copy; Richard</p>
      </div>

      <div className="rightFooter">
        <h4>Quick Links</h4>
        <a href="http://google.com">About Us</a>
        <a href="http://google.com">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
