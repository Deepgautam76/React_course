import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Dishes from "../restaurant_menu/Dishes";
import { clearCart } from "../../redux_store/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store?.cart?.items);
  const dipacher = useDispatch();

  return (
    <div className="w-6/12 m-auto">
      <div>
        <button
          className="bg-green-500 m-2 p-2"
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
