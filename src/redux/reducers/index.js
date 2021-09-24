import { combineReducers } from "redux";
import userReducer from "./user";

const rootReducer = combineReducers({
  //Tập hợp tất cả các reducer con ở đây
  //userReducer: userReducer,
  userReducer,
});
export default rootReducer;
