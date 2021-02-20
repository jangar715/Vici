import React, { useContext } from 'react';
import Navbar from './Component/Navbar/Navbar';
import SignUp from './Component/SignUp';
import './Style/main.scss';
import { Provider } from './Providers/provider';
import { Infos } from './Component/infos';
import { useFirebase } from './Hooks/firebase';
import { AuthStateValue, AuthUserProvider } from './Hooks/auth-user-provider';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Context } from './Providers/provider';
import './Style/App.css';
const App = () => {
    const { user } = AuthStateValue();
    const { auth } = useFirebase();
    return (
        <Router>
            <Provider>
                <Switch>
                    <Route exact path='/'>
                        <div>
                            <Navbar />
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
                        {/* <Link to='/'>back</Link> */}
                        <SignUp />
                    </Route>
                </Switch>
            </Provider>
        </Router>
    );
};

export default App;
