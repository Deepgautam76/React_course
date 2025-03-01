import React, { useState } from "react";
import { NavLink } from "react-router";

import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [Login, setLogin] = useState("Login");
  const internetStatus=useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo image" />
      </div>
      <div className="nav-items">
        <li>{internetStatus?"online🟢":"offline🔴"}</li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contect">Contect</NavLink>
        </li>
        <li>
          <NavLink to="/grocery">Grocery</NavLink>
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
