import React from 'react';
import { Switch, Route} from 'react-router-dom';
import AdminView from './adminView/AdminView';

const Routes = () => (
    <Switch>
        <Route exact path="/" component = {AdminView} />
    </Switch>
)

export default Routes;

