import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import user from "./user";
import token from "./token";
import groups from "./groups";
import group from "./group";

export default combineReducers({
  routing: routerReducer,
  user,
  token,
  groups,
  group
});
