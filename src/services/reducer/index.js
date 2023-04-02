import { combineReducers } from "redux";
import { blogReducer } from "./blogs";

const appReducers = combineReducers({
  blogReducer,
});

const rootReducer = (state, action) => {
  return appReducers(state, action);
};

export default rootReducer;
