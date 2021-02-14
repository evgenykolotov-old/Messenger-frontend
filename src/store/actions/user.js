import * as actionTypes from '../types';
import userApi from '../../utils/api/userApi';
import openNotification from '../../utils/openNotification';

const setUserData = (data) => ({ type: actionTypes.SET_DATA, payload: { data } });
// const setAuth = (bool) => ({ type: actionTypes.SET_AUTH, payload: { bool } });

const fetchUserData = () => (dispatch) => {
  userApi.getMe().then(({ data }) => {
    dispatch(setUserData(data));
  });
};

export const fetchUserLogin = (postData) => (dispatch) => {
  return userApi
    .login(postData)
    .then(({ data }) => {
      const { token } = data;
      openNotification({
        title: 'Отлично!',
        text: 'Авторизация успешна.',
        type: 'success',
      });
      localStorage.setItem('token', token);
      dispatch(fetchUserData());
      // dispatch(setAuth(true));
      return data;
    })
    .catch(() => {
      openNotification({
        title: 'Ошибка при авторизации',
        text: 'Неверный логин или пароль',
        type: 'error',
      });
    });
};
