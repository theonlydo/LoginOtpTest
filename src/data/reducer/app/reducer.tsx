import actionTypes from './constant';
import {initialAppState} from './type';

const User = (state = initialAppState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.value,
      };
    default:
      return state;
  }
};

export default User;
