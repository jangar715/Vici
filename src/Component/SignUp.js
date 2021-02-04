import React, { useState } from 'react';
import { AuthStateValue } from '../Hooks/auth-user-provider';

const SignUp = () => {
    const [user, setUser] = useState({
        username: '',
        phone: '',
        gender: '',
        email: '',
        password: '',
        graduateyear: '',
    });
    const { signUpWithEmailAndPassword, signInWithGmail } = AuthStateValue();

    return (
        <div>
            <form>
                <input
                    value={user.username}
                    onChange={(e) => {
                        setUser({ ...user, username: e.target.value });
                    }}
                    onBlur={() => {
                        setUser({ ...user, username: user.username.trim() });
                    }}
                    type='text'
                    // className='username'
                    placeholder='username'
                />
                <input
                    value={user.password}
                    onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                    }}
                    type='password'
                    placeholder='password'
                    // className='password'
                />
                <input
                    value={user.email}
                    onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                    }}
                    type='text'
                    placeholder='email'
                    // className='password'
                />
                <input
                    value={user.gender}
                    onChange={(e) => {
                        setUser({ ...user, gender: e.target.value });
                    }}
                    type='text'
                    placeholder='gender'
                    // className='gender'
                />
                <input
                    value={user.phone}
                    onChange={(e) => {
                        setUser({ ...user, phone: e.target.value });
                    }}
                    type='text'
                    placeholder='phone'
                    // className='phone'
                />
                <button
                    type='submit'
                    onClick={(e) => {
                        e.preventDefault();
                        signInWithGmail();
                    }}
                >
                    sign in with gmail
                </button>
                <button
                    type='submit'
                    onClick={(e) => {
                        e.preventDefault();
                        signUpWithEmailAndPassword(user);
                    }}
                >
                    sign up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
