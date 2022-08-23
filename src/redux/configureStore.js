import cart from "./cart/cart";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  cart,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;