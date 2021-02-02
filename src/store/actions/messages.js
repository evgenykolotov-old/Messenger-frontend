import * as actionTypes from '../types';
import messagesApi from '../../utils/api/messagesApi';

const setMessages = (messages) => ({ type: actionTypes.SET_MESSAGES, payload: { messages } });

export const fetchMessages = (dialogId) => (dispatch) => {
  messagesApi.getAllByDialogId(dialogId).then(({ data }) => dispatch(setMessages(data)));
};
