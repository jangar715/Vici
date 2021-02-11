import React, { useContext } from 'react';
import SignUp from './Component/SignUp';
import { Provider } from './Providers/provider';
import { Infos } from './Component/infos';
import { useFirebase } from './Hooks/firebase';
import { AuthStateValue } from './Hooks/auth-user-provider';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Context } from './Providers/provider'
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
        <Router>
            <Provider>
                <Switch>
                    <Route exact path="/">
                    <div>
                        {user ? (
                            <>
                                <h1>{user.email}</h1>
                                <button onClick={logout}>logout</button>
                            </>
                        ) : (
                            <SignUp />
                        )}
                        <div>
                            <h1>Hello World</h1>
                            <Link to="/infos">Informations</Link>
                        </div>
                    </div>
                    </Route>
                    <Route path="/infos">
                        <Infos />
                    </Route>
                </Switch>
            </Provider>
        </Router>
    );
};

export default App;
