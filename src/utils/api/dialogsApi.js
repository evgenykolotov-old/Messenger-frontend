import axios from '../../core/axios';

const dialogsApi = {
  getAll: () => axios.get('/dialogs'),
};

export default dialogsApi;
