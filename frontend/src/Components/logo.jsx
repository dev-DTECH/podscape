import React from "react";
import "../App.css";
import Logo from "../images/logo.svg";

const logo = () => {
  return (
    <div>
      <a href="#" className="logo">
        <img src={Logo} alt="logo" className="logo-pic" />
        <h3 className="logo-heading">Podscape</h3>
      </a>
    </div>
  );
};

export default logo;
