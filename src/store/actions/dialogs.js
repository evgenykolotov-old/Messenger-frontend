import * as actionTypes from '../types';
import dialogsApi from '../../utils/api/dialogsApi';

const setDialogs = (dialogs) => ({ type: actionTypes.SET_DIALOGS, payload: { dialogs } });
export const setCurrentDialogId = (id) => ({
  type: actionTypes.SET_CURRENT_DIALOG,
  payload: { id },
});

export const fetchDialogs = () => (dispatch) => {
  dialogsApi.getAll().then(({ data }) => dispatch(setDialogs(data)));
};
