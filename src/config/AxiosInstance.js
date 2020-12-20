import { AsyncStorage } from "react-native";
import { serverUrl } from "./GlobalConfig";
import axios from "axios";
import NavigationService from "./NavigationService";
import { ACCESS_TOKEN } from "../config/GlobalConfig";
import store from "../store";
import { LOADING } from "../actions/types";

const fetcher = axios.create({
  baseURL: serverUrl,
  timeout: 0,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json"
  }
});

fetcher.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem(ACCESS_TOKEN);
    const language = await AsyncStorage.getItem("lang");
    config.headers.authorization = `Bearer ${token}`;
    config.headers.lang = "en";
    return config;
  },
  error => Promise.reject(error)
);

fetcher.interceptors.response.use(
  function(response) {
    // Do something with response data

    if (response.data.status_code == 401) {
      store.dispatch({
        type: LOADING,
        payload: false
      });
      AsyncStorage.removeItem(ACCESS_TOKEN);
      NavigationService.navigate("Login");
    }
    return response;
  },
  function(error) {
    // Do something with response error
    if (error.response.status && error.response.status == 401) {
      store.dispatch({
        type: LOADING,
        payload: false
      });
      AsyncStorage.removeItem(ACCESS_TOKEN);
      NavigationService.navigate("Login");
    } else {
      console.log(JSON.stringify(error.response));
    }
    return Promise.resolve(error);
  }
);

export default fetcher;
