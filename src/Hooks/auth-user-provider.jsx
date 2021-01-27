import React, { createContext, useContext, useEffect, useState } from 'react';
import { useFirebase } from '../Hooks/firebase';

export const AuthContext = createContext({
    user: null,
    ready: false,
});

export const AuthUserProvider = ({ children }) => {
    let [state, setState] = useState({
        ready: false,
        user: null,
    });
    let { auth } = useFirebase();

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
        <AuthContext.Provider value={{ ...state, auth }}>
            {children}
        </AuthContext.Provider>
    );
};
export const AuthStateValue = () => useContext(AuthContext);
