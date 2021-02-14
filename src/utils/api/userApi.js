import axios from '../../core/axios';

const userApi = {
  login: (postData) => axios.post('user/login', postData),
  getMe: () => axios.get('/user/me'),
};

export default userApi;
