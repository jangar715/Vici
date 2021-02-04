import React, { createContext, useContext, useEffect, useState } from 'react';
import { useFirebase, useCol } from '../Hooks/firebase';

export const AuthContext = createContext({
    user: null,
    ready: false,
});

export const AuthUserProvider = ({ children }) => {
    let [state, setState] = useState({
        ready: false,
        user: null,
    });
    let { auth, googleProvider } = useFirebase();
    let { createRecord } = useCol('users');
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
    const signInWithGmail = () => {
        auth.signInWithPopup(googleProvider)
            .then((result) => {
                createNewUser({ ...result.user, gender: '' });
            })
            .catch((error) => console.log(error.message));
    };
    const signUpWithEmailAndPassword = ({
        email,
        password,
        username,
        gender,
        phone,
    }) => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
                createNewUser({
                    ...result.user,
                    displayName: username,
                    gender: gender,
                    phoneNumber: phone,
                });
                // const currentUser = result.user;
                // createRecord();

                // result.user.displayName = user.username;
                // Signed in
                // ...
            })
            .catch((error) => console.log(error.message));
    };

    useEffect(() => {
        if (!auth) {
            return;
        }
        const subscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                if (authUser.emailVerified === true) {
                    setState({ ready: true });
                }
            }

            authUser
                ? setState({ user: authUser })
                : setState({ user: authUser });
        });

        return () => subscribe();
    }, [auth]);

    return (
        <AuthContext.Provider
            value={{
                ...state,
                auth,
                signInWithGmail,
                signUpWithEmailAndPassword,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export const AuthStateValue = () => useContext(AuthContext);
