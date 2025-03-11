import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Dishes from "../restaurant_menu/Dishes";
import { clearCart, removeItem } from "../../redux_store/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store?.cart?.items);
  const dipacher = useDispatch();

  return (
    <div className="w-10/12 m-auto">
      <div className="flex items-center justify-center my-2">
        <button
          className="bg-green-500 m-2 px-2 py-1 rounded-xl"
          onClick={() => dipacher(clearCart)}
        >
          Clear cart
        </button>
        <button
          className="bg-green-500 m-2 px-2 py-1 rounded-xl"
          onClick={() => dipacher(removeItem)}
        >
          Remove Item
        </button>
      </div>
      <div>
        {cartItem.length === 0 ? (
          <div className="font-semibold text-2xl">Your card is empty ...</div>
        ) : (
          <Dishes items={cartItem} />
        )}
      </div>
    </div>
  );
};

export default Cart;
