import types from "./types";

export const setTaskList = (payload) => (dispatch) => {
  return(
  dispatch({ type: types.SET_TASK_LIST, value: payload })
  )
};


export const setUserName = (payload) => (dispatch) => {
  return(
  dispatch({ type: types.SET_USERNAME, value: payload })
  )
};
