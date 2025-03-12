import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";

import { LOGO_URL } from "../../utils/constant";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const [Login, setLogin] = useState("Login");
  const internetStatus = useOnlineStatus();

  /**
   * Use the useSelctor hook for subscribing the store
   * for reding the data from the store
   * */
  const cartItems = useSelector((store) => store?.cart?.items);

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
        <ul className="flex m-2 p-2 flex-wrap items-center ">
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
          <li className="m-2 px-1 cursor-pointer  hover:bg-gray-200 border-0 rounded-md text-xl ">
            <NavLink to="/cart">
              <div className="relative inline-flex items-center rounded-lg cursor-pointer">
                <FiShoppingCart className="text-3xl p-1" />
                <span>Cart</span>
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -left-1 bg-green-400  text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full ">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </NavLink>
          </li>
        </ul>
        <button
          className="flex justify-center items-center m-2 px-3 py-1 rounded-xl bg-blue-500 font-bold hover:bg-blue-600"
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
