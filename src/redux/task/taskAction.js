import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_TASK,
  CLEAR_FILTER
} from "./taskType";


export const filterTask = (text) => {
  return {
    type: FILTER_TASK,
    payload: text
  }
}

export const clearFilter = () => {
  return {
    type: CLEAR_FILTER
  }
}
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
