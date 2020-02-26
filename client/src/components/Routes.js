import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminView from "./adminView/AdminView";
import CampusView from "./campusView/CampusView";
import FrontPage from "./FrontPage/FrontPage";
import Login from "./login/Login";
import Login2 from "./login2/Login2";
const Routes = () => (
  <Switch>
    <Route exact path="/" component={FrontPage} />
    <Route exact path="/LoginPage" component={Login} />
    <Route exact path="/LoginPage2" component={Login2} />
    <Route exact path="/AdminView" component={AdminView} />
    <Route exact path="/CampusView" component={CampusView} />
  </Switch>
);

export default Routes;
