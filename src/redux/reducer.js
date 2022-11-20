import type from "./types";

const INITIAL_STATE = {
    tasks:[],
    task:{
      taskId:"",
      taskDiscription:"",
    },
   userName:""
};

const reducerHandler = (action, state = INITIAL_STATE) => {
  const reducerObject = {
    [type.SET_TASK_LIST]: () => ({
      ...state,
      tasks:[...state.tasks,{
         taskName:action.value.taskName,
        taskKey:action.value.taskKey
      }]
    }),
     [type.SET_USERNAME]: () => ({
      ...state,
      userName:action.value
    }),
    
  };
  return (reducerObject[action.type] && reducerObject[action.type]()) || state;
};

const reducerMiniJira = (action, state) => reducerHandler(state, action);
export default reducerMiniJira;
