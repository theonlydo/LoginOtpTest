import API from '@app/services/api';
import {setProfile} from './action';

export const postLogin = () => async dispatch => {
  try {
    const res = await API.postLogin({});
    const data = transformUserData(res.data);
    await dispatch(setProfile(data));

    return Promise.resolve(res);
  } catch (err) {
    return Promise.resolve('login error');
  }
};
