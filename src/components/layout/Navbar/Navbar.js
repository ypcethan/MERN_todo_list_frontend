import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
const Navbar = () => {
    return (
        <div className='nav'>
            <div className="nav__logo">
                MERN todo list
            </div>
            <div className="nav__links__container">
                <ul className='nav__links'>
                    <Link to='/' className='nav__item'>Home</Link>
                    <Link to='/about' className='nav__item'>About</Link>
                    <Link to='/register' className='nav__item'>Register</Link>
                    <Link to='/login' className='nav__item'>Login</Link>
                </ul>
            </div>
        </div>
    )
}
export default Navbar
