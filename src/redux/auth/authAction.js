import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from "./authType";
const baseUrl = "http://localhost:5000";
export const register = ({ name, password, email }) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(baseUrl + "/api/users/register", {
        email,
        password,
        name,
      });
      // console.log("Success");
      // console.log(response);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      // console.log("Error");
      // console.log(error.response);
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.msg,
      });
    }
  };
};

export const login = ({ password, email }) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(baseUrl + "/api/users/login", {
        email,
        password,
      });
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.msg,
      });
    }
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};
