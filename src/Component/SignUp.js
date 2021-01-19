import React, { useState } from 'react';
import { useFirebase, useCol } from '../Hooks/firebase';
import Lines from './Lines';
// import { provider, auth } from '../Hooks/firebase';

const SignUp = () => {
    const [user, setUser] = useState({
        username: '',
        phone: '',
        gender: '',
        email: '',
        password: '',
        graduateyear: '',
    });
    const { auth, googleProvider } = useFirebase();
    const { data, deleteRecord, createRecord } = useCol('users');
    /*
    user : 
        lastname:
        firstname:
        phone number (optional): 
        uid: 
        email: 
        gender: 
        graduate year:

    password
    */
    // const clearAllUsers = () => {
    //     // console.log(data);
    //     data.forEach((el) => {
    //         deleteRecord(el.id);
    //     });
    // };
    // clearAllUsers();

    const createNewUser = ({
        email,
        uid,
        displayName,
        gender,
        phoneNumber,
        role = 'member',
    }) => {
        createRecord(uid, { email, displayName, gender, phoneNumber, role });
    };

    const signInWithGmail = (e) => {
        console.log(googleProvider);
        e.preventDefault();
        auth.signInWithPopup(googleProvider)
            .then((result) => {
                console.log(result.user);
                const { uid, email, displayName } = result.user;
                createNewUser({ ...result.user, gender: '' });
            })
            .catch((error) => console.log(error.message));
    };
    const createUserWithPassword = () => {
        // e.preventDefault();
        if (user.username === '') {
            /// ...
            console.log('username is empty');
            return;
        }
        auth.createUserWithEmailAndPassword(user.email, user.password)
            .then((result) => {
                console.log(result.user);
                // result.user.displayName = user.username;
                createNewUser({
                    ...result.user,
                    displayName: user.username,
                    gender: user.gender,
                    phoneNumber: user.phone,
                });
                // const currentUser = result.user;
                // createRecord();

                // result.user.displayName = user.username;
                // Signed in
                // ...
            })
            .catch((error) => console.log(error.message));
    };

    return (
        <div>
            <form>
                {/* <Lines
                    user={user}
                    setUser={setUser}
                    placeholder='username'
                    attribute={user.username}
                /> */}
                <input
                    value={user.username}
                    onChange={(e) => {
                        console.log(user);
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
                <button type='submit' onClick={signInWithGmail}>
                    sign in with gmail
                </button>
                <button type='submit' onClick={createUserWithPassword}>
                    sign up
                </button>
                {/* <button type='submit' onClick={signIn}>
                    sign in with gmail
                </button> */}
            </form>
        </div>
    );
};

export default SignUp;
