import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { useState } from 'react';
import Color from './Color';
import ColorList from "./ColorList";
import ColorForm from "./ColorForm";

function Routes(){

    const starterColors = {red: "red", blue: "blue", green:"green"}
    const [colors, setColors] = useState(starterColors);

    function newColor(newColorObj) {
        setColors(prevColors => ({ ...prevColors, ...newColorObj }));
      }
      
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/colors">
                <ColorList colors={colors} />
            </Route>
            <Route exact path="/colors/new">
                <ColorForm  newColor={newColor} />
            </Route>
            <Route exact path="/colors/:color">
                <Color colors={colors} />
            </Route>
            <Redirect to="/colors"></Redirect>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;