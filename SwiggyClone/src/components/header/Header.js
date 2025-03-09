import React, { useContext, useState } from "react";
import { NavLink } from "react-router";

import { LOGO_URL } from "../../utils/constant";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const [Login, setLogin] = useState("Login");
  const internetStatus = useOnlineStatus();

  return (
    <div className="container flex flex-wrap border-b-1 border-gray-500 justify-between items-center border-1 rounded-2xl m-auto">
      <div className="flex items-center justify-center w-20  m-1 px-2 py-2 overflow-hidden">
        <NavLink to="/">
          <img
            className="flex justify-center items-center rounded-3xl hover:scale-105"
            src={LOGO_URL}
            alt="Logo image"
          />
        </NavLink>
      </div>
      <div className="flex items-center justify-center flex-wrap">
        <ul className="flex m-2 p-1 flex-wrap">
          <li className="m-2 px-1 cursor-pointer hover:bg-gray-200 border-0 rounded-md">
            {internetStatus ? "online🟢" : "offline🔴"}
          </li>
          <li className="m-2 px-1 cursor-pointer  hover:bg-gray-200 border-0 rounded-md">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="m-2 px-1 cursor-pointer  hover:bg-gray-200 border-0 rounded-md">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="m-2 px-1 cursor-pointer  hover:bg-gray-200 border-0 rounded-md">
            <NavLink to="/contect">Contect</NavLink>
          </li>
          <li className="m-2 px-1 cursor-pointer  hover:bg-gray-200 border-0 rounded-md">
            <NavLink to="/grocery">Grocery</NavLink>
          </li>
          <li className="m-2 px-1 cursor-pointer  hover:bg-gray-200 border-0 rounded-md ">
            Cart
          </li>
        </ul>
        <button
          className="flex justify-center items-center m-2 px-2 rounded-xl bg-blue-500 font-bold"
          onClick={() => {
            Login === "Login" ? setLogin("Logout") : setLogin("Login");
          }}
        >
          {Login}
        </button>
      </div>
    </div>
  );
};

export default Header;
