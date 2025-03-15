import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Dishes from "../restaurant_menu/Dishes";
import { clearCart, removeItem } from "../../redux_store/cartSlice";
import DummyCart from "./DummyCart";

const Cart = () => {
  const cartItem = useSelector((store) => store?.cart?.items);
  const dipacher = useDispatch();

  return (
    <div className="container w-9/12 m-auto px-4">
      <div className="flex items-center justify-center my-2 cursor-pointer">
        <button
          className="bg-green-500 m-2 px-2 py-1 rounded-xl hover:bg-green-600"
          onClick={() => dipacher(clearCart())}
        >
          Clear
        </button>
        <button
          className="bg-green-500 m-2 px-2 py-1 rounded-xl hover:bg-green-600"
          onClick={() => dipacher(removeItem())}
        >
          Remove
        </button>
      </div>
      <div>
        {cartItem.length === 0 ? <DummyCart /> : <Dishes items={cartItem} />}
      </div>
    </div>
  );
};

export default Cart;
