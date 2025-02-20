import { LOGO_URL } from "../utils/constant";

import React, { useState } from "react";

const Header = () => {
  const [Login, setLogin] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo image" />
      </div>
      <div className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
        <button className="login-btn" onClick={() => {
          Login === "Login" ? setLogin("Logout") : setLogin("Login");
          console.log("Login button clicked: "+Login);
        }}>
          {Login}
        </button>
      </div>
    </div>
  );
};

export default Header;
