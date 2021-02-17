import * as actionTypes from '../types';

const initialState = {
  data: JSON.parse(localStorage.getItem('user')) || {},
  token: localStorage.getItem('token') || null,
  isAuth: Boolean(localStorage.getItem('token')),
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_DATA: {
      const { data } = payload;
      return { ...state, data, isAuth: true };
    }

    case actionTypes.SET_TOKEN: {
      const { token } = payload;
      return { ...state, token, isAuth: true };
    }

    case actionTypes.SET_IS_AUTH: {
      const { bool } = payload;
      return { ...state, isAuth: bool };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
