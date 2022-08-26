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

export const setUser = (user) => {
  return {
    type: actionType.SET_USER,
    payload: {
      user,
    },
  };
};

export const addOrder = (order) => {
  return {
    type: actionType.ADD_ORDER,
    payload: {
      order
    },
  };
};

export const updateUserOrders = (orders) => {
  return {
    type: actionType.UPDATE_USER_ORDERS,
    payload: {
      orders
    },
  }
}

export const deleteUserOrders = () => {
  return {
    type: actionType.DELETE_USER_ORDERS,
  }
}