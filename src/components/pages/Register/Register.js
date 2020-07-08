import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  register as registerUser,
  clearError,
} from "../../../redux/auth/authAction";
import { setAlert } from "../../../redux/alert/alertAction";
import { useForm } from "react-hook-form";
import "./Register.scss";
const Register = (props) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const { register, handleSubmit, errors } = useForm();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    dispatch(
      registerUser({
        name,
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
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  return (
    <div className="register__container">
      <div className="register__header">Register</div>
      <div className="register__form__container">
        <form onSubmit={handleSubmit(onSubmit)} className="register__form">
          <label className="register__input__label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="register__form__input"
            onChange={(e) => setName(e.target.value)}
            ref={register({
              required: "Name is required",
            })}
          />
          {errors.name && <p className="danger">{errors.name.message}</p>}
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
            ref={register({
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password has to have at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="danger">{errors.password.message} </p>
          )}

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
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && <p className="danger"> {errors.email.message}</p>}
          <button type="submit" className="form__submit__btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
