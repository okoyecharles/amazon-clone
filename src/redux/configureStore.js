import cart from "./cart/cart";
import user from "./user/user";
import userInfo from "./userInfo/userInfo";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  cart,
  user,
  userInfo,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;