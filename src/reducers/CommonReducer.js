import {
  LOADING,
  ERRORS,
  GET_CONFIG,
  MENU_STATUS,
  REFRESHING,
  LOGIN_SUCCESS,
  UPLOAD_SUCCESS
} from "../actions/types";
const initialState = {
  loading: false,
  refreshing: false,
  menuFlag: false,
  user: {},
  errors: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      if (payload) return { ...state, loading: payload, errors: [] };
      else return { ...state, loading: payload };
    case REFRESHING:
      return { ...state, refreshing: payload };
    case MENU_STATUS:
      return { ...state, menuFlag: payload };
    case ERRORS:
      return { ...state, errors: payload };
    case LOGIN_SUCCESS:
      return { ...state, user: payload };
    case GET_CONFIG:
      return {
        ...state
      };
    default:
      return state;
  }
};
