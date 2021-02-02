import * as actionTypes from '../types';

const initialState = {
  items: [],
};

const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_MESSAGES: {
      const { messages } = payload;
      return { ...state, items: messages };
    }

    default: {
      return state;
    }
  }
};

export default messagesReducer;
