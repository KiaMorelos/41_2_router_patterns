import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import DogDetails from "./DogDetails";
import DogList from './DogList';

function Routes({dogs}){
    return(
        <Switch>
            <Route exact path="/dogs">
                <DogList dogs={dogs} />
            </Route>
            <Route path="/dogs/:name">
                <DogDetails dogs={dogs} />
            </Route>
            <Redirect to="/dogs"></Redirect>
        </Switch>
    )
}

export default Routes;