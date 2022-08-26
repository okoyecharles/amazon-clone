import * as actionType from "../actionTypes";
const initialState = {};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_ORDER:
      return !state.orders
        ? { ...state, orders: [action.payload.order] }
        : { ...state, orders: [action.payload.order, ...state.orders] };
    case actionType.UPDATE_USER_ORDERS:
      return { ...state, orders: action.payload.orders };
    case actionType.DELETE_USER_ORDERS:
      return { ...state, orders: [] };
    default:
      return state;
  }
};

export default userInfo;
