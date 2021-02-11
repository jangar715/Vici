import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Context } from '../Providers/provider'
const Infos = () => {
    const { informations } = useContext(Context);
    console.log(informations)
    return (
        <>
            <Link to="/">Back</Link>
            <ul>
                {informations.map((info) => {
                    return (
                        <li>
                            <Link to={`/infos/${info.header}`}>{info.header}</Link>
                        </li>
                    );
                })}
            </ul>
            <Switch>
                {informations.map((info) => {
                    return (
                        <Route exact path={`/infos/${info.header}`}>
                            <h1>{info.header}</h1>
                            <p>{info.information}</p>
                        </Route>
                    );
                })}       
            </Switch>
            </>
    );
}
export { Infos }