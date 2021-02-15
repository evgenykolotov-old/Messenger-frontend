import axios from '../../core/axios';

const userApi = {
  signIn: (postData) => axios.post('auth/signin', postData),
  signUp: (postData) => axios.post('/auth/signup', postData),
  verifyHash: (hash) => axios.get('/user/verify?hash=' + hash),
  getMe: () => axios.get('/user/me'),
};

export default userApi;
