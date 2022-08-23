import * as actionType from "../actionTypes";

export const addToCart = (item) => {
  return {
    type: actionType.ADD_TO_CART,
    payload: {
      item,
    },
  };
};

export const removeFromCart = (id) => {
  return {
    type: actionType.REMOVE_FROM_CART,
    payload: {
      id,
    },
  };
};

export const emptyCart = () => {
  return {
    type: actionType.EMPTY_CART,
  };
};
