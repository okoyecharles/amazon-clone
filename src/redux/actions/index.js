import * as actionType from '../actionTypes';

export const addToCart = (item) => {
  return {
    type: actionType.ADD_TO_CART,
    payload: {
      item,
    }
  }
}