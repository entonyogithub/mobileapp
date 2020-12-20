import {
  GET_AUDIOS,
  DELETE_AUDIOS,
  GET_LISTENINGS,
  UPLOAD_SUCCESS
} from "../actions/types";
const initialState = {
  uploaded: false,
  audios: [],
  listenings: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_AUDIOS:
      return {
        ...state,
        audios: payload,
        uploaded: false
      };
    case GET_LISTENINGS:
      return {
        ...state,
        listenings: payload
      };
    case DELETE_AUDIOS:
      const audios = state.audios.filter(x => x.uri != payload);
      return {
        ...state,
        audios: audios
      };
    case UPLOAD_SUCCESS:
      return { ...state, uploaded: payload };
    default:
      return state;
  }
};
