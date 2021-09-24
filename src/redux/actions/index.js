import * as ActionType from "../constants";

const actUserDelete = (user) => {
  return {
    type: ActionType.DELETE_USER,
    payload: user,
  };
};

const actUserEdit = (user) => {
  return {
    type: ActionType.EDIT_USER,
    payload: user,
  };
};

const actGetKeyword = (keyword) => {
  return {
    type: ActionType.GET_KEYWORD,
    payload: keyword,
  };
};
const actSubmitUser = (user) => {
  return {
    type: ActionType.ON_SUBMIT_USER,
    payload: user,
  };
};
export { actUserDelete, actUserEdit, actGetKeyword, actSubmitUser };
