import * as actionTypes from '../types';

const initialState = {
  data: null,
  token: localStorage.getItem('token'),
  isAuth: Boolean(localStorage.getItem('token')),
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_DATA: {
      const { data } = payload;
      return { ...state, data, isAuth: true, token: localStorage.getItem('token') };
    }

    case actionTypes.SET_AUTH: {
      const { isAuth } = payload;
      return { ...state, isAuth };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
