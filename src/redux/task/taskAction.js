import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "./taskType";

export const createTask = (task) => {
  return {
    type: CREATE_TASK,
    payload: task,
  };
};

export const updateTask = (task) => {
  return {
    type: UPDATE_TASK,
    payload: task,
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const setCurrent = (task) => {
  return {
    type: SET_CURRENT,
    payload: task,
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};
