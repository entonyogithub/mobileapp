import { combineReducers } from "redux";
import CommonReducer from "./CommonReducer";
import HomeReducer from "./HomeReducer";
export default combineReducers({
  common: CommonReducer,
  home: HomeReducer
});
