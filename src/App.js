import React from 'react';
import SignUp from './Component/SignUp';
import { useFirebase } from './Hooks/firebase';
import { AuthStateValue } from './Hooks/auth-user-provider';
// import firebase from 'firebase';

const App = () => {
    const { user } = AuthStateValue();
    const { auth } = useFirebase();
    const logout = () => {
        auth.signOut()
            .then(() => {
                console.log('logged out');
            })
            .catch((error) => console.log(error.message));
    };
    return (
        <div>
            {user ? (
                <>
                    <h1>{user.email}</h1>
                    <button onClick={logout}>logout</button>
                </>
            ) : (
                <SignUp />
            )}
        </div>
    );
};

export default App;
