import axios from "axios";
import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_TASK,
  CLEAR_FILTER,
} from "./taskType";

const baseUrl = "http://localhost:5000";
export const filterTask = (text) => {
  return {
    type: FILTER_TASK,
    payload: text,
  };
};

export const clearFilter = () => {
  return {
    type: CLEAR_FILTER,
  };
};
// export const createTask = (task) => {
//   return {
//     type: CREATE_TASK,
//     payload: task,
//   };
// };

export const createTask = (task) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(baseUrl + "/api/tasks", {
        content: task.content,
        dueData: task.dueData,
      });
      dispatch({
        type: CREATE_TASK,
        payload: task,
      });
    } catch (e) {
      console.error(e);
    }
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
