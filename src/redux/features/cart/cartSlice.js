import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload)
    },
    removeItem: (state, action) => {
      return state.filter((item, index) => index !== action.payload)
    },
    emptyCart: () => {
      return [];
    },
  }
})

export const { addItem, removeItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;