import * as actionTypes from '../types';
import axios from '../../core/axios';

const setMessages = (messages) => ({
  type: actionTypes.SET_MESSAGES,
  payload: { messages },
});
const setLoading = (bool) => ({ type: actionTypes.SET_LOADING, payload: { bool } });

export const fetchMessages = (dialogId) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get(`/messages?dialog=${dialogId}`);
    dispatch(setMessages(data.result));
  } catch (error) {
    dispatch(setLoading(false));
  }
};

export const addMessage = (message) => (dispatch, getState) => {
  const { currentDialogId } = getState().dialogs;

  if (currentDialogId === message.dialog._id) {
    dispatch({
      type: actionTypes.ADD_MESSAGE,
      payload: { message },
    });
  }
};

export const fetchSendMessage = ({ text, dialogId }) => async () => {
  try {
    await axios.post('/messages', { text, dialogId });
  } catch (error) {
    //TODO: Сделать обработку ошибки отправки сообщения;
    console.log('Ошибка отправки сообщения');
  }
};
