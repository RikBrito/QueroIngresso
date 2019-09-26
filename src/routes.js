import {Switch, Route } from 'react-router-dom';
import React from 'react';
import explorer from './pages/explorer/explorer.js';

function Routes(){
    return(
        <Switch> 
            <Route path="/" exact component={explorer} />
        </ Switch>
    );
}

export default Routes;