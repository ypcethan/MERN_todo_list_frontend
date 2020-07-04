import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, clearError } from "../../../redux/auth/authAction";
import { setAlert } from "../../../redux/alert/alertAction";
import "../Register/Register.scss";

const Login = (props) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email,
        password,
      })
    );
  };
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error) {
      dispatch(setAlert(error));
      dispatch(clearError());
    }
  }, [error, isAuthenticated]);
  return (
    <div className="register__container">
      <div className="register__header">Login</div>
      <div className="register__form__container">
        <form action="" className="register__form">
          <label className="register__input__label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            className="register__form__input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="register__input__label" htmlFor="name">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="register__form__input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="form__submit__btn" onClick={handleSubmit}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
