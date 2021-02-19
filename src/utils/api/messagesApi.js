import axios from '../../core/axios';

const messagesApi = {
  getAllByDialogId: (id) => axios.get('/messages?dialog=' + id),
  send: (text, dialogId) => axios.post('/messages', { text, dialogId }),
};

export default messagesApi;
