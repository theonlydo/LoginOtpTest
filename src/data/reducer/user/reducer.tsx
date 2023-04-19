import actionTypes from './constant';
import {initialUserState} from './type';

const User = (state = initialUserState, action) => {
  switch (action.type) {
    case actionTypes.SET_PROFILE:
      return {
        ...state,
        ...action.value,
      };
    default:
      return state;
  }
};

export default User;
