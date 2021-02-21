import * as actionTypes from '../types';
import axios from '../../core/axios';

const setDialogs = (dialogs) => ({ type: actionTypes.SET_DIALOGS, payload: { dialogs } });
export const setCurrentDialogId = (id) => ({
  type: actionTypes.SET_CURRENT_DIALOG,
  payload: { id },
});

export const fetchDialogs = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/dialogs');
    dispatch(setDialogs(data));
  } catch (error) {
    //TODO: Ошибка запроса диалогов;
  }
};
