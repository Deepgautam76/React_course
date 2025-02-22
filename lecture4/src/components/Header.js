import { LOGO_URL } from "../utils/constant";

import React, { useState } from "react";
import { NavLink } from "react-router";

const Header = () => {
  const [Login, setLogin] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo image" />
      </div>
      <div className="nav-items">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contect">Contect</NavLink>
        </li>
        <li>Cart</li>
        <button
          className="login-btn"
          onClick={() => {
            Login === "Login" ? setLogin("Logout") : setLogin("Login");
            console.log("Login button clicked: " + Login);
          }}
        >
          {Login}
        </button>
      </div>
    </div>
  );
};

export default Header;
