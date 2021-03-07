import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import SignUp from './Component/SignUp';
import './Style/main.scss';
import { Provider } from './Providers/provider';
import { TopCollegeProvider } from './Providers/TopCollegeProvider';
import { Infos } from './Component/infos';
import { useDoc, useFirebase } from './Hooks/firebase';
import { AuthStateValue, AuthUserProvider } from './Hooks/auth-user-provider';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Context } from './Providers/provider';

import './Style/App.css';
import Intro from './Component/Intro page/Intro';
import Admin from './Component/Admin/Admin';
import TopColleges from './Component/Top Colleges/TopColleges';
import { async } from 'q';

const App = () => {
    const { user } = AuthStateValue();
    const { auth } = useFirebase();

    return (
        <Router>
            <Provider>
                <Switch>
                    <Route exact path='/'>
                        <Intro />
                    </Route>
                    <Route path='/infos'>
                        <Infos />
                    </Route>
                    <Route path='/user-login'>
                        <SignUp />
                    </Route>
                    <Route path='/admin'>
                        <Admin />
                    </Route>
                    <TopCollegeProvider>
                        <Route path='/top-colleges/'>
                            <TopColleges />
                        </Route>
                    </TopCollegeProvider>
                </Switch>
            </Provider>
        </Router>
    );
};

export default App;
