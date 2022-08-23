import * as actionType from '../actionTypes';
const initialState = [];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      return [...state, action.payload.item];
    case actionType.REMOVE_FROM_CART:
      return state.filter((item, itemIndex) => itemIndex !== action.payload.id);
    case actionType.EMPTY_CART:
      return [];
    default:
      return state;
  }
}

export default cart;