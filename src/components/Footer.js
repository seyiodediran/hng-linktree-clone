import React from "react";
import zuri from "../assets/icons/Zuri.Internship_Logo.svg";
import i4g from "../assets/icons/I4G.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="zuri">
          <img src={zuri} />
        </div>
        <div className="text">HNG Internship 9 Frontend Task</div>
        <div className="i4g">
          <img src={i4g} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
