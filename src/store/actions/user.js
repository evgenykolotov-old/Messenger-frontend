import * as actionTypes from '../types';
import openNotification from '../../utils/openNotification';
import axios from '../../core/axios';

const setUserData = (user) => ({ type: actionTypes.SET_DATA, payload: { data: user } });
const setIsAuth = (bool) => ({ type: actionTypes.SET_IS_AUTH, payload: { bool } });
const setToken = (token) => {
  localStorage.setItem('token', token);
  axios.defaults.headers['token'] = token;
  return { type: actionTypes.SET_TOKEN, payload: { token } };
};

export const fetchUserData = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/user/me');
    dispatch(setUserData(data.result));
  } catch (error) {
    if (error.response.status === 404) {
      dispatch(setIsAuth(false));
      localStorage.removeItem('token');
    }
  }
};

export const fetchUserLogin = (postData) => async (dispatch) => {
  try {
    const { data } = await axios.post('auth/signin', postData);
    const token = data.result;
    openNotification({
      title: 'Отлично!',
      text: 'Авторизация успешна.',
      type: 'success',
    });
    dispatch(setToken(token));
    dispatch(setIsAuth(true));
    return data;
  } catch (error) {
    openNotification({
      title: 'Ошибка при авторизации',
      text: 'Неверный логин или пароль',
      type: 'error',
    });
  }
};

export const fetchUserRegistry = (postData) => async () => {
  await axios.post('/auth/signup', postData);
};

export const fetchFindUsers = (name) => async (dispatch) => {
	await axios.get('/user/find');
}