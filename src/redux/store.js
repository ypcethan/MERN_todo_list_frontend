import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import taskReducer from "./task/taskReducer";
import authReducer from "./auth/authReducer";
import alertReducer from "./alert/alertReducer";

const rootReducer = combineReducers({
  task: taskReducer,
  auth: authReducer,
  alert: alertReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
