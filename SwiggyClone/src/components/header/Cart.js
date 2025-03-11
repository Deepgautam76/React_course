import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Dishes from "../restaurant_menu/Dishes";
import { clearCart } from "../../redux_store/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store?.cart?.items);
  const dipacher = useDispatch();

  return (
    <div className="w-10/12 m-auto border-2">
      <div className="flex items-center justify-center border-2 my-2">
        <button
          className="bg-green-500 m-2 px-2 py-1 rounded-xl"
          onClick={() => dipacher(clearCart)}
        >
          Clear cart
        </button>
      </div>
      <div>
        <Dishes items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
