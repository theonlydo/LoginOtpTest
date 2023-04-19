import actionTypes from './constant';

export const setProfile = (value: any) => ({
  type: actionTypes.SET_PROFILE,
  value,
});

export const setLogout = () => ({
  type: actionTypes.SET_LOGOUT,
});
