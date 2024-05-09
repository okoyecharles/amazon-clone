import cartSlice from "./features/cart/cartSlice";
import userSlice from "./features/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice
  },
});

export default store;