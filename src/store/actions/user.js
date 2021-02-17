import * as actionTypes from '../types';
import userApi from '../../utils/api/userApi';
import openNotification from '../../utils/openNotification';
import axios from '../../core/axios';

const setUserData = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
  return { type: actionTypes.SET_DATA, payload: { data: user } };
};
const setIsAuth = (bool) => ({ type: actionTypes.SET_IS_AUTH, payload: { bool } });
const setToken = (token) => {
  localStorage.setItem('token', token);
  axios.defaults.headers['token'] = token;
  return { type: actionTypes.SET_TOKEN, payload: { token } };
};

export const fetchUserData = () => (dispatch) => {
  userApi.getMe().then(({ data }) => {
    dispatch(setUserData(data));
  });
};

export const fetchUserLogin = (postData) => (dispatch) => {
  return userApi
    .signIn(postData)
    .then(({ data }) => {
      const { token } = data;
      openNotification({
        title: 'Отлично!',
        text: 'Авторизация успешна.',
        type: 'success',
      });
      dispatch(setToken(token));
      dispatch(fetchUserData());
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

export const fetchUserRegistry = (postData) => (dispatch) => {
  return userApi.signUp(postData);
};
