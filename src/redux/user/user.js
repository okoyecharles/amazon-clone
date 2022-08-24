import * as actionType from '../actionTypes';
const initialState = null;

const user = (state = initialState, action) => {
  switch (action.type) {

    case actionType.SET_USER:
      return action.payload.user;
    default:
      return state;
  }
}

export default user;