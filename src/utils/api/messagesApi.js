import axios from '../../core/axios';

const messagesApi = {
  getAllByDialogId: (id) => axios.get('/messages?dialog=' + id),
};

export default messagesApi;
