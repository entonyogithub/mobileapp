import fetcher from "../config/AxiosInstance";
import { LOADING, ERRORS, GET_CONFIG, REFRESHING, MENU_STATUS } from "./types";

export const loading = status => {
  return {
    type: LOADING,
    payload: status
  };
};

export const toggleSideMenu = status => {
  return {
    type: MENU_STATUS,
    payload: status
  };
};

export const refreshing = refreshFlag => {
  return {
    type: REFRESHING,
    payload: refreshFlag
  };
};

export const getErrors = errors => {
  return {
    type: ERRORS,
    payload: errors
  };
};

export const getConfig = () => async dispatch => {
  const res = await fetcher.get(`/api/configuration`);
  if (res.data.success == 1) {
    dispatch({
      type: GET_CONFIG,
      payload: res.data
    });
  }
};
