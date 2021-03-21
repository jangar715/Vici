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
import Education from './Component/Education/Education';

const App = () => {
    const { user } = AuthStateValue();
    const { auth } = useFirebase();
    useEffect(() => {
        if (user) {
            console.log(user.email)
        }
    }, [])
    return (
        <Router>
            <Provider>
                <TopCollegeProvider>
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
                        <Route path='/top-colleges/'>
                            <TopColleges />
                        </Route>
                        <Route path='/education'>
                            <Education />
                        </Route>
                        <Route path='/international-exams'>
                            <Infos />
                        </Route>
                        <Route path='/business'>
                            <Infos />
                        </Route>
                        <Route path='/psychology'>
                            <Infos />
                        </Route>
                        <Route path='/world-history'>
                            <Infos />
                        </Route>
                        <Route path='/extracurriculars'>
                            <Infos />
                        </Route>
                        <Route path='/scholarships'>
                            <Infos />
                        </Route>
                        <Route path='/major'>
                            <Infos />
                        </Route>
                        <Route path='/philosophy'>
                            <Infos />
                        </Route>
                        <Route path='/ideal-plan'>
                            <Infos />
                        </Route>
                        <Route path='/economics'>
                            <Infos />
                        </Route>
                        <Route path='/statistics'>
                            <Infos />
                        </Route>
                    </Switch>
                </TopCollegeProvider>
            </Provider>
        </Router>
    );
};

export default App;
