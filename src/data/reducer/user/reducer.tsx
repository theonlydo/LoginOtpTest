import actionTypes from './constant';
import {initialUserState} from './type';

const User = (state = initialUserState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_PROFILE:
      return {
        ...state,
        ...action.value,
      };

    case actionTypes.SET_LOGOUT:
      return {
        image: '',
        name: '',
        email: '',
        accessToken: '',
      };

    default:
      return state;
  }
};

export default User;
