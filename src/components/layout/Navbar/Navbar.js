import React from 'react'
import "./Navbar.scss"
const Navbar = () => {
    return (
        <div className='nav'>
            <div className="nav__logo">
                Logo
            </div>
            <div className="nav__links__container">
                <ul className='nav__links'>
                    <li className='nav__item'>Home</li>
                    <li className='nav__item'>About</li>
                    <li className='nav__item'>Register</li>
                    <li className='nav__item'>Login</li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar
