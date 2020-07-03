
import React from 'react'
import './Register.scss'
const Register = () => {
    return (
        <div className='register__container'>

            <div className='register__header'>
                Register
            </div>
            <div className='register__form__container'>

                <form action="" className='register__form' >
                    <label className='register__input__label' htmlFor="name">Name</label>
                    <input type="text" id='name' placeholder='Name' className='register__form__input' />
                    <label
                        className='register__input__label'
                        htmlFor="password">Password</label>
                    <input type="text" id='password' placeholder='Password'
                        className='register__form__input' />
                    <label className='register__input__label'
                        htmlFor="name">Email</label>
                    <input type="text" id='email' placeholder='Email'
                        className='register__form__input' />
                    <button className='form__submit__btn'>
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register
