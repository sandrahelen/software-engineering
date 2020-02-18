import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminView from "./adminView/AdminView";
import FrontPage from "./FrontPage/FrontPage";
import Login from "./login/Login";
const Routes = () => (
  <Switch>
    <Route exact path="/" component={FrontPage} />
    <Route exact path="/LoginPage" component={Login} />
    <Route exact path="/AdminView" component={AdminView} />
  </Switch>
);

export default Routes;