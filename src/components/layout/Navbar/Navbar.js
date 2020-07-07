import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../../redux/auth/authAction'
import './Navbar.scss'
const Navbar = () => {
	const dispatch = useDispatch()
	const [burgerActive, setBurgerActive] = useState(false)
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
	// const user = useSelector((state) => state.auth.user)
	const toggleBurger = () => {
		setBurgerActive(!burgerActive)
	}
	const handleLogout = () => {
		dispatch(logout())
	}
	const authLinks = (
		<>
			<Link to="/" className="nav__item">
        Home
			</Link>
			<Link to="/achievement" className="nav__item">
        Achievements
			</Link>
			<Link to="/about" className="nav__item">
        About
			</Link>
			<div className="nav__item" onClick={handleLogout}>
        Logout
			</div>
		</>
	)
	const guestLinks = (
		<>
			<Link to="/register" className="nav__item">
        Register
			</Link>
			<Link to="/login" className="nav__item">
        Login
			</Link>
			<Link to="/about" className="nav__item">
        About
			</Link>
		</>
	)
	return (
		<div className="nav">
			<div className="nav__logo"> MERN todo list </div>
			<div className="nav__links__container">
				<ul 
					className={`nav__links ${burgerActive ? 'nav__links--active' : ''}`}>
					{isAuthenticated ? authLinks : guestLinks}
				</ul>
				<div className=
					{`nav__burger ${burgerActive ? 'nav__burger--active' : ''}`}
				onClick={toggleBurger}
				>
					<div className="burger__line1"> </div>
					<div className="burger__line2"> </div>
					<div className="burger__line3"> </div>
				</div>
			</div>
		</div>
	)
}
export default Navbar

