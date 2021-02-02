import * as actionTypes from '../types';

const initialState = {
  items: [],
  currentDialogId: null,
};

const dialogsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_DIALOGS: {
      const { dialogs } = payload;
      return { ...state, items: dialogs };
    }

    case actionTypes.SET_CURRENT_DIALOG: {
      const { id } = payload;
      return { ...state, currentDialogId: id };
    }

    default: {
      return state;
    }
  }
};

export default dialogsReducer;
