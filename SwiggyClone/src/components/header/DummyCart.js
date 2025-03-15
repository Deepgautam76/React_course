import React from "react";
import { NavLink } from "react-router";

const DummyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[570px]  bg-gray-300 rounded-md">
      <div className="flex flex-col items-center p-6 bg-gray-300 rounded-lg shadow-lg">
        <img
          src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          alt="Cart Illustration"
          className="w-24 h-24 mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-800">
          Missing Cart items?
        </h2>
        <p className="text-gray-600 text-center mt-1 mb-4">
         Currently your card empty, add items
        </p>
        <button className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
          <NavLink to="/">Login</NavLink>
        </button>
      </div>
    </div>
  );
};

export default DummyCart;
