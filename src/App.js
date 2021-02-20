import React, { useContext } from 'react';
import Navbar from './Component/Navbar/Navbar';
import SignUp from './Component/SignUp';
import { Provider } from './Providers/provider';
import { Infos } from './Component/infos';
import { useFirebase } from './Hooks/firebase';
import { AuthStateValue, AuthUserProvider } from './Hooks/auth-user-provider';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Context } from './Providers/provider';
const App = () => {
    const { user } = AuthStateValue();
    const { auth } = useFirebase();
    console.log(user);
    const logout = () => {
        auth.signOut()
            .then(() => {
                console.log('logged out');
            })
            .catch((error) => console.log(error.message));
    };
    return (
        <Router>
            {/* <AuthUserProvider> */}
            <Provider>
                <Switch>
                    <Route exact path='/'>
                        <div>
                            {/* <Router> */}
                            <Navbar />
                            {/* </Router> */}
                            {user ? (
                                <>
                                    <h1>{user.email}</h1>
                                    <button onClick={logout}>logout</button>
                                </>
                            ) : (
                                <>
                                    <Link to='/user-login'>Login</Link>
                                    <Route path='/user-login'>
                                        <Link to='/'>back</Link>
                                        <SignUp />
                                    </Route>
                                </>
                            )}
                            <div>
                                <h1>Hello World</h1>
                                <Link to='/infos'>Informations</Link>
                            </div>
                        </div>
                    </Route>
                    <Route path='/infos'>
                        <Infos />
                    </Route>
                    <Route path='/user-login'>
                        <Link to='/'>back</Link>
                        <SignUp />
                    </Route>
                </Switch>
            </Provider>
            {/* </AuthUserProvider> */}
        </Router>
    );
};

export default App;
