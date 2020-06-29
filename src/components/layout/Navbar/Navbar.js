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
                    <li className='nav__item'>Register</li>
                    <li className='nav__item'>Login</li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar
