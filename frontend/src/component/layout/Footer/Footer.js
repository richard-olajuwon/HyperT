import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="rightFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <div>
          <img src={playStore} alt="playstore" />
          <img src={appStore} alt="Appstore" />
        </div>
      </div>

      <div className="leftFooter">
        <h1>HyperT.</h1>
        <p>High Quality is our first priority</p>
        <p>Copyrights {new Date().getFullYear()} &copy; Richard</p>
      </div>
    </footer>
  );
};

export default Footer;
