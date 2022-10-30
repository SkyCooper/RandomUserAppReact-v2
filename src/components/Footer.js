import React from "react";
import "./Footer.css";
import designSvg from "../assets/design.svg";

const Footer = () => {
  return (
    <div className="footer-div">
      <code> {"< designed by /> "} </code>
      <img
        src={designSvg}
        alt="design"
        style={{ width: "40px", margin: "0  25px 0 10px" }}
      />
      <a
        href="https://github.com/SkyCooper/RandomUserAppReact-v2"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <code className="brand">{"< @CooperSky /> "}</code>
      </a>
    </div>
  );
};

export default Footer;
