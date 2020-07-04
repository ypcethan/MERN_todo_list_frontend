import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./authType";
const baseUrl = "http://localhost:5000";

const setHeaderAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

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
      // Have side effect to set token in localStorage
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      });
      setHeaderAuthToken(localStorage.token);
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
      setHeaderAuthToken(localStorage.token);
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

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
