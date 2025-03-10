import React from "react";
import { useSelector } from "react-redux";
import Dishes from "../restaurant_menu/Dishes";

const Cart = () => {
  const cartItem = useSelector((store) => store?.cart?.items);
  return (
    <div className="flex flex-wrap  w-9/12 m-auto  ">
      <Dishes items={cartItem} />
    </div>
  );
};

export default Cart;
