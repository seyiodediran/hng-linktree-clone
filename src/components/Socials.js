import React from "react";
import slack from "../assets/icons/slack.svg";
import github from "../assets/icons/github.svg";

const Socials = () => {
  return (
    <div className="socials">
      <ul>
        <li>
          <img src={slack} />
        </li>
        <li>
          <img src={github} />
        </li>
      </ul>
    </div>
  );
};

export default Socials;
