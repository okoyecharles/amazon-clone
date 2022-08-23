import * as actionType from '../actionTypes';
const initialState = [];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      return [...state, action.payload.item];
    default:
      return state;
  }
}

export default cart;