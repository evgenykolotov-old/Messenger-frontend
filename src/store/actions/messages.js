import * as actionTypes from '../types';
import messagesApi from '../../utils/api/messagesApi';

const setMessages = (messages) => ({
  type: actionTypes.SET_MESSAGES,
  payload: { messages },
});
const setLoading = (bool) => ({ type: actionTypes.SET_LOADING, payload: { bool } });

export const fetchMessages = (dialogId) => (dispatch) => {
  dispatch(setLoading(true));
  messagesApi
    .getAllByDialogId(dialogId)
    .then(({ data }) => dispatch(setMessages(data)))
    .catch(() => dispatch(setLoading(false)));
};

export const addMessage = (message) => (dispatch, getState) => {
  const {
    dialogs: { currentDialogId },
  } = getState();

  if (currentDialogId === message.dialog._id) {
    dispatch({
      type: actionTypes.ADD_MESSAGE,
      payload: { message },
    });
  }
};

export const fetchSendMessage = ({ text, dialogId }) => () => {
  return messagesApi.send(text, dialogId);
};
