import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "./taskType";

const initialState = {
  tasks: [
    {
      id: 1,
      completed: false,
      content: "Task 1",
    },
    {
      id: 2,
      completed: false,
      content: "Task 2",
    },
  ],
  current: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    default:
      return state;
  }
};

export default reducer;
