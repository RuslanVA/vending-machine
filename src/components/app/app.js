import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home-page';

const App = () => {
    return (
        <Switch>
            <Route
                path="/"
                component={HomePage}
                exact />
        </Switch>
    );
};

export default App;