import { configureStrore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStrore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
