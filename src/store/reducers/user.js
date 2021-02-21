import * as actionTypes from '../types';

const initialState = {
  data: {},
  token: localStorage.getItem('token') || null,
  isAuth: Boolean(localStorage.getItem('token')),
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_DATA: {
      const { data } = payload;
      return { ...state, data };
    }

    case actionTypes.SET_TOKEN: {
      const { token } = payload;
      return { ...state, token };
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
