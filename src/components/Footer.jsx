import React from "react";
import "./Footer.css";
import aagmanlogo from "../../public/aagmanLogo.png";
import {} from "react-icons/pi";
import {
  PiLinkedinLogoThin,
  PiInstagramLogoThin,
  PiTwitterLogoThin,
} from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <img src={aagmanlogo} alt="" />
        <div className="footer-nav">
          <div className="footer-nav-list">
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Blogs</li>
            <li>FAQ</li>
            <li>uPVC Windows</li>
            <li>Brochure</li>
          </div>
          <div className="social">
            <p>FOLLOW ALONG :</p>
            <PiLinkedinLogoThin className="icon" />
            <PiInstagramLogoThin className="icon" />
            <PiTwitterLogoThin className="icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
