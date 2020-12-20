import {
  LOGIN_SUCCESS,
  GET_AUDIOS,
  DELETE_AUDIOS,
  GET_LISTENINGS,
  UPLOAD_SUCCESS
} from "./types";
import _ from "lodash";
import { ACCESS_TOKEN, CLIENT_ID, CLIENT_SECRET } from "../config/GlobalConfig";
import { AsyncStorage, Platform, Alert } from "react-native";
import fetcher from "../config/AxiosInstance";
import { loading, getErrors } from "./CommonActions";
import NavigationService from "../config/NavigationService";
import * as FileSystem from "expo-file-system";
/** LoginUser Action */
export const loginUser = ({ username, password }) => async dispatch => {
  dispatch(loading(true));
  //const token = await AsyncStorage.getItem(DEVICE_PUISH_TOKEN);
  const formData = new FormData();
  formData.append("client_id", CLIENT_ID);
  formData.append("client_secret", CLIENT_SECRET);
  formData.append("username", username);
  formData.append("password", password);
  const res = await fetcher.post("/api/user/login", formData);
  if (res.data.success == 1) {
    AsyncStorage.setItem(ACCESS_TOKEN, res.data.user.token, () => {
      LoginSuccess(dispatch, res.data);
      NavigationService.navigate("Home");
    });
  } else {
    GetErrors(dispatch, res.data.errors);
  }
};

/** Get user data from api Action */
export const getUser = () => async dispatch => {
  dispatch(loading(true));
  const res = await fetcher.get("/api/user/profile");
  if (res.data) {
    if (res.data.success == 1) {
      LoginSuccess(dispatch, res.data);
      dispatch(loading(false));
    } else {
      dispatch(loading(false));
    }
  }
};

export const getAudioFiles = () => async dispatch => {
  dispatch(loading(true));
  const URL =
    Platform.OS == "android"
      ? FileSystem.documentDirectory
      : FileSystem.documentDirectory;
  const check = await FileSystem.getInfoAsync(URL);
  if (check.exists) {
    const data = await FileSystem.readDirectoryAsync(URL);
    const audios_list = await getData(data);
    const audios = _.orderBy(audios_list, ["modificationTime"], ["desc"]);
    dispatch({
      type: GET_AUDIOS,
      payload: audios
    });
  }
  dispatch(loading(false));
};

const getData = async list => {
  return Promise.all(list.map((item, idx) => anAsyncFunction(item, idx)));
};

const anAsyncFunction = async (item, idx) => {
  const URL =
    Platform.OS == "android"
      ? FileSystem.documentDirectory
      : FileSystem.documentDirectory;
  const info = await FileSystem.getInfoAsync(`${URL}/${item}`);
  return functionWithPromise(info, idx);
};

const functionWithPromise = (item, idx) => {
  //a function that returns a promise
  return { id: idx, ...item };
};

export const getListeningsFiles = () => async dispatch => {
  dispatch(loading(true));
  const res = await fetcher.get("/api/user/listenings");
  if (res.data) {
    if (res.data.success == 1) {
      dispatch({
        type: GET_LISTENINGS,
        payload: res.data.data
      });
      dispatch(loading(false));
    } else {
      dispatch(loading(false));
    }
  }
};

export const listeningsComplete = ({
  upload_id,
  class_id
}) => async dispatch => {
  dispatch(loading(true));
  const formData = new FormData();
  formData.append("upload_id", upload_id);
  formData.append("class_id", class_id);
  const res = await fetcher.post("/api/user/listening-complete", formData);
  if (res.data) {
    if (res.data.success == 1) {
      dispatch(loading(false));
    } else {
      dispatch(loading(false));
    }
  }
};

export const UploadFile = file => async dispatch => {
  dispatch(loading(true));
  const formData = new FormData();
  if (file) {
    let uriParts = file.split(".");
    let fileType = uriParts[uriParts.length - 1];
    formData.append("file", {
      uri: file,
      name: `file.${fileType}`,
      type: `Audio/${fileType}`
    });
  }
  const res = await fetcher.post("/api/user/upload", formData);
  if (res.data.success == 1) {
    dispatch({
      type: UPLOAD_SUCCESS,
      payload: true
    });
    dispatch(loading(false));
  } else {
    GetErrors(dispatch, res.data.errors);
  }
};

export const deleteAudioFile = file => async dispatch => {
  dispatch(loading(true));
  await FileSystem.deleteAsync(file);
  dispatch({
    type: DELETE_AUDIOS,
    payload: file
  });
  dispatch(loading(false));
};

/** Get user data from api Action */
export const logout = () => async dispatch => {
  dispatch(loading(true));
  const res = await fetcher.post("/api/user/logout");
  if (res.data) {
    if (res.data.success == 1) {
      AsyncStorage.removeItem(ACCESS_TOKEN);
      NavigationService.navigate("Auth");
      dispatch(loading(false));
    } else {
      dispatch(loading(false));
    }
  }
};

export const LoginSuccess = (dispatch, data) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: data.user
  });
  dispatch(loading(false));
};

export const GetErrors = (dispatch, errors) => {
  dispatch(getErrors(errors));
  dispatch(loading(false));
};
