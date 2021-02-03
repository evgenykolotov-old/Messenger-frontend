import * as actionTypes from '../types';

const initialState = {
  items: null,
  isLoading: false,
};

const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_MESSAGES: {
      const { messages } = payload;
      return { ...state, items: messages, isLoading: false };
    }

    case actionTypes.SET_LOADING: {
      const { bool } = payload;
      return { ...state, isLoading: bool };
    }

    default: {
      return state;
    }
  }
};

export default messagesReducer;
