import React, { useState } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthStateValue } from '../Hooks/auth-user-provider';
import Input from './Input';
import Navbar from './Navbar/Navbar';
import '../Style/SignUp.css';
// import
const SignUp = () => {
    const [newuser, setUser] = useState({
        username: '',
        phone: '',
        gender: '',
        email: '',
        password: '',
        graduateyear: '',
    });
    const {
        signUpWithEmailAndPassword,
        signInWithGmail,
        user,
    } = AuthStateValue();

    return user ? (
        <Redirect to='/' />
    ) : (
        <div className='signup-body'>
            <div className="form-container">
                <div className="input-container">
                    <div className="label-container">
                        <input
                            value={newuser.username}
                            onChange={(e) => {
                                setUser({ ...newuser, username: e.target.value });
                            }}
                            onBlur={() => {
                                setUser({ ...newuser, username: newuser.username.trim() });
                            }}
                            type='text'
                            placeholder='username'
                            className="input-field"
                        />
                    </div>
                    <div className="label-container">
                        <input
                            value={newuser.password}
                            onChange={(e) => {
                                setUser({ ...newuser, password: e.target.value });
                            }}
                            type='password'
                            placeholder='password'
                            className="input-field"
                        />
                    </div>
                    <div className="label-container">
                        <input
                            value={newuser.email}
                            onChange={(e) => {
                                setUser({ ...newuser, email: e.target.value });
                            }}
                            type='text'
                            placeholder='email'
                            // className='password'
                            className="input-field"
                        />
                    </div>
                    <div className="label-container">
                        <input
                            value={newuser.phone}
                            onChange={(e) => {
                                setUser({ ...newuser, phone: e.target.value });
                            }}
                            type='text'
                            placeholder='phone'
                            className="input-field"
                        />
                    </div>
                </div>
                <button
                    type='submit'
                    onClick={(e) => {
                        // e.preventDefault();
                        signInWithGmail();
                    }}
                    className="signup__button"
                >
                    Use gmail
                </button>
                <button
                    type='submit'
                    onClick={(e) => {
                        // e.preventDefault();
                        signUpWithEmailAndPassword(newuser);
                    }}
                    className="signup__button"
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default SignUp;
