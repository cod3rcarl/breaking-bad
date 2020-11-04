import React from "react";
import logo from "../../img/logo.png";
import logo2 from "../../img/logo2.png";

const Header = () => {
  return (
    <header className="center">
      <img className="logo" src={logo} alt="" />
      <img className="logo" src={logo2} alt="" />
    </header>
  );
};

export default Header;
