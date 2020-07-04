import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/auth/authAction";
import "./Navbar.scss";
const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const authLinks = (
    <>
      <span className="nav__welcome">Welcome {user}</span>
      <Link to="/" className="nav__item">
        Home
      </Link>
      <Link to="/about" className="nav__item">
        About
      </Link>
      <div className="nav__item" onClick={handleLogout}>
        Logout
      </div>
    </>
  );
  const guestLinks = (
    <>
      <Link to="/register" className="nav__item">
        Register
      </Link>
      <Link to="/login" className="nav__item">
        Login
      </Link>
    </>
  );
  return (
    <div className="nav">
      <div className="nav__logo">MERN todo list</div>
      <div className="nav__links__container">
        <ul className="nav__links">
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
