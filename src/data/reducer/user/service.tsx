import API from '@app/services/api';
import {setProfile} from './action';

export const postLogin = payload => async dispatch => {
  try {
    const res = await API.postLogin(payload);
    if (res.success) {
      const data = res.data;
      await dispatch(setProfile(data));
    }
    return Promise.resolve(res);
  } catch (err) {
    return Promise.resolve('login error');
  }
};
