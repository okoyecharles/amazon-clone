import * as actionType from "../actionTypes";
const initialState = {};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_ORDER:
      return !state.orders
        ? { ...state, orders: [action.payload.order] }
        : { ...state, orders: [action.payload.order, ...state.orders] };
    default:
      return state;
  }
};

export default userInfo;
