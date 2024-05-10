import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  orders: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    updateOrders: (state, action) => {
      state.orders = action.payload;
    },
    clearProfile: (state) => {
      state.profile = null;
    },
    clearOrders: (state) => {
      state.orders = [];
    },
  },
});

export const { addOrder, clearOrders, clearProfile, setProfile, updateOrders } = userSlice.actions;

export default userSlice.reducer;
