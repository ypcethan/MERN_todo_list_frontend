import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { login, clearError } from "../../../redux/auth/authAction";
import { setAlert } from "../../../redux/alert/alertAction";
import "../Register/Register.scss";

const Login = (props) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const { errors, handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    dispatch(
      login(data)
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
    // eslint-disable-next-line
  }, [error, isAuthenticated]);
  return (
    <div className="register__container">
      <div className="register__header">Login</div>
      <div className="register__form__container">
        <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
          <label className="register__input__label" htmlFor="name">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="register__form__input"
            ref={register({
              required: "Email is required",
            })}
          />
          {errors.email && <p className="danger">{errors.email.message} </p>}
          <label className="register__input__label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            className="register__form__input"
            ref={register({
              required: "Password is required",
            })}
          />
          {errors.password && (
            <p className="danger">{errors.password.message} </p>
          )}
          <button className="form__submit__btn">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
