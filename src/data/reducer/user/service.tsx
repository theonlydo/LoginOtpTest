import API from '@app/services/api';
import {setProfile} from './action';
import {setLoading} from '../app/action';
import {transformUserData} from './type';

export const postLogin = payload => async dispatch => {
  try {
    dispatch(setLoading(true));
    const res = await API.postLogin(payload);
    const data = transformUserData(res);
    await dispatch(setProfile(data));
    dispatch(setLoading(false));

    return Promise.resolve(res);
  } catch (err) {
    dispatch(setLoading(false));
    return Promise.resolve('login error');
  }
};
