import React, { useState } from "react";
import { NavLink } from "react-router";

import { LOGO_URL } from "../../utils/constant";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const [Login, setLogin] = useState("Login");
  const internetStatus = useOnlineStatus();

  return (
    <div className="flex flex-wrap border-b-1 border-gray-500 justify-between items-center ">
      <div className="flex items-center justify-center w-1/12  m-2 p-3">
        <img
          className="flex justify-center items-center border-1 rounded-xl w-16"
          src={LOGO_URL}
          alt="Logo image"
        />
      </div>
      <div className="flex items-center justify-center flex-wrap" >
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
